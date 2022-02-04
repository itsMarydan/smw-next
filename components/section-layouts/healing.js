import classes from "./section-types.module.css";
import ReactRotatingText from "react-rotating-text";

export default function Healing(props){
    return(
        <>
            <div className="container">
                <div className={classes.sectionHeader}>
                    <div className="text-center">
                        <ReactRotatingText items={props.section.rotate}/>
                    </div>
                </div>
            </div>
        </>
    )
}