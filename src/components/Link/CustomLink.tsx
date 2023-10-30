import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

interface CustomLinkProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    variant?: 'default' | 'nav' | 'button';
}

const CustomLink = ({
    className,
    href = '#',
    children,
    variant = 'default',
    ...props
}: CustomLinkProps) => {
    const variantion = {
        default: '',
        nav: 'font-[400] text-[1.125rem] text-gray-dark-800',
        button: 'font-[600] text-[1.125rem] uppercase text-gray-dark-75 px-10 py-5 bg-gray-dark-900 rounded',
    };

    return (
        <Link
            to={href}
            className={twMerge('', variantion[variant], className)}
            {...props}
        >
            {children}
        </Link>
    );
};

export default CustomLink;
