import classes from "./btn.module.css";
import {useRouter} from "next/router";
export default function BtnTypeOne(props){
    const route = useRouter();
    return(
        <>
            <div className={classes.btnOne}>
                <button onClick={() => {
                    route.push(`/${props.button.url}`)
                }} className="btn">
                    {props.button.label}
                </button>
            </div>
        </>
    )
}