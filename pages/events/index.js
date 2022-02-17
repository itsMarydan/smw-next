//our-domain.com/events
import Link from "next/link";
import Banner from "../../components/banner";
import classes from "./event.module.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCalendar} from "@fortawesome/free-solid-svg-icons";
import BorderedWrap from "../../components/section-layouts/bordered-wrap";
import FormOne from "../../components/Forms/formOne";
import {API_DOMAIN} from "../../helpers/ENUM";
import axios from "axios";


export async function getStaticProps() {

    const key = 'Events and Activities'
    const urlPage = `${API_DOMAIN}/api/eventspage/${key}`;
    const resPage = await axios.get(urlPage);
    const page = await resPage.data;

    return {
        props: {
            page: page,
        },
        revalidate: 10,
    }

}
export default function EventsPage(props) {
    const bannerMessage = props.page.pageHeader;
    return (
        <>
            <Banner bannerMessage={bannerMessage}/>
            <div className="my-4">
                <div className="container">
                    <div className={classes.categoryHeader}>
                        {props.page.headerOne}
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
                        {props.page.headerTwo}
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
                        {props.page.headerThree}
                    </div>
                </div>
            </BorderedWrap>

            <div className="container">
                    <div className={classes.sectionHeaderContent}>
                        {props.page.content}
                    </div>
                <FormOne />
            </div>
        </>
    )
}

