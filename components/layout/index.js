import Navigation from "../nav";
import classes from './layout.module.css';
import Footer from "../footer";
import MobIle from "../nav/mobIle";
import {footerItemsGroup1, footerItemsGroup2, footerTitle, footerTitle2} from "../data/footerDb";

export default function Layout({children}) {
    const button = {
        label: "Send"
    }

    const footer = {
        footerTitle: footerTitle,
        footerItemsGroup1: footerItemsGroup1,
        footerItemsGroup2: footerItemsGroup2,
        footerTitle2: footerTitle2,
        button: button
    }

    return (
        <>
            <div className="website">
                <div className="nav-large">
                    <Navigation/>
                </div>
                <div className="nav-small">
                    <MobIle/>
                </div>
                <div className={classes.page}>
                    {children}
                </div>
                <div className="mt-5">
                    <Footer footer={footer}/>
                </div>
            </div>
        </>
    )
}