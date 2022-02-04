import BtnTypeThree from "../Buttons/BtnTypeThree";
import Link from 'next/link';

export default function Footer() {
    function formSubmit() {

    }

    const button = {
        label: "Send"
    }
    return (
        <>
            <div className="bg-dark-choice text-white py-3">
                <footer className="footer mt-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5">
                                <h5 className="play"><Link href="/">Star Mission World</Link></h5>
                                <div className="row">
                                    <div className="col-6">
                                        <ul className="list-unstyled roboto">
                                            <li><Link href="/prayer-room">Prayer Room</Link></li>
                                            <li><Link href="/resources">Resources</Link></li>
                                            <li><Link href="/highlights">Highlights</Link></li>
                                        </ul>
                                    </div>
                                    <div className="col-6">
                                        <ul className="list-unstyled roboto">
                                            <li><Link href="/about">About</Link></li>
                                            <li><Link href="/legal">Legal Terms</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <br/>
                            </div>
                            <div className="col-md-2">
                                <h5 className="text-md-right play">Contact Us</h5>
                                <hr/>
                            </div>
                            <div className="col-md-5">
                                <form>
                                    <fieldset className="form-group">
                                        <input type="email" className="form-control" id="exampleInputEmail1"
                                               placeholder="Enter email"/>
                                    </fieldset>
                                    <fieldset className="form-group mt-2">
                                        <textarea className="form-control" id="exampleMessage"
                                                  rows={3} placeholder="Message"></textarea>
                                    </fieldset>
                                    <fieldset className="form-group text-xs-right">
                                        <BtnTypeThree clickAction={formSubmit} button={button}/>
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