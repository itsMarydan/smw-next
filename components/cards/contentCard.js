import {faTag} from "@fortawesome/free-solid-svg-icons/faTag";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export default function ContentCard() {

    return (
        <>
            <div className="container">
                <div className="container mx-auto mt-4">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card border-dark-choice">
                                <img src="/images/mission.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                    <div className="card-text mb-2">Some quick example text to build on the card title
                                        and
                                        make up the bulk of the card's content.Some quick example text to build on the
                                        card title and make up the bulk of the card's content.
                                    </div>
                                    <div className="badge bg-dark">
                                        <div className="text-white p-1 font-16">
                                            <FontAwesomeIcon icon={faTag}/> Pray
                                        </div>
                                    </div>
                                    <a href="/highlights"
                                       className="badge bg-dark mx-1 text-white p-2 font-16 stretched-link">See More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}