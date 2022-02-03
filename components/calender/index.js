import React from "react";
import { InlineWidget } from "react-calendly";
import classes from "./calender.module.css";
export default function Calender(props){

    return(
        <>
            <div className={classes.scroll}>
                <InlineWidget url={props.calender.url} />
            </div>
        </>
    )
}
