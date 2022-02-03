import classes from "./envelop.module.css";
import BtnTypeTwo from "../Buttons/BtnTypeTwo";

export default function Envelop({submitPrayer}) {
    const button = {
        label: "Send Prayer Request"
    }
    return (
        <>
            <div className={classes.hide}>
                <div className={classes.envelope}>
                    <div className={classes.back}></div>
                    <div className={classes.letter}>
                        <div className="text-center">
                            <BtnTypeTwo clickAction={submitPrayer} button={button} />
                        </div>
                        <form >
                            <p>
                                <label>Name:</label>
                                <input type="text" name="name"/>
                            </p>
                            <p>
                                <label>Email:</label>
                                <input type="email" name="email"/>
                            </p>
                            <p>
                                <label>Prayer Request:</label>
                                <textarea></textarea>
                            </p>
                            <input onSubmit={(event) => {
                                alert(`Im working`)
                            }} type="submit" value="Send"/>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}