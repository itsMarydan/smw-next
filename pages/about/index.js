import Banner from "../../components/banner";
import AboutLayout from "../../components/section-layouts/about";

export default function About(){
    const bannerMessage ="About";

    const page={
        img:"/images/profile.jpg",
    }
    return(
        <>
            <Banner bannerMessage={bannerMessage} />
            <div className="container">
                <AboutLayout page={page} />
            </div>
        </>
    )
}