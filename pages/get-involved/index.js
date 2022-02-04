import Banner from "../../components/banner";
import FormTwo from "../../components/Forms/formTwo";

export default function GetInvolved() {

    const bannerMessage = "Get Involved";

    return (
        <>
            <Banner bannerMessage={bannerMessage}/>
            <div className="container">
                <FormTwo/>
            </div>
        </>
    )
}