import BtnTypeTwo from "../Buttons/BtnTypeTwo";
import BtnTypeThree from "../Buttons/BtnTypeThree";

export default function Footer(){
function  formSubmit(){

}

const button = {
    label: "Send"
}
    return(
        <>
            <div className="bg-dark-choice text-white py-3">
                <footer className="footer mt-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5">
                                <h5 className="play">Star Mission World</h5>
                                <div className="row">
                                    <div className="col-6">
                                        <ul className="list-unstyled roboto">
                                            <li><a href="">Prayer Room</a></li>
                                            <li><a href="">Resources</a></li>
                                            <li><a href="">Highlights</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-6">
                                        <ul className="list-unstyled roboto">
                                            <li><a href="">About</a></li>
                                            <li><a href="">Legal Terms</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <br />
                            </div>
                            <div className="col-md-2">
                                <h5 className="text-md-right play">Contact Us</h5>
                                <hr />
                            </div>
                            <div className="col-md-5">
                                <form>
                                    <fieldset className="form-group">
                                        <input type="email" className="form-control" id="exampleInputEmail1"
                                               placeholder="Enter email" />
                                    </fieldset>
                                    <fieldset className="form-group mt-2">
                                        <textarea className="form-control" id="exampleMessage"
                                                 rows={3} placeholder="Message"></textarea>
                                    </fieldset>
                                    <fieldset className="form-group text-xs-right">
                                       <BtnTypeThree clickAction={formSubmit} button={button} />
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}