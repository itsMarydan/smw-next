import Banner from "../../components/banner";
import AboutLayout from "../../components/section-layouts/about";
import {API_DOMAIN, REVALIDATE} from "../../helpers/ENUM";
import axios from "axios";


export async function getStaticProps() {

    const key = 'About'
    const urlPage = `${API_DOMAIN}/api/about/${key}`;
    const resPage = await axios.get(urlPage);
    const page = await resPage.data;

    return {
        props: {
            page: page,
        },
        revalidate: REVALIDATE,
    }

}

export default function About(props) {

    const bannerMessage = props.page.pageTitle;

    const page = {
        img: props.page.pageImage,
        title: props.page.pageHeader,
        content: props.page.content
    }
    return (
        <>
            <Banner bannerMessage={bannerMessage}/>
            <div className="container">
                <AboutLayout page={page}/>
            </div>
        </>
    )
}