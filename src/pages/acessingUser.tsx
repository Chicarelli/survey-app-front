import { withIronSessionSsr } from "iron-session/next";

export default function AcessingUser({ user }: any) {

    console.log(user);
    return (
        <div>
            email: {user?.email ? user.email : 'Não tem email'}
            isLoggedIn: {user.isLoggedIn ? user.isLoggedIn + '' : 'Not logged in'}
        </div>
    )
}

export const getServerSideProps = withIronSessionSsr(async function ({ req, res }: any) {
    const user = req.session.user

    if (user === undefined) {
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
},
    {
        password: 'ASOIJ1O23JOI1J90ASDJ12KLNASLDNON12839GS9BNAKLSDN',
        cookieName: 'iron-session/examples/next.js',
        cookieOptions: {
            secure: false
        }
    })