import classes from "./btn.module.css";
import {useRouter} from "next/router";
export default function BtnTypeFour(props){
    const route = useRouter();
    return(
        <>
            <div className={classes.btnFour}>
                <button onClick={() => {
                    route.push(`/${props.button.url}`)
                }} className="btn">
                    {props.button.label}
                </button>
            </div>
        </>
    )
}