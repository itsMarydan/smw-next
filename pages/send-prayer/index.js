import Banner from "../../components/banner";
import Envelop from "../../components/envelop";
import CenteredCardWithBackground from "../../components/cards/centered-card-with-background";
import BtnTypeTwo from "../../components/Buttons/BtnTypeTwo";
import {useState} from "react";
import {API_DOMAIN, REVALIDATE} from "../../helpers/ENUM";
import axios from "axios";

export async function getStaticProps() {
    const key = 'send-prayer'
    const urlSendPrayer = `${API_DOMAIN}/api/sendprayer/${key}`;
    const resSendPrayer = await axios.get(urlSendPrayer);
    const urlPrayers = `${API_DOMAIN}/api/form/prayerforms`
    const resPrayers = await axios.get(urlPrayers);

    const sendPrayer = await resSendPrayer.data;
    const prayers = resPrayers.data;

    return {
        props: {
            sendPrayer: sendPrayer,
            prayers: prayers
        },
        revalidate: REVALIDATE,
    }

}

export default function SendPrayer(props) {
    const bannerMessage = props.sendPrayer.pageTitle;
    const [showPrayerForm, setShowPrayerForm] = useState(true);
    const [showPrayerRequest, setShowPrayerRequest] = useState(false);

    const prayers = props.prayers;
    const button = props.sendPrayer.button;

    function reloadForm() {
        setShowPrayerRequest(false);
        setShowPrayerForm(true);
    }

    async function submitPrayer(name, email,message, setError, setShowError, setShowSuccess) {
        if (!message) {
            setError('Uh-Oh! you must provide a prayer request');
            setShowError(true)
            return
        }

        const formSubmitUrl = `/api/prayer`
        try {
            await axios.post(formSubmitUrl, {
                name: name,
                email: email,
                prayerRequest: message,
                submittedOn: new Date(),

            })

        } catch (error) {
            console.log(error);
            setError('Uh-Oh an error occurred');
            setShowError(true)
            return
        }
        setShowSuccess(true);
        setShowPrayerForm(false);
        setShowPrayerRequest(true);
    }

    const randomPrayer = Math.floor(Math.random() * prayers.length);


    return (
        <>
            <Banner bannerMessage={bannerMessage}/>
            <div className="container">
                <div className="mt-4">
                    <div className={showPrayerForm ? "d-block" : "d-none"}>
                        <Envelop submitPrayer={submitPrayer}/>
                    </div>
                </div>
                <div className={showPrayerRequest ? "d-block" : "d-none"}>
                    <CenteredCardWithBackground>
                        <div className="text-center">
                            <BtnTypeTwo button={button} clickAction={reloadForm}/>
                            <div className="mt-3">
                                <h5> Pray for {prayers[randomPrayer].name}</h5>
                            </div>
                            <div className="mt-1">
                                Location: {prayers[randomPrayer].location}
                            </div>
                            <div className="prayer">
                                <h6>Prayer Request</h6>
                                {prayers[randomPrayer].prayer}
                            </div>
                        </div>
                    </CenteredCardWithBackground>
                </div>
            </div>
        </>
    )
}