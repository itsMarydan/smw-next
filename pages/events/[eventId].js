import {useRouter} from "next/router";
import CenteredCardWithBackground from "../../components/cards/centered-card-with-background";
import classes from "./event.module.css";
import BtnTypeTwo from "../../components/Buttons/BtnTypeTwo";

export default function EventPage(){
   const router = useRouter();
   const eventId = router.query.eventId;
   const button = {
       label: "Add to Calender"
   }

   function onClick(){

   }
    return(
        <>
            <div className="mt-4">
                <CenteredCardWithBackground>
                    <div className="content">
                        <div className="text-center text-decoration-underline">
                            <div className={classes.categoryHeader}>
                                New Event Title
                            </div>
                        </div>
                        <div className={classes.sectionHeaderContent}>
                            It is a long established fact that a reader will be distracted by the readable content of a
                            page when looking at its layout.
                            It is a long established fact that a reader will be distracted by the readable content of a
                            page when looking at its layout.
                        </div>
                        <div className="text-center">
                            <BtnTypeTwo clickAction={onClick} button={button}/>
                        </div>
                    </div>
                </CenteredCardWithBackground>
            </div>

        </>
    )
}