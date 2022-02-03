import classes from "./cards.module.css";

export default function ActionCard(props){
    return(
        <>
            <div className="card bg-dark">
                <div className="p-2">
                    <div className={classes.actionText}>
                        {props.card.title}
                    </div>
                    <div className="text-white">
                        {props.card.info}
                    </div>
                </div>
            </div>
        </>
    )
}