import { FormFields, UserFormComponent } from "../../components/UserFormComponent"

export default function NewAccount() {
    const fields: Array<FormFields> = [
        {
            type: 'text',
            name: 'name',
            placeholder: 'Nome',
        },
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
    ];

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        const email = event.target?.email.value
        const password = event.target?.password?.value;
        const name = event.target.name.value;

        console.log({ email, password, name });

    }

    return (
        <UserFormComponent
            fields={fields}
            onSubmit={handleSubmit}
            titleForm={"Create Account"}
            pageDescription={"Crie sua conta e monte suas próprias pesquisas"}
            buttonText={"Criar Conta"}
        />

    )
}