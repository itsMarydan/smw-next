import classes from "./form.module.css";
import BtnTypeTwo from "../Buttons/BtnTypeTwo";
export default function FormOne(){

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
                            <label htmlFor="message">More about you and your interest in the prayer room</label>
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