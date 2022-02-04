import {faTag} from "@fortawesome/free-solid-svg-icons/faTag";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Image from "next/image";
import Link from "next/link";

export default function ContentCard(props) {

    return (
        <>
            <div className="card border-dark-choice">
                <Image src={props.card.img} width={500} height={400} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.card.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{props.card.subtitle}</h6>
                    <div className="card-text mb-2">{props.card.content}</div>
                    <div className="badge bg-dark">
                        <div className="text-white p-1 font-16">
                            <FontAwesomeIcon icon={faTag}/> {props.card.tag}
                        </div>
                    </div>
                    <span className="badge bg-dark mx-1 text-white p-2 font-16 ">
                        <Link href={props.card.linkUrl} className="stretched-link">{props.card.linkLabel}</Link>
                    </span>
                </div>
            </div>
        </>
    )
}