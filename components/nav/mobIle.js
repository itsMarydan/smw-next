import classes from "./nav.module.css";
import Link from "next/link";
export default function MobIle() {

    const navItems = [
        {slug: "prayer-room", label: "Prayer Room"},
        {slug: "about", label: "About"},
        {slug: "healing", label: "Healing"},
        {slug: "events", label: "Events & Activities"},
    ]
    return (
        <>
            <nav className={classes.navMobile}>
                <div className="div">
                    <div className="text-center font-30 play">
                        <Link href="/"> Star Mission World</Link>
                    </div>
                    <div className={classes.navMobileBottom}>
                        <div className="nav-scroller mb-2">
                            <nav className="nav d-flex justify-content-between">
                                {navItems.map((item, key) => (
                                  <Link className="p-2 link-secondary" href={`/${item.slug}`}>{item.label}</Link>
                                ))}
                            </nav>
                        </div>
                    </div>

                </div>
            </nav>
        </>
    )
}