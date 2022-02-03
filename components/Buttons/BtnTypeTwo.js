import classes from "./btn.module.css";

export default function BtnTypeTwo({clickAction, ...pageProps}) {
    return (
        <>
            <div className={classes.btnOne}>
                <button onClick={() => clickAction()} className="btn">
                    {pageProps.button.label}
                </button>
            </div>
        </>
    )
}