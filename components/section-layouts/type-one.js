import Image from "next/image";
import classes from "./section-types.module.css";
import BtnTypeOne from "../Buttons/BtnTypeOne";
export default function TypeOne(props){

    return(
        <>
            <div className={classes.section}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <Image width={500} height={350} src={props.section.image} />
                        </div>
                        <div className="col">
                            <div className={classes.message}>
                                <div className={classes.messageHeader}>
                                    {props.section.header}
                                </div>
                                <div className={classes.messageContent}>
                                    {props.section.content}
                                    <BtnTypeOne button={props.section.button} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}