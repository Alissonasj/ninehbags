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
        nav: 'link-nav',
        button: 'link-button',
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
