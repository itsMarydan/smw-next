export default function ResourceList(props){

    return(
        <>

            <div className="hold mt-4 border-bottom font-20">
                <div className="container">
                    <h6 className="g">{props.resource.title}</h6>
                    <div className="content py-3 my-2">
                        {props.resource.content}
                    </div>
                    <h6 className="dib">{props.resource.tags.map((item, key)=>(
                        <button key={key} className="btn"># {item}</button>
                    ))}</h6>
                </div>
                <h6 className="float-end">- {props.resource.by}</h6>
            </div>
        </>
    )
}