import {useRouter} from "next/router";

export default function EventPage(){
   const router = useRouter();
   const eventId = router.query.eventId;
    return(
        <>
            <h1>Event Details</h1>
            <h4>{eventId}</h4>
        </>
    )
}