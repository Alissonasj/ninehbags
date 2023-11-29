import Input from '@ui/Input/Input';

const Contact = () => {
    return (
        <div className=' m-auto my-52 max-w-lg'>
            <div className='mx-5'>
                <h1 className='mb-10 text-center text-5xl font-bold text-gray-dark-800'>
                    Contato
                </h1>
                <form action=''>
                    <Input
                        name='inputName'
                        placeholder='Nome Completo'
                    />
                    <Input
                        name='inputEmail'
                        type='email'
                        placeholder='Email'
                    />
                    <Input
                        name='inputPhone'
                        type='tel'
                        placeholder='Telefone'
                    />
                    <textarea
                        name='inputMensage'
                        placeholder='Menssagem'
                        rows={8}
                        className='block w-full rounded-[5px]'
                    />
                    <button className='my-5 w-full rounded-[5px] bg-gray-dark-900 py-2 font-bold text-gray-dark-75'>
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
