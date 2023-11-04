import { twMerge } from 'tailwind-merge';

interface TemplateProps {
    children?: React.ReactNode;
    className?: string;
}

const Template = ({ children, className }: TemplateProps) => {
    return (
        <div className={twMerge('mx-20 md:mx-5', className)}>{children}</div>
    );
};

export default Template;
