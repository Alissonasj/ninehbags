import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

interface CustomLinkProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

const CustomLink = ({
    className,
    href = '#',
    children,
}: CustomLinkProps) => {
    return (
        <Link
            to={href}
            className={twMerge('', className)}
        >
            {children}
        </Link>
    );
};

export default CustomLink;
