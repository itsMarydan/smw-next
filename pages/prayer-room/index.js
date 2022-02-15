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

export default function PrayerRoom() {
    const [showCalendar, setShowCalender] = useState(false);
    const [showZoom, setShowZoom] = useState(false);
    const handleCloseCalender = () => setShowCalender(false);
    const handleCloseZoom = () => setShowZoom(false);

    const bannerMessage = "Prayer Room";
    const typeOneData = {
        image: '/images/pray.jpg',
        header: "Why We Pray",
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        button: {
            url: 'send-prayer',
            label: "Send A Prayer"
        }
    }
    const typeTwoData = {
        header: "ICU For Prayers",
        content: "A standard HTML form is a convenient way to make an HTTP request to send data to a server (either your own server or external service).In the example below, clicking \"Register\" will make a POST request to the specified URL."
    }
    const calender = {
        url: "https://calendly.com/olowu-marydan/blueinit-beta-testers"
    }
    const calenderData = {
        title: "Schedule a Prayer Session!",
        show: showCalendar,
        handleClose: handleCloseCalender
    }
    const zoomData = {
        title: "Join Live Zoom Prayer!",
        show: showZoom,
        handleClose: handleCloseZoom
    }
    function showCalender() {
        setShowCalender(true);
    }
    function showZoomModal() {
        setShowZoom(true);
    }
    const showCalenderButton = {
        label: "Schedule a Prayer Appointment"
    }
    const showZoomCall = {
        label: "Join Live Zoom Prayer"
    }
    const ActiveSessions = ZoomSessions.filter(sessions => sessions.isActive === true);
    const volunteer = {
        header: "We Need You!",
        content: "We are accepting volunteers to host prayer session online at any 1 -2 hour intervals of your choice from anywhere in the world." +
            " Be a part of something greater than yourself and reap the rewards God has in store for your willing heart."
    }
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