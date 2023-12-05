import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

interface CustomLinkProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

const CustomLink = ({
    className,
    href = '#',
    children,
    ...props
}: CustomLinkProps) => {
    return (
        <Link
            to={href}
            className={twMerge('', className)}
            {...props}
        >
            {children}
        </Link>
    );
};

export default CustomLink;
