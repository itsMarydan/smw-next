import {API_DOMAIN} from "../../helpers/ENUM";
import axios from "axios";


export default async function handler(req, res) {
    if (req.method === "post" || "POST") {

        const formSubmitUrl = `${API_DOMAIN}/api/form/create-interestform`
        try {
            await axios.post(formSubmitUrl, {
                name:req.body.name,
                email:req.body.email,
                message:req.body.message,
                interestType:req.body.interestType,
                phone: req.body.phone,
                submittedOn: req.body.submittedOn

            })

        } catch (error) {
            console.log(error);
            res.status(400).json({message: 'Error'});
            return
        }
        res.status(200).json({message: 'Success'});
    }

}

