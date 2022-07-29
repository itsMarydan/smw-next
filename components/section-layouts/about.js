import Image from "next/image";
import classes from "./section-types.module.css";
import {imageLoader} from "../../helpers/NextImage";
import {API_DOMAIN} from "../../helpers/ENUM";

export default function AboutLayout(props) {
    const imageVar = {
        src: props.page.img,
        width: 500,
        height: 600
    }
    const image = imageLoader( imageVar)
    return (
        <>
            <div className="container">
                <div className="pad-y-40">
                    <div className="row overflow-hidden">
                        <div className="col-md-5">
                            <Image loader={imageLoader}  alt="sefie"  src={props.page.img} width={500} height={600}/>
                        </div>
                        <div className="col-md-7">
                            <div className="hold">
                                <div className={classes.sectionHeader}>
                                    <div className="my-2">
                                        {props.page.title}
                                    </div>
                                </div>
                                <div className="content px-2">
                                        <div className={classes.messageContent}>
                                            {props.page.content}
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}