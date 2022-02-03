//our-domain.com/events
import Link from "next/link";

export default function EventsPage() {
    return (
        <>
            <h1>Events and Activities</h1>
            <ul>
                <li>
                    <Link href='/events/new-event'>New Event</Link>
                </li>
                <li>
                    <Link href='/events/another-event'>Another Event</Link>
                </li>
                <li>
                    <Link href='/events/old-event'>Old Event</Link>
                </li>
            </ul>
        </>
    )
}

