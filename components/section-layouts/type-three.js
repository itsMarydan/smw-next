import Image from "next/image";
import HealingSection from "./healing";
import classes from "./section-types.module.css";

export  default function TypeThree(){

    return(
        <>
            <div className={classes.section}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className={classes.sectionHeader}>
                                <div className="my-2">
                                    Healing that starts from the inside out
                                </div>
                            </div>
                            <div className="content px-2">
                                <div className={classes.messageContent}>
                                    It is a long established fact that a reader will be distracted by the readable content of a
                                    page when looking at its layout.
                                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                                    as opposed to using Content here, content here, making it look like readable English.
                                    Many desktop publishing packages and web page editors now use Lorem Ipsum as their default
                                    model text,
                                    and a search for lorem ipsum will uncover many web sites still in their infancy.
                                    Various versions have evolved over the years, sometimes by accident, sometimes on purpose
                                    (injected humour and the like).
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mt-3">
                                <Image src="/images/inner.jpg" width={500} height={400} />
                                <HealingSection />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}