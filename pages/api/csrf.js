import {API_DOMAIN} from "../../helpers/ENUM";

async function getCsrfToken() {
    let url = `${API_DOMAIN}/api/auth/csrf-token`;
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
export default async function handler(req, res) {
    if (req.method === "GET" || "get") {
       const data = await getCsrfToken();
        res.status(200).json({name: 'John Doe', csrfToken: data.csrfToken});
    }

}

