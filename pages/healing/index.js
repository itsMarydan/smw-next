import Banner from "../../components/banner";
import ReactRotatingText from "react-rotating-text/lib/ReactRotatingText";

export default function Healing() {
    const bannerMessage = "Inner Healing";
    const rotateText = [
        "Just Breathe",
        "Love is never Far",
        "Let go of the past",
        "Experience inner peace"
    ]

    const section = {
        rotate: rotateText
    }
    return (
        <>
            <Banner bannerMessage={bannerMessage}/>
            <Healing section={section} />
        </>
    )
}

