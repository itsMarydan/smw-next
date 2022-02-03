import Banner from "../components/banner";
import TypeOne from "../components/section-layouts/type-one";
import TypeTwo from "../components/section-layouts/type-two";
import BorderedWrap from "../components/section-layouts/bordered-wrap";
import ActionCard from "../components/cards/actionCard";
import {useEffect, useState} from "react";
import BibleVerse from "../components/boards/bibleVerse";
import ContentCard from "../components/cards/contentCard";

//our-domain.com/
export default function Home() {
    const [bibleVerseKey, setBibleVerseKey] = useState(0);
    useEffect(() => {
        setBibleVerseKey(randomVerse);
    })
   const bannerMessage ="Star Mission World";
    const typeOneData = {
        image: '/images/white.jpg',
        header: "Our Mission",
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        button: {
            url: 'about',
            label: "Learn More"
        }
    }

    const cardArray=[{
        title: "Send A Prayer",
        info:  "Send a short prayer request and we will continuously pray with you",
        button: {
            label: "Start",
            url:"/send-prayer",
        }
    },{
        title: "Resources",
        info:  "Find materials and Programs our team members enjoy",
        button: {
            label: "Enjoy",
            url:"/resources",
        }
    },{
        title: "Get Involved",
        info: "Find out how to get involved with Start Mission World",
        button: {
            label: "Start",
            url:"/get-involved",
        }
    },{
        title: "Highlights",
        info: "Enjoy Kingdom Highlights and moments you dont want to miss",
        button: {
            label: "View",
            url:"/highlights",
        }
    }];

    const bibleVerses=[
        {
            location: "John 3:16",
            content:"For God so loved the world that He gave His only begotten Son, that whoever believes in Him should not perish but have everlasting life.",
            version: "NKJV"
        },{
            location: "Mathew 6:33",
            content:" But seek first the kingdom of God and His righteousness, and all these things shall be added to you",
            version: "NKJV"
        },{
            location: "Psalm 119:105",
            content:"Your word is a lamp to my feet And a light to my path.",
            version: "NKJV"
        }
    ]
    const randomVerse = Math.floor(Math.random() * bibleVerses.length);

    return (
      <>
          <Banner bannerMessage={bannerMessage} />
          <div className="bg-dark-choice vh-80">
              <div className="container">
                  <div className="text-white">
                      <TypeOne section={typeOneData} />
                  </div>
              </div>
          </div>

          <BorderedWrap>
              <BibleVerse item={bibleVerses[bibleVerseKey]} />
          </BorderedWrap>

              <div className="container p-5">
                  <div className="row">
                      {cardArray.map((item, key)=> (
                          <div className="col-md-3 p-1" key={key}>
                              <ActionCard card={item} />
                          </div>
                      ))}
                  </div>
              </div>
          <BorderedWrap>
              <div className="text-center">
                  <div className="highlightTitle">Highlights</div>
              </div>
          </BorderedWrap>
          <div className="container">

              <div className="div">
                  <ContentCard />
              </div>
          </div>
      </>
  )
}
