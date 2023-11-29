interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ children, id, placeholder }: InputProps) => {
    return (
        <div className='mb-5 flex flex-col gap-2'>
            <label htmlFor={id}>{children}</label>
            <input
                type='text'
                id={id}
                placeholder={placeholder}
                className='rounded-[5px]'
            />
        </div>
    );
};

export default Input;
