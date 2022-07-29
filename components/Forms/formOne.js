import classes from "./form.module.css";
import BtnTypeTwo from "../Buttons/BtnTypeTwo";
import {useState} from "react";
import axios from "axios";
export default function FormOne(){
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const [showError, setShowError] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const interestType = "Prayer Room";
    async function processForm() {
        if (!message) {
            setError('Uh-Oh! you must provide a message');
            setShowError(true)
            return
        }
        const formSubmitUrl = `/api/interest`
        try {
            await axios.post(formSubmitUrl, {
                name:name,
                email:email,
                message:message,
                interestType:interestType,
                phone: phone,
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

    function onNameChange(e) {
        setName(e.target.value)
    }


    function onPhoneChange(e) {
        setPhone(e.target.value)
    }

    const button ={
        label: "Send Request"
    }

    return(
        <>
            <div className={classes.form}>
                <div className={classes.card}>
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
                    <form>
                        <div className="form-group mt-1">
                            <label htmlFor="name">Name</label>
                            <input onChange={(e) => onNameChange(e)} type="text" className="form-control" id="name"
                                   placeholder="Name" />
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="email">Email</label>
                            <input onChange={(e) => onEmailChange(e)} type="email" className="form-control" id="email"
                                   placeholder="name@email.com" required/>
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="phone">Phone</label>
                            <input onChange={(e) => onPhoneChange(e)} type="tel" className="form-control" id="phone"
                                   placeholder="+1 234 567 8910"   required/>
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="message">More about you and your interest in the prayer room</label>
                            <textarea onChange={(e) => onMessageChange(e)} className="form-control" id="message" rows="4" />
                        </div>
                        <div className="mb-1">
                            <BtnTypeTwo clickAction={processForm} button={button} />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}