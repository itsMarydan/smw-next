import classes from "./cards.module.css";
export default function CenteredCardWithBackground({children}){
    return(
        <>
            <div className={classes.cardWithBG}>
                <div className="container">
                    <div className={classes.cwbWidth}>
                        <div className="card card-center">
                            <div className="card-body">
                                <div className={classes.cwbBody}>
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}