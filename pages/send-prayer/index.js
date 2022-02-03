import Banner from "../../components/banner";
import Envelop from "../../components/envelop";
import CenteredCardWithBackground from "../../components/cards/centered-card-with-background";
import BtnTypeTwo from "../../components/Buttons/BtnTypeTwo";
import {useEffect, useState} from "react";

export default function SendPrayer() {
    const bannerMessage = "Send A Prayer, Get A Prayer!";
    const [showPrayerForm, setShowPrayerForm] = useState(true);
    const [showPrayerRequest, setShowPrayerRequest] = useState(false);
     const [prayerKey, setPrayerKey] = useState(0);
    const prayers = [
        {
            name: "Mary",
            location: "Minneapolis, MN",
            prayer: "Praying for a husband and a promotion"
        },
        {
            name: "Mark",
            location: "Minneapolis, MN",
            prayer: "Praying for direction on what project to work on next in my non-profit"
        },
        {
            name: "Devin",
            location: "Plymouth, MN",
            prayer: "Praying for healing"
        },
        {
            name: "Austin",
            location: "Brooklyn, MN",
            prayer: "Praying for a promotion"
        }, {
            name: "Greg",
            location: "Blaine, MN",
            prayer: "Believing God for a Wife"
        },
        {
            name: "Adam",
            location: "Blaine, MN",
            prayer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." +
                " It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
        }
    ]
        useEffect(() => {
            setPrayerKey(randomPrayer);
        }, [prayers])
    const button = {
        label: "Send A Prayer"
    }

    function reloadForm () {
        setShowPrayerRequest(false);
        setShowPrayerForm(true);
    }

    function submitPrayer() {
        console.log(`Am here`)
        setShowPrayerForm(false);
        setShowPrayerRequest(true);
    }
    const randomPrayer = Math.floor(Math.random() * prayers.length);

    return (
        <>
            <Banner bannerMessage={bannerMessage}/>
            <div className="container">
                <div className="mt-4">
                    <div className={showPrayerForm ? "d-block": "d-none" }>
                        <Envelop submitPrayer={submitPrayer}/>
                    </div>
                </div>
                <div className={showPrayerRequest ? "d-block": "d-none"}>
                    <CenteredCardWithBackground>
                        <div className="text-center">
                            <BtnTypeTwo button={button} clickAction={reloadForm} />
                            <div className="mt-3">
                               <h5> Pray for {prayers[prayerKey].name}</h5>
                            </div>
                            <div className="mt-1">
                                Location: {prayers[prayerKey].location}
                            </div>
                            <div className="prayer">
                                <h6>Prayer Request</h6>
                               {prayers[prayerKey].prayer}
                            </div>
                        </div>
                    </CenteredCardWithBackground>
                </div>
            </div>
        </>
    )
}