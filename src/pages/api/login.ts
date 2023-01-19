import { NextApiRequest, NextApiResponse } from 'next';
import { withSessionRoute } from '../../lib/sessionWrapper';
import { CreateSession } from '../../services/SessionControl/SurveySession';
import { surveyAppRequest } from '../../services/SurveyAppRequest';

async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
    const { email, password } = req.body;

    try {
        const token = await surveyAppRequest.login({
            email, password
        });

        const user = { isLoggedIn: true, email, token } ;

        await CreateSession({isLoggedIn: true, email, token, req})

        res.json(user);
    }
    catch (error) {
        res.status(500).json({message: (error as Error).message});
    }
}

export default withSessionRoute(loginRoute);