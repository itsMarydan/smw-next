import Navigation from "../nav";
import classes from './layout.module.css';
import Banner from "../banner";
import Footer from "../footer";
import MobIle from "../nav/mobIle";

export default function Layout({children}) {

    return (
        <>
            <div className="website">
                <div className="nav-large">
                    <Navigation/>
                </div>
                <div className="nav-small">
                    <MobIle />
                </div>
                <div className={classes.page}>
                    {children}
                </div>
                <div className="mt-5">
                    <Footer />
                </div>
            </div>
        </>
    )
}