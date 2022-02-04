import Banner from "../../components/banner";
import SearchInput from "../../components/searchInput";

export default function Resources(){

    const bannerMessage ="Recommended Resources";
    return(
        <>
            <Banner bannerMessage={bannerMessage} />
            <div className="container">
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
            </div>
        </>
    )
}