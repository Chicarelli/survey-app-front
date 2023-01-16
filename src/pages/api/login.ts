import axios from 'axios';
import { IronSessionOptions } from 'iron-session';
import { withIronSessionApiRoute } from 'iron-session/next';
import { NextApiRequest, NextApiResponse } from 'next';
import { withSessionRoute } from '../../lib/sessionWrapper';
import { surveyAppRequest } from '../../services/SurveyAppRequest';

declare module 'iron-session' {
    interface IronSessionData {
        user?: {
            isLoggedIn: boolean,
            email: string
        }
    }
}

async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
    const { email, password } = req.body;

    try {
        const token = await surveyAppRequest.login({
            email, password
        });

        const user = { isLoggedIn: true, email, token } ;
        req.session.user = user;
        await req.session.save()

        res.json(user);
    }
    catch (error) {
        res.status(500).json({message: (error as Error).message});
    }
}

export default withSessionRoute(loginRoute);