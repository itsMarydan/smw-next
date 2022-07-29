//our-domain.com/events
import Link from "next/link";
import Banner from "../../components/banner";
import classes from "./event.module.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCalendar} from "@fortawesome/free-solid-svg-icons";
import BorderedWrap from "../../components/section-layouts/bordered-wrap";
import {API_DOMAIN, REVALIDATE} from "../../helpers/ENUM";
import axios from "axios";
import FormThree from "../../components/Forms/formThree";


export async function getStaticProps() {

    const key = 'Events and Activities'
    const urlPage = `${API_DOMAIN}/api/eventspage/${key}`;
    const resPage = await axios.get(urlPage);
    const page = await resPage.data;
    const urlEvent = `${API_DOMAIN}/api/events`;
    const resEvent = await axios.get(urlEvent);
    const events = resEvent.data;

    return {
        props: {
            page: page,
            events: events
        },
        revalidate: REVALIDATE,
    }

}

export default function EventsPage(props) {
    const bannerMessage = props.page.pageHeader;
    const eventsPublishedActive = props.events.filter(item => item.active === true && item.contentStatus === true);
    const eventsPublishedInactive = props.events.filter(item => item.active === false && item.contentStatus === true);
    return (
        <>
            <Banner bannerMessage={bannerMessage}/>
            <div className="my-4">
                <div className="container">
                    <div className={classes.categoryHeader}>
                        {props.page.headerOne}
                    </div>
                    {eventsPublishedActive.map((item, key) => (
                        <div className="div" key={key}>
                            <FontAwesomeIcon size="1x" icon={faCalendar}/> <Link
                            href={`/events/${item.slug}`}>{item.title}</Link>
                        </div>
                    ))}
                </div>
            </div>
            <div className="my-4">
                <div className="container">
                    <div className={classes.categoryHeader}>
                        {props.page.headerTwo}
                    </div>

                    <div className={classes.categoryList}>
                        {eventsPublishedInactive.map((item, key) => (
                            <div className="div" key={key}>
                                <FontAwesomeIcon size="1x" icon={faCalendar}/> <Link
                                href={`/events/${item.slug}`}>{item.title}</Link>
                            </div>
                        ))}
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
                <FormThree/>
            </div>
        </>
    )
}

