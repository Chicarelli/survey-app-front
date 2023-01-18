import axios from "axios";
import { FormEvent, useState } from "react";
import useUser from "../../lib/useUser";

export default function Login() {
    const { mutateUser } = useUser({
        redirectTo: '/',
        redirectIfFound: true
    });

    const [errorMsg, setErrorMsg] = useState('');

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const email = event.target?.email.value
        const password = event.target?.password?.value;

        try {
            mutateUser(
                await axios.post('/api/login', { email, password })
            )
        } catch (error: any) {
            setErrorMsg(error?.message || '')
        }

    }

    return (
        <div className="bg-slate-500 max-w-full mx-auto shadow-lg flex h-screen">

            <div className="w-0 md:w-1/2 h-full flex justify-center pt-14">
                <h1 className="text-white font-bold font-serif text-2xl">Use o app de pesquisas!</h1>
            </div>

            <div className="max-h-full bg-white w-full rounded-l-3xl min-w-96 md:w-1/2 flex flex-col items-center justify-center">
                <form onSubmit={handleSubmit} className="flex flex-col space-y-10 w-11/12 md:w-8/12">

                    <h2 className="text-2xl font-serif font-bold mb-5">
                        Create Account
                    </h2>

                    <input name="email" type="email" placeholder="Email" className="border-gray-100 border-solid border-b-2 outline-none focus:border-gray-300 duration-100" />

                    <input name="password" type="password" placeholder="Senha" className="border-gray-100 border-solid border-b-2 outline-none focus:border-gray-300 duration-100" />

                    <button type="submit" className="bg-slate-400 py-2 px-2 rounded-3xl text-white font-bold font-serif w-9/12 mx-auto hover:bg-slate-500 active:bg-slate-600 duration-100">
                        Login
                    </button>
                </form>
            </div>
        </div>
    )

}