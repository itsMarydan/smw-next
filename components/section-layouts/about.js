import Image from "next/image";
import classes from "./section-types.module.css";

export default function AboutLayout(props) {

    return (
        <>
            <div className="container">
                <div className="pad-y-40">
                    <div className="row overflow-hidden">
                        <div className="col-md-5">
                            <Image  src={props.page.img} width={500} height={600}/>
                        </div>
                        <div className="col-md-7">
                            <div className="hold">
                                <div className={classes.sectionHeader}>
                                    <div className="my-2">
                                        The Story Behind Star Mission World
                                    </div>
                                </div>
                                <div className="content px-2">
                                        <div className={classes.messageContent}>
                                            It is a long established fact that a reader will be distracted by the readable content of a
                                            page when looking at its layout.
                                            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                                            as opposed to using 'Content here, content here', making it look like readable English.
                                            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default
                                            model text,
                                            and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                                            Various versions have evolved over the years, sometimes by accident, sometimes on purpose
                                            (injected humour and the like).
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