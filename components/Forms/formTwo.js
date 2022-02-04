import classes from "./form.module.css";
import BtnTypeTwo from "../Buttons/BtnTypeTwo";
export default function FormTwo(){

    const button ={
        label: "Send Request"
    }
    function processForm(){
        alert("Submit Your Form here!")
    }
    return(
        <>
            <div className={classes.form}>
                <div className={classes.card}>
                    <form>
                        <div className="form-group mt-1">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" id="name"
                                   placeholder="First Last" />
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email"
                                   placeholder="name@email.com" />
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="phone">Phone</label>
                            <input type="tel" className="form-control" id="phone"
                                   placeholder="+1 234 567 8910" />
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="message">Give a personal introduction and talk about how you or your group would like to contribute to SMW</label>
                            <textarea className="form-control" id="message" rows="4" />
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