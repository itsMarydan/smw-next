import Banner from "../components/banner";
import BorderedWrap from "../components/section-layouts/bordered-wrap";
import ActionCard from "../components/cards/actionCard";
import BibleVerse from "../components/boards/bibleVerse";
import ContentCard from "../components/cards/contentCard";
import TypeFour from "../components/section-layouts/type-four";
import axios from "axios";
import {API_DOMAIN} from "../helpers/ENUM";
import {forEach} from "react-bootstrap/ElementChildren";

//our-domain.com/

export async function getStaticProps() {
    const key = 'Home'
    const urlHome = `${API_DOMAIN}/api/home/${key}`;
    const resHome = await axios.get(urlHome);
    const urlBible = `${API_DOMAIN}/api/bibles`;
    const resBible = await axios.get(urlBible);
    const urlCard = `${API_DOMAIN}/api/cards`
    const resCard = await axios.get(urlCard);
    const home = await resHome.data;
    const bibleVerses = await resBible.data;
    const cards = await resCard.data;
    const urlHighlight = `${API_DOMAIN}/api/highlights`;
    const resHighlight = await axios.get(urlHighlight);
    const highlights = await resHighlight.data;

    return {
        props: {
            home: home,
            bibleVerses: bibleVerses,
            cards: cards,
            highlights: highlights
        },
        revalidate: 10,
    }

}

export default function Home(props) {
    const bannerMessage = props.home.pageHeader;
    const imageUrl = props.home.imageOne;
    const highlights = props.highlights;
    const typeOneData = {
        image: imageUrl,
        header: props.home.headerOne,
        content: props.home.contentOne,
        button: {
            url: props.home.buttonUrlOne,
            label: props.home.buttonLabelOne
        }
    }


    const cardArray =props.cards;
    const bibleVerses = props.bibleVerses;
    const bibleVerseKey = Math.floor(Math.random() * bibleVerses.length);
    return (
        <>
            <Banner bannerMessage={bannerMessage}/>
            <div className="bg-dark-choice vh-80">
                <div className="container">
                    <div className="text-white">
                        <TypeFour section={typeOneData}/>
                    </div>
                </div>
            </div>

            <BorderedWrap>
                <BibleVerse item={bibleVerses[bibleVerseKey]}/>
            </BorderedWrap>

            <div className="container p-5">
                <div className="row">
                    {cardArray.map((item, key) => (
                        <div className="col-md-3 p-1" key={key}>
                            <ActionCard card={item}/>
                        </div>
                    ))}
                </div>
            </div>
            <BorderedWrap>
                <div className="text-center">
                    <div className="highlightTitle">{props.home.headerTwo}</div>
                </div>
            </BorderedWrap>
            <div className="container">
                <div className="container">
                    <div className="mt-4">
                        <div className="container mt-4">
                            <div className="container mx-auto mt-4">
                                <div className="row">
                                    {highlights.map((item, key) => (
                                        <div key={key} className="col-md-4">
                                            <ContentCard card={item}/>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

