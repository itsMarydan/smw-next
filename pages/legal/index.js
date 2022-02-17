import Banner from "../../components/banner";
import {API_DOMAIN} from "../../helpers/ENUM";
import axios from "axios";
import ReactHtmlParser from 'react-html-parser';

export async function getStaticProps() {
    const key = 'Legal';
    const urlPage = `${API_DOMAIN}/api/page/${key}`;
    const resPage = await axios.get(urlPage);
    const page = await resPage.data;
    return {
        props: {
            page: page,


        },
        revalidate: 10,
    }

}

export default function Legal(props) {
    const bannerMessage = props.page.title;
    const content = props.page.content;
    return (
        <>
            <Banner bannerMessage={bannerMessage}/>
            <div className="mt-5">
                <div className="container">
                    {ReactHtmlParser(content)}
                </div>
            </div>
        </>
    )
}