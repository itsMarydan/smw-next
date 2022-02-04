import Banner from "../../components/banner";
import classes from "../events/event.module.css";
import ContentCard from "../../components/cards/contentCard";

export default function Highlights() {

    const bannerMessage = "Highlights";
    const content = `We want to call your attention to some events and activities going on in the
                    community that may be of interest to you as they relate to our mission and core values,
                    we hope that theses resources will be helpful to you and you might take part in a few of them as
                    your time permits. We are here for you and want to expose you to as many resources as we can.`;
    const highlights = [
        {
            img: "/images/mission.jpg",
            title: "Card Title",
            subtitle: "Card Subtitle",
            content: "Some quick example text to build on the card title and make up the bulk of the cards content.Some quick example text to build on the card title and make up the bulk of the cards content.",
            tag: "Pray",
            linkLabel: "See More",
            linkUrl: "/highlights"
        }, {
            img: "/images/mission.jpg",
            title: "Card Title",
            subtitle: "Card Subtitle",
            content: "Some quick example text to build on the card title and make up the bulk of the cards content.Some quick example text to build on the card title and make up the bulk of the cards content.",
            tag: "Pray",
            linkLabel: "See More",
            linkUrl: "/highlights"
        }
    ]
    return (
        <>
            <Banner bannerMessage={bannerMessage}/>
            <div className="container my-4">
                <div className={classes.sectionHeaderContent}>
                    {content}
                </div>
            </div>
            <div className="container">
                <div className="mt-4">
                    <div className="container mt-4">
                        <div className="container mx-auto mt-4">
                            <div className="row">
                                {highlights.map((item, key) => (
                                    <div  key={key} className="col-md-4">
                                        <ContentCard card={item}/>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}