import {useRouter} from "next/router";
import CenteredCardWithBackground from "../../components/cards/centered-card-with-background";
import classes from "./event.module.css";
import BtnTypeTwo from "../../components/Buttons/BtnTypeTwo";
import {API_DOMAIN} from "../../helpers/ENUM";
import axios from "axios";

export async function getServerSideProps(context) {

    const {eventId} = context.query;
    const urlPage = `${API_DOMAIN}/api/event/${eventId}`;
    const resPage = await axios.get(urlPage);
    const page = await resPage.data;
    return {
        props: {
            page: page,
        }
    }

}
export default function EventPage(props){
   const router = useRouter();
   const eventId = router.query.eventId;

   const eventDetails = {
       title: props.page.title,
       content: props.page.content,
       button: props.page.button

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
                                {eventDetails.title}
                            </div>
                        </div>
                        <div className={classes.sectionHeaderContent}>
                            {eventDetails.content}
                        </div>
                        <div className="text-center">
                            <BtnTypeTwo clickAction={onClick} button={eventDetails.button}/>
                        </div>
                    </div>
                </CenteredCardWithBackground>
            </div>

        </>
    )
}