import Image from "next/image";
import classes from "./section-types.module.css";
import BtnTypeFour from "../Buttons/BtnTypeFour";
import {imageLoader} from "../../helpers/NextImage";

export default function TypeFour(props) {

    return (
        <>
            <div className={classes.section}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <Image loader={imageLoader} alt="display" width={500} height={350} src={props.section.image}/>
                        </div>
                        <div className="col">
                            <div className={classes.message}>
                                <div className={classes.messageHeader}>
                                    {props.section.header}
                                </div>
                                <div className={classes.messageContent}>
                                    {props.section.content}
                                    <BtnTypeFour button={props.section.button}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}