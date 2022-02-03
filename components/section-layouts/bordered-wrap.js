import classes from "./bordered.module.css";
export default function BorderedWrap({children}){

    return(
        <>
            <div className={classes.borderTopBottom}>
                {children}
            </div>
        </>
    )
}