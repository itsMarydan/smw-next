import Banner from "../../components/banner";
import FormTwo from "../../components/Forms/formTwo";
import {API_DOMAIN, REVALIDATE} from "../../helpers/ENUM";
import axios from "axios";

export async function getStaticProps() {

    const key = 'Get Involved'
    const urlPage = `${API_DOMAIN}/api/page/${key}`;
    const resPage = await axios.get(urlPage);
    const page = await resPage.data;

    return {
        props: {
            page: page,
        },
        revalidate: REVALIDATE,
    }

}

export default function GetInvolved(props) {

    const bannerMessage = props.page.title;

    return (
        <>
            <Banner bannerMessage={bannerMessage}/>
            <div className="container">
                <FormTwo/>
            </div>
        </>
    )
}