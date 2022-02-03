import classes from "./board.module.css";

export default function BibleVerse(props) {

    return (
        <>
            <div className="text-center">
                <div className={classes.title}>{props.item.location}</div>
                <div className={classes.info}>{props.item.content}</div>
                <div className={classes.info}>- {props.item.version}</div>
            </div>
        </>
    )
}