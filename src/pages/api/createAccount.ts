import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { withSessionRoute } from "../../lib/sessionWrapper";
import { CreateSession } from "../../services/SessionControl/SurveySession";
import { surveyAppRequest } from "../../services/SurveyAppRequest";

async function createAccountRoute(req: NextApiRequest, res: NextApiResponse) {
    const {email, name, password} = req.body;

    try {
        await surveyAppRequest.createUser({
            email, password, name
        });

        const token = await surveyAppRequest.login({
            email, password
        });

        await CreateSession({isLoggedIn: true, email, token, req});

        res.json({
            isLoggedIn: true,
            email,
            token
        })
    }
    catch (error) {
        res.status(400).json(error);
    }
}

export default withSessionRoute(createAccountRoute);