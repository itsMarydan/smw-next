import Banner from "../../components/banner";
import classes from "../events/event.module.css";
import ContentCard from "../../components/cards/contentCard";

export default function Highlights() {

    const bannerMessage = "Highlights";

    return (
        <>
            <Banner bannerMessage={bannerMessage}/>
            <div className="container my-4">
                <div className={classes.sectionHeaderContent}>
                    We want to call your attention to some events and activities going on in the
                    community that may be of interest to you as they relate to our mission and core values,
                    we hope that theses resources will be helpful to you and you might take part in a few of them as
                    your time permits. We are here for you and want to expose you to as many resources as we can.
                </div>
            </div>
            <div className="container">

                <div className="mt-4">
                    <ContentCard />
                </div>
            </div>
        </>
    )
}