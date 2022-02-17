import Banner from "../../components/banner";
import classes from "../events/event.module.css";
import ContentCard from "../../components/cards/contentCard";
import {API_DOMAIN} from "../../helpers/ENUM";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";

export async function getStaticProps() {
    const key = 'Highlights'
    const urlPage = `${API_DOMAIN}/api/page/${key}`;
    const resPage = await axios.get(urlPage);
    const page = await resPage.data;
    const urlHighlight = `${API_DOMAIN}/api/highlights`;
    const resHighlight = await axios.get(urlHighlight);
    const highlights = await resHighlight.data;

    return {
        props: {
            page: page,
            highlights: highlights
        },
        revalidate: 10,
    }

}

export default function Highlights(props) {

    const bannerMessage = props.page.title;
    const content = props.page.content;
    const highlights = props.highlights;
    return (
        <>
            <Banner bannerMessage={bannerMessage}/>
            <div className="container my-4">
                <div className={classes.sectionHeaderContent}>
                    {ReactHtmlParser(content)}
                </div>
            </div>
            <div className="container">
                <div className="mt-4">
                    <div className="container mt-4">
                        <div className="container mx-auto mt-4">
                            <div className="row">
                                {highlights.map((item, key) => (
                                    <div  key={key} className="col-md-4">
                                        <ContentCard card={item}/>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}