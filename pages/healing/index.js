import Banner from "../../components/banner";

export default function Healing(){
    const bannerMessage ="Inner Healing";
    return(
        <>
            <Banner bannerMessage={bannerMessage} />
            <div className="container">
                <h1>Inner Healing </h1>
            </div>
        </>
    )
}

