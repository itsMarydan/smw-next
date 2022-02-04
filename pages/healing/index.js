import Banner from "../../components/banner";
import TypeThree from "../../components/section-layouts/type-three";
import BorderedWrap from "../../components/section-layouts/bordered-wrap";
import SearchInput from "../../components/searchInput";

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
            <TypeThree/>
            <BorderedWrap>
                <div className="text-center">
                    <div className="highlightTitle">Resources Related to Healing</div>
                </div>
            </BorderedWrap>
            <div className="container">
                <div className="pt-4">
                    Search Resources by # Tags: <SearchInput/>
                    <div className="hold mt-4 border-bottom font-20">
                        <div className="container">
                            <h6 className="g">A hope for The future by Jame Author</h6>
                            <div className="content py-3 my-2">
                                Various versions have evolved over the years, sometimes by accident, sometimes on
                                purpose
                                (injected humour and the like). Various versions have evolved over the years, sometimes
                                by accident, sometimes on purpose
                                (injected humour and the like).
                            </div>
                            <h6 className="dib">#Faithfulness #Broken #Lostlove</h6>
                        </div>
                        <div className="float-end">- Mary Olowu</div>
                    </div>
                    <div className="hold mt-4 border-bottom font-20">
                        <div className="container">
                            <h6 className="g">A hope for The future by Jame Author</h6>
                            <div className="content py-3 my-2">
                                Various versions have evolved over the years, sometimes by accident, sometimes on
                                purpose
                                (injected humour and the like). Various versions have evolved over the years, sometimes
                                by accident, sometimes on purpose
                                (injected humour and the like).
                            </div>
                            <h6 className="dib">#Faithfulness #Broken #Lostlove</h6>
                        </div>
                        <div className="float-end">- Mary Olowu</div>
                    </div>
                    <div className="hold mt-4 border-bottom font-20">
                        <div className="container">
                            <h6 className="g">A hope for The future by Jame Author</h6>
                            <div className="content py-3 my-2">
                                Various versions have evolved over the years, sometimes by accident, sometimes on
                                purpose
                                (injected humour and the like). Various versions have evolved over the years, sometimes
                                by accident, sometimes on purpose
                                (injected humour and the like).
                            </div>
                            <h6 className="dib">#Faithfulness #Broken #Lostlove</h6>
                        </div>
                        <div className="float-end">- Mary Olowu</div>
                    </div>
                    <div className="hold mt-4 border-bottom font-20">
                        <div className="container">
                            <h6 className="g">A hope for The future by Jame Author</h6>
                            <div className="content py-3 my-2">
                                Various versions have evolved over the years, sometimes by accident, sometimes on
                                purpose
                                (injected humour and the like). Various versions have evolved over the years, sometimes
                                by accident, sometimes on purpose
                                (injected humour and the like).
                            </div>
                            <h6 className="dib">#Faithfulness #Broken #Lostlove</h6>
                        </div>
                        <div className="float-end">- Mary Olowu</div>
                    </div>
                </div>

            </div>
        </>
    )
}

