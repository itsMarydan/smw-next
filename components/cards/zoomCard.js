import classes from "./cards.module.css";
import {months} from "../data/months";
export default function ZoomCard(props){
    const zoomDate =  new Date(props.session.date);


    return(
        <>
            <div className="hold-card">
                <div className={classes.card}>
                    <div className={classes.cardHeader}>
                        <div className={classes.widget}>
                            <div className={classes.widgetTitleWrap}>
                                <div className={classes.widgetDate}>
                                    <div className={classes.dateDay}>
                                        {zoomDate.getDate()}
                                    </div>
                                    <div className={classes.dateMonth}>
                                        {months[zoomDate.getMonth()]}
                                    </div>
                                </div>
                                <div className={classes.meetingInfo}>
                                    <span className={classes.infoTitle}>{props.session.title}</span>
                                    <span className={classes.infoTime}>{props.session.time}</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={classes.meetingDetails}>
                        <div className="my-1">
                            <div className="text-center">
                                Host: {props.session.host}
                            </div>
                            <div className="mt-2">
                                <div className="meetingItems">
                                    Meeting ID: {props.session.meetingId}
                                </div>
                                <div className="meetingItems">
                                    Meeting Password: {props.session.password}
                                </div>
                                <div className="meetingItems">
                                    Dail In: {props.session.dail}
                                </div>
                                <div className="meetingItems">
                                    URL: <span className="text-primary"> <a href={props.session.url}>Join Now</a></span>
                                </div>
                            </div>
                            <div className="mt-2">
                                <div className="text-center">
                                    The Agenda
                                </div>
                                <div className="content">
                                    {props.session.agenda}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}