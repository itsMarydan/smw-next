import classes from "./section-types.module.css";

export default function TypeTwo({children, ...pageProps}) {

    return (
        <>
            <div className={classes.section}>
                <div className={classes.sectionHeader}>
                    <div className="text-center mb-3">
                        {pageProps.section.header}
                    </div>
                </div>
                <div className="container">
                    <div className={classes.sectionHeaderContent}>
                        {pageProps.section.content}
                    </div>
                    {children}
                </div>
            </div>
        </>
    )
}