import { withSessionSsr } from "../lib/sessionWrapper";

export default function AcessingUser({ user }: any) {

    return (
        <div>
            email: {user?.email ? user.email : 'Não tem email'}
            isLoggedIn: {user.isLoggedIn ? user.isLoggedIn + '' : 'Not logged in'}
        </div>
    )
}

export const getServerSideProps = withSessionSsr(
    async function getServerSideProps({ req, res }) {
        console.log(req.session);
        const user = req.session.user;

        if (!user) {
            res.setHeader('location', '/login');
            res.statusCode = 302;
            res.end();

            return {
                props: {
                    user: { isLoggedIn: false, email: '' }
                }
            }
        }

        return {
            props: { user: req.session.user }
        }
    }
)