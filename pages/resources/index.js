import Banner from "../../components/banner";

export default function Resources(){

    const bannerMessage ="Recommended Resources";
    return(
        <>
            <Banner bannerMessage={bannerMessage} />
            <div className="container">
                <h1>Resources</h1>
            </div>
        </>
    )
}