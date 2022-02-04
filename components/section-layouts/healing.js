import classes from "./section-types.module.css";
import ReactRotatingText from "react-rotating-text";

export default function HealingSection(){
    const rotateText = [
        "Just Breathe",
        "Love is never Far",
        "Let go of the past",
        "Experience inner peace"
    ]
    return(
        <>
            <div className="container">
                <div className={classes.sectionHeader}>
                        <ReactRotatingText items={rotateText}/>
                </div>
            </div>
        </>
    )
}