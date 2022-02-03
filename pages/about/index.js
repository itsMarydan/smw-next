import Banner from "../../components/banner";

export default function About(){
    const bannerMessage ="About";
    return(
        <>
            <Banner bannerMessage={bannerMessage} />
            <div className="container">
                <h1>About Page</h1>
            </div>
        </>
    )
}