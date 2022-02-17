import Banner from "../../components/banner";
import TypeOne from "../../components/section-layouts/type-one";
import BorderedWrap from "../../components/section-layouts/bordered-wrap";
import TypeTwo from "../../components/section-layouts/type-two";
import ModalOne from "../../components/modal/modalOne";
import Calender from "../../components/calender";
import BtnTypeTwo from "../../components/Buttons/BtnTypeTwo";
import {useState} from "react";
import ZoomCard from "../../components/cards/zoomCard";
import {ZoomSessions} from "../../components/data/zoomSessions";
import FormOne from "../../components/Forms/formOne";
import {API_DOMAIN} from "../../helpers/ENUM";
import axios from "axios";


export async function getStaticProps() {
    const key = 'prayer';
    const urlPage = `${API_DOMAIN}/api/prayer/${key}`;
    const resPage = await axios.get(urlPage);
    const page = await resPage.data;
    const urlZoom = `${API_DOMAIN}/api/zooms`;
    const resZoom = await axios.get(urlZoom);
    const zoom = await resZoom.data;
    return {
        props: {
            page: page,
            zoom: zoom

        },
        revalidate: 10,
    }

}
export default function PrayerRoom(props) {
    const [showCalendar, setShowCalender] = useState(false);
    const [showZoom, setShowZoom] = useState(false);
    const handleCloseCalender = () => setShowCalender(false);
    const handleCloseZoom = () => setShowZoom(false);

    const bannerMessage = props.page.pageTitle;
    const typeOneData = {
        image: props.page.image,
        header: props.page.headerOne,
        content: props.page.contentOne,
        button:props.page.buttonOne
    }
    const typeTwoData = {
        header: props.page.headerTwo,
        content:props.page.contentTwo
    }
    const calender = {
        url: props.page.calenderUrl
    }
    const calenderData = {
        title: props.page.calenderTitle,
        show: showCalendar,
        handleClose: handleCloseCalender
    }
    const zoomData = {
        title: props.page.zoomTitle,
        show: showZoom,
        handleClose: handleCloseZoom
    }
    function showCalender() {
        setShowCalender(true);
    }
    function showZoomModal() {
        setShowZoom(true);
    }
    const showCalenderButton = props.page.calenderButton;
    const showZoomCall = props.page.zoomButton;
    const ActiveSessions = props.zoom.filter(sessions => sessions.isActive === true);
    const volunteer = {
        header: props.page.volunteerHeader,
        content: props.page.volunteerContent
    }
    const showZoomMessage = ActiveSessions.length === -1 ? true : false;
    return (
        <>
            <Banner bannerMessage={bannerMessage}/>
            <div className="mt-4">
                <TypeOne section={typeOneData}/>
                <BorderedWrap/>
                <TypeTwo section={typeTwoData}>
                    <div className="mt-3 text-center">
                        <div className="d-inline-flex">
                            <BtnTypeTwo clickAction={showCalender} button={showCalenderButton}/>
                            <div className="mx-2"/>
                            <BtnTypeTwo clickAction={showZoomModal} button={showZoomCall}/>
                        </div>
                    </div>
                    <ModalOne section={calenderData}>
                        <Calender calender={calender}/>
                    </ModalOne>
                    <ModalOne section={zoomData}>
                        <div className={showZoomMessage ? "d-block" : "d-none"}>We have no active ZOOM sessions at this this time</div>
                        <div className="row">
                            {ActiveSessions.map((item, key) => (
                                <div key={key} className="col-md-12 my-2">
                                    <ZoomCard session={item}/>
                                </div>
                            ))}

                        </div>
                    </ModalOne>
                </TypeTwo>
                <BorderedWrap />
                <TypeTwo section={volunteer}>
                    <FormOne />
                </TypeTwo>
            </div>
        </>
    )
}