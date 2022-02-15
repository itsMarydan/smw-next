import BtnTypeThree from "../Buttons/BtnTypeThree";
import Link from 'next/link';

export default function Footer(props) {
    function formSubmit() {

    }



    return (
        <>
            <div className="bg-dark-choice text-white py-3">
                <footer className="footer mt-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5">
                                <h5 className="play"><Link href="/">{props.footer.footerTitle}</Link></h5>
                                <div className="row">
                                    <div className="col-6">
                                        <ul className="list-unstyled roboto">
                                            {props.footer.footerItemsGroup1.map((item, key)=> (
                                                <li key={key}><Link href={`/${item.url}`}>{item.label}</Link></li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="col-6">
                                        <ul className="list-unstyled roboto">
                                            {props.footer.footerItemsGroup2.map((item, key) => (
                                                <li key={key}><Link href={`/${item.url}`}>{item.label}</Link></li>
                                                ))}
                                        </ul>
                                    </div>
                                </div>
                                <br/>
                            </div>
                            <div className="col-md-2">
                                <h5 className="text-md-right play">{props.footer.footerTitle2}</h5>
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
                                        <BtnTypeThree clickAction={formSubmit} button={props.footer.button}/>
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