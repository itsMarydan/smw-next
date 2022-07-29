import Banner from "../../components/banner";
import TypeThree from "../../components/section-layouts/type-three";
import BorderedWrap from "../../components/section-layouts/bordered-wrap";
import SearchInput from "../../components/searchInput";
import ResourceList from "../../components/section-layouts/resource-list";
import {API_DOMAIN, REVALIDATE} from "../../helpers/ENUM";
import axios from "axios";

export async function getStaticProps() {

    const key = 'Healing'
    const urlPage = `${API_DOMAIN}/api/healing/${key}`;
    const resPage = await axios.get(urlPage);
    const page = await resPage.data;
    const urlResource = `${API_DOMAIN}/api/resources`;
    const resResource = await axios.get(urlResource);
    const resources = await resResource.data;

    return {
        props: {
            page: page,
            resources: resources,
        },
        revalidate: REVALIDATE,
    }

}


export default function Healing(props) {
    const bannerMessage = props.page.pageTitle;
    const rotateText = props.page.rotateText;

    const section = {
        rotate: rotateText,
        img: props.page.image,
        title: props.page.pageHeader,
        content:props.page.content,

    }

    const healingResources = props.resources.filter(resource => resource.isHealing === true);
    return (
        <>
            <Banner bannerMessage={bannerMessage}/>
            <TypeThree section={section}/>
            <BorderedWrap>
                <div className="text-center">
                    <div className="highlightTitle">Resources Related to Healing</div>
                </div>
            </BorderedWrap>
            <div className="container">
                <div className="pt-4">
                    Search Resources by # Tags: <SearchInput/>
                    <div className="mt-4">
                        {healingResources.map((item, key) => (
                            <div key={key}>
                                <ResourceList resource={item}/>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </>
    )
}

