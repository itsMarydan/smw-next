import classes from "./envelop.module.css";
import BtnTypeTwo from "../Buttons/BtnTypeTwo";
import {useState} from "react";
import axios from "axios";

export default function Envelop({submitPrayer}) {
    const button = {
        label: "Send Prayer Request"
    }
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [showError, setShowError] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [name, setName] = useState('');

    function onEmailChange(e) {
        setEmail(e.target.value)
    }

    function onMessageChange(e) {
        setMessage(e.target.value)
    }

    function onNameChange(e) {
        setName(e.target.value)
    }


    return (
        <>
            <div className={classes.hide}>
                <div className={classes.envelope}>
                    <div className={classes.back}></div>
                    <div className={classes.letter}>
                        <div className={showSuccess ? "" : "d-none"}>
                            <div className="alert alert-success" role="alert">
                                Your message was sent! <button onClick={() => setShowSuccess(false)} className="float-end btn">
                                <h4>X</h4></button>
                            </div>
                        </div>
                        <div className={showError ? "" : "d-none"}>
                            <div className="alert alert-danger" role="alert">
                                {error}
                                <button onClick={() => setShowError(false)} className="float-end btn"><h4>X</h4></button>
                            </div>
                        </div>
                        <div className="text-center">
                            <BtnTypeTwo clickAction={() => submitPrayer(name, email,message, setError, setShowError, setShowSuccess)} button={button} />
                        </div>
                        <form >
                            <p>
                                <label>Name:</label>
                                <input onChange={(e) => onNameChange(e)} type="text"  id="name"
                                       placeholder="Name" />
                            </p>
                            <p>
                                <label>Email:</label>
                                <input type="email" onChange={(e) => onEmailChange(e)} id="email1"
                                       placeholder="Enter email"/>
                            </p>
                            <p>
                                <label>Prayer Request:</label>
                                <textarea  onChange={(e) => onMessageChange(e)}  id="prayerRequest"></textarea>
                            </p>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}