import axios from 'axios';
import { IronSessionOptions } from 'iron-session';
import { withIronSessionApiRoute } from 'iron-session/next';
import { NextApiRequest, NextApiResponse } from 'next';
import { surveyAppRequest } from '../../services/SurveyAppRequest';

declare module 'iron-session' {
    interface IronSessionData {
        user?: {
            isLoggedIn: boolean,
            email: string
        }
    }
}

const sessionOptions: IronSessionOptions = {
    password: 'ASOIJ1O23JOI1J90ASDJ12KLNASLDNON12839GS9BNAKLSDN',
    cookieName: 'iron-session/examples/next.js',
    cookieOptions: {
        secure: false
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

export default withIronSessionApiRoute(loginRoute, sessionOptions);