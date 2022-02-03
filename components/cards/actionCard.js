import classes from "./cards.module.css";
import BtnTypeThree from "../Buttons/BtnTypeThree";

export default function ActionCard(props) {

    return (
        <>
            <div className="card bg-dark-choice">
                <div className="pt-2 px-2 pb-4">
                    <div className={classes.actionText}>
                        {props.card.title}
                    </div>
                    <div className="text-white mt-2">
                        <div className={classes.actionInfo}>
                            {props.card.info}
                        </div>
                    </div>
                    <BtnTypeThree button={props.card.button}/>
                </div>
            </div>
        </>
    )
}