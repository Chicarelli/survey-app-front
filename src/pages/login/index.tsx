import axios from "axios";
import { FormEvent } from "react";
import { FormFields, UserFormComponent } from "../../components/UserFormComponent";
import useUser from "../../lib/useUser";

export default function Login() {
    const { mutateUser } = useUser({
        redirectTo: '/',
        redirectIfFound: true
    });

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const email = event.target?.email.value
        const password = event.target?.password?.value;

        try {
            mutateUser(
                await axios.post('/api/login', { email, password })
            )
        } catch (error: any) {
            alert(error?.message || 'Não foi possível logar na aplicação');
        }
    }

    const fields: Array<FormFields> = [
        {
            type: 'text',
            name: 'email',
            placeholder: 'Email'
        },
        {
            type: 'password',
            name: 'password',
            placeholder: 'Senha',
        }
    ]

    return (
        <UserFormComponent
            fields={fields}
            onSubmit={handleSubmit}
            titleForm='Entrar'
            pageDescription='Use o app de pesquisas!'
            buttonText="Login"
        />
    )

}