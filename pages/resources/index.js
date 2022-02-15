import Banner from "../../components/banner";
import SearchInput from "../../components/searchInput";
import ResourceList from "../../components/section-layouts/resource-list";
import {resources} from "../../components/data/resourcedata";

export default function Resources(){

    const bannerMessage ="Recommended Resources";
    return(
        <>
            <Banner bannerMessage={bannerMessage} />
            <div className="container">
                <div className="container">
                    <div className="pt-4">
                        Search Resources by # Tags: <SearchInput/>
                        <div className="mt-4">
                            {resources.map((item, key) => (
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