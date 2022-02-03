import classes from "./btn.module.css";
import {useRouter} from "next/router";

export default function BtnTypeThree(props) {
    const route = useRouter();

    return (
        <>
            <div className={classes.btnThree}>
                <button onClick={() => {
                    route.push(`/${props.button.url}`).then();
                }} className="btn">
                    {props.button.label}
                </button>
            </div>
        </>
    )
}