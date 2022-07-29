import Banner from "../../components/banner";
import SearchInput from "../../components/searchInput";
import ResourceList from "../../components/section-layouts/resource-list";
import {API_DOMAIN, REVALIDATE} from "../../helpers/ENUM";
import axios from "axios";

export async function getStaticProps() {
    const key = 'Resources';
    const urlResource = `${API_DOMAIN}/api/resources`;
    const resResource = await axios.get(urlResource);
    const resources = await resResource.data;
    const urlPage = `${API_DOMAIN}/api/page/${key}`;
    const resPage = await axios.get(urlPage);
    const page = await resPage.data;



    return {
        props: {
            resources: resources,
            page: page

        },
        revalidate: REVALIDATE,
    }

}
export default function Resources(props){

    const bannerMessage =props.page.title;
    return(
        <>
            <Banner bannerMessage={bannerMessage} />
            <div className="container">
                <div className="container">
                    <div className="pt-4">
                        Search Resources by # Tags: <SearchInput/>
                        <div className="mt-4">
                            {props.resources.map((item, key) => (
                                <div key={key}>
                                    <ResourceList resource={item}/>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}