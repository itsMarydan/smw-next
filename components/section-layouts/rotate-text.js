import classes from "./section-types.module.css";
import ReactRotatingText from "react-rotating-text";

export default function RotateText(props){
    return(
        <>
            <div className="container">
                <div className={classes.sectionHeader}>
                        <ReactRotatingText items={props.rotate}/>
                </div>
            </div>
        </>
    )
}