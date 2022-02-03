import Navigation from "../nav";
import classes from './layout.module.css';
import Banner from "../banner";

export default function Layout({children}) {

    return (
        <>
            <div className="website">
                <Navigation/>
                <div className={classes.page}>
                    {children}
                </div>
            </div>
        </>
    )
}