import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { surveyAppRequest } from "../../services/SurveyAppRequest";

async function createAccountRoute(req: NextApiRequest, res: NextApiResponse) {
    const {email, name, password} = req.body;

    try {
        await surveyAppRequest.createUser({
            email, password, name
        });

        setTimeout(async () => {
            const user = await axios.post('http://localhost:3000/api/login', {email, password});
            console.log({user});
    
            res.json(user.data);
        }, 1000)

    }
    catch (error) {
        res.status(400).json(error);
    }
}

export default createAccountRoute;