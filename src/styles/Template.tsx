import { twMerge } from 'tailwind-merge';

interface TemplateProps extends React.HTMLAttributes<HTMLDivElement> {}

const Template = ({ children, className }: TemplateProps) => {
    return (
        <div className={twMerge('mx-20 my-[3.125rem] md:mx-5', className)}>
            {children}
        </div>
    );
};

export default Template;
