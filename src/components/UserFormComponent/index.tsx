
interface UserFormComponentProps {
    fields: Array<FormFields>;
    titleForm: string;
    pageDescription: string;
    buttonText: string;
    onSubmit: (arg: any) => any | Promise<any>;
}

export interface FormFields {
    type: string;
    name: string;
    placeholder: string;
    validate?: (value: any) => boolean;
}

export function UserFormComponent({
    fields,
    titleForm,
    pageDescription = '',
    buttonText,
    onSubmit
}: UserFormComponentProps) {

    return (
        <div className="bg-slate-500 max-w-full mx-auto shadow-lg flex h-screen">

            <div className="w-0 md:w-1/2 h-full flex justify-center pt-14">
                <h1 className="text-white font-bold font-serif text-2xl">{pageDescription}</h1>
            </div>

            <div className="max-h-full bg-white w-full rounded-l-3xl min-w-96 md:w-1/2 flex flex-col items-center justify-center">
                <form onSubmit={onSubmit} className="flex flex-col space-y-10 w-11/12 md:w-8/12">

                    <h2 className="text-2xl font-serif font-bold mb-5">
                        {titleForm}
                    </h2>

                    {
                        fields.map(field => (
                            <input
                                type={field.type}
                                name={field.name}
                                placeholder={field.placeholder}
                                key={field.name}
                                className="border-gray-100 border-solid border-b-2 outline-none focus:border-gray-300 duration-100"
                            />
                        ))
                    }

                    <button type="submit" className="bg-slate-400 py-2 px-2 rounded-3xl text-white font-bold font-serif w-9/12 mx-auto hover:bg-slate-500 active:bg-slate-600 duration-100">
                        {buttonText}
                    </button>
                </form>
            </div>
        </div>
    )
}