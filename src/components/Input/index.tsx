interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = ({}: InputProps) => {
    return (
        <>
            <input type='text' />
        </>
    );
};

export default Input;
