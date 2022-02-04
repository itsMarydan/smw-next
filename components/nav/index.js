import classes from "./nav.module.css";
import Link from "next/link";
import {faFacebookSquare} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {useState} from "react";
import SearchInput from "../searchInput";

export default function Navigation() {
    const navItems = [
        {slug: "prayer-room", label: "Prayer Room"},
        {slug: "about", label: "About"},
        {slug: "healing", label: "Healing"},
        {slug: "events", label: "Events & Activities"},
    ]
    const socialMedia = [
        {url: "/", icon: <FontAwesomeIcon size="2x" icon={faFacebookSquare}/>},
    ]
    const [showSearchBar, setShowSearchBar] = useState(false);
    return (
        <>
            <nav className={classes.nav}>
                <div className="row">
                    <div className="col-2 border-right">
                        <div className={classes.vertical}>
                            <div className="float-end">
                                <div className={classes.logo}><Link href="/">SMW</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="row">
                            {navItems.map((item, key) => (
                                <div className="col text-center dark-bg-hover border-right" key={key}>
                                    <div className={classes.vertical}><Link href={`/${item.slug}`}>{item.label}</Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-2">
                        <div className={classes.vertical}>
                            {socialMedia.map((item, key) => (
                                <button key={key} className="btn">{item.icon}</button>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={showSearchBar ? "d-block" : "d-none"}>
                    <div className="searchBar">
                        <SearchInput/>
                    </div>
                </div>
            </nav>
        </>
    )
}