import axios from "axios";
import { useState } from "react";
import useUser from "../../lib/useUser";

export default function Login() {
    const { mutateUser } = useUser({
        redirectTo: '/',
        redirectIfFound: true
    });

    const [errorMsg, setErrorMsg] = useState('');

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        const body = {
            email: 'rafael@email.com',
            password: '123'
        };

        try {
            mutateUser(
                await axios.post('/api/login', body)
            )

        } catch (error: any) {

            setErrorMsg(error?.data?.message || 'Ih, deu ruim');
        }
    };

    return (
        <form onSubmit={handleSubmit}>

            <input type="email" name="email" />

            <input type="password" />

            <button type="submit">Submit</button>
        </form>
    )

}