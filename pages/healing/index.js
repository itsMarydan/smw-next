import Banner from "../../components/banner";

export default function Healing(){
    const bannerMessage ="Inner Healing";
    const rotateText = [
        "Just Breathe",
        "Love is never Far",
        "Let go of the past",
        "Experience inner peace"
    ]
    return(
        <>
            <Banner bannerMessage={bannerMessage} />
            <div className="container">
                <h1>Inner Healing </h1>
            </div>
        </>
    )
}

