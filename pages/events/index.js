//our-domain.com/events
import Link from "next/link";
import Banner from "../../components/banner";
import classes from "./event.module.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCalendar} from "@fortawesome/free-solid-svg-icons";
import BorderedWrap from "../../components/section-layouts/bordered-wrap";
import FormOne from "../../components/Forms/formOne";

export default function EventsPage() {
    const bannerMessage = "Events and Activities";
    return (
        <>
            <Banner bannerMessage={bannerMessage}/>
            <div className="my-4">
                <div className="container">
                    <div className={classes.categoryHeader}>
                        Upcoming Events & Activities
                    </div>
                    <div className="div">
                        <FontAwesomeIcon size="1x" icon={faCalendar}/> <Link href='/events/new-event'> New Event</Link>
                    </div>
                    <div className="div">
                        <FontAwesomeIcon size="1x" icon={faCalendar}/> <Link href='/events/another-event'>Another Event</Link>

                    </div>
                    <div className="div">
                        <FontAwesomeIcon size="1x" icon={faCalendar}/> <Link href='/events/old-event'>Old Event</Link>
                    </div>
                </div>
            </div>
            <div className="my-4">
                <div className="container">
                    <div className={classes.categoryHeader}>
                        Past Events & Activities
                    </div>

                    <div className={classes.categoryList}>
                        <div className="div">
                            <FontAwesomeIcon size="1x" icon={faCalendar}/> <Link href='/events/new-event'> New Event</Link>
                        </div>
                        <div className="div">
                            <FontAwesomeIcon size="1x" icon={faCalendar}/> <Link href='/events/another-event'>Another Event</Link>

                        </div>
                        <div className="div">
                            <FontAwesomeIcon size="1x" icon={faCalendar}/> <Link href='/events/old-event'>Old Event</Link>
                        </div>
                    </div>
                </div>
            </div>
            <BorderedWrap>
                <div className="text-center">
                    <div className={classes.sectionHeader}>
                        Host an Activity
                    </div>
                </div>
            </BorderedWrap>

            <div className="container">
                    <div className={classes.sectionHeaderContent}>
                        It is a long established fact that a reader will be distracted by the readable content of a
                        page when looking at its layout.
                        It is a long established fact that a reader will be distracted by the readable content of a
                        page when looking at its layout.
                    </div>
                <FormOne />
            </div>
        </>
    )
}

