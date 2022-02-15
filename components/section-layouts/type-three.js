import Image from "next/image";
import RotateText from "./rotate-text";
import classes from "./section-types.module.css";

export  default function TypeThree(props){

    return(
        <>
            <div className={classes.section}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className={classes.sectionHeader}>
                                <div className="my-2">
                                    {props.section.title}
                                </div>
                            </div>
                            <div className="content px-2">
                                <div className={classes.messageContent}>
                                    {props.section.content}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mt-3">
                                <Image alt="section display" src={props.section.img} width={500} height={400} />
                                <RotateText rotate={props.section.rotate} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}