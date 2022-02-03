import classes from './banner.module.css';
export default function Banner({bannerMessage}){
    return(
        <>
            <div className={classes.borderDarkTopBottom}>
                    <div className={classes.bannerText}>{bannerMessage}</div>
            </div>
        </>
    )
}