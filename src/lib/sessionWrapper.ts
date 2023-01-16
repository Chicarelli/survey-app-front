import { IronSessionOptions } from "iron-session";
import { withIronSessionApiRoute, withIronSessionSsr } from "iron-session/next";

import {
    GetServerSidePropsContext,
    GetServerSidePropsResult,
    NextApiHandler
} from "next";

const sessionOptions = {
    password: process.env.SESSION_PASSWORD,
    cookieName: "surveyApp",
    cookieOptions: {
        secure: process.env.node_ENV === "production"
    }
};

export function withSessionRoute(handler: NextApiHandler) {
    return withIronSessionApiRoute(handler, sessionOptions as IronSessionOptions);
}

export function withSessionSsr<
  P extends { [key: string]: unknown } = { [key: string]: unknown },
>(
  handler: (
    context: GetServerSidePropsContext,
  ) => GetServerSidePropsResult<P> | Promise<GetServerSidePropsResult<P>>,
) {
  return withIronSessionSsr(handler, sessionOptions as IronSessionOptions);
}