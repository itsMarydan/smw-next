import {useState} from "react";
import BtnTypeTwo from "../Buttons/BtnTypeTwo";
import axios from "axios";

export default function ContactForm(props) {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [showError, setShowError] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    async function formSubmit() {
        if (!message) {
            setError('Uh-Oh! you must provide a message');
            setShowError(true)
            return
        }


        const formSubmitUrl = `/api/contact`
        try {
            await axios.post(formSubmitUrl, {
                email: email,
                message: message,
                submittedOn: new Date(),
            })

        } catch (error) {
            console.log(error);
            setError('Uh-Oh an error occurred');
            setShowError(true)
            return
        }
        setShowSuccess(true);
    }

    function onEmailChange(e) {
        setEmail(e.target.value)
    }

    function onMessageChange(e) {
        setMessage(e.target.value)
    }


    return (
        <>
            <form>
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
                <fieldset className="form-group">
                    <input type="email" onChange={(e) => onEmailChange(e)} className="form-control" id="email1"
                           placeholder="Enter email"/>
                </fieldset>
                <fieldset className="form-group mt-2">
                    <textarea onChange={(e) => onMessageChange(e)} className="form-control" id="message" rows={3}
                              placeholder="Message"/>
                </fieldset>
                <fieldset className="form-group text-xs-right">
                    <BtnTypeTwo clickAction={formSubmit} button={props.button}/>
                </fieldset>
            </form>
        </>
    )
}