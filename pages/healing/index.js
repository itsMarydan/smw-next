import Banner from "../../components/banner";
import TypeThree from "../../components/section-layouts/type-three";
import BorderedWrap from "../../components/section-layouts/bordered-wrap";
import SearchInput from "../../components/searchInput";
import ResourceList from "../../components/section-layouts/resource-list";
import {resources} from "../../components/data/resourcedata";


export default function Healing() {
    const bannerMessage = "Inner Healing";
    const rotateText = [
        "Just Breathe",
        "Love is never Far",
        "Let go of the past",
        "Experience inner peace"
    ]

    const section = {
        rotate: rotateText,
        img: "/images/inner.jpg",
        title: "Healing that starts from the inside out",
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, " +
            "making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, " +
            "and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years," +
            " sometimes by accident, sometimes on purpose (injected humour and the like).",

    }

    const healingResources = resources.filter(resource => resource.isHealing === true);
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

