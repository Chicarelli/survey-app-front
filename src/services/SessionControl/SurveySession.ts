import { NextApiRequest } from "next"

export interface User {
    isLoggedIn: boolean,
    email: string,
    token: string
}

interface CreateSessionArgs extends User{
    req: NextApiRequest
}

declare module 'iron-session' {
    interface IronSessionData {
        user?: User
    }
}

export const CreateSession = async ({isLoggedIn, email, token, req}: CreateSessionArgs) => {
    req.session.user = {
        isLoggedIn,
        email,
        token
    }

    await req.session.save();
}

export const DestroySession = (req: NextApiRequest) => {
    req.session.destroy();
}