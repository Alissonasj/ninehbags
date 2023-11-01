import CustomLink from '@components/CustomLink';

interface ProductCardWrapperProps {
    children?: React.ReactNode;
    href?: string;
}

const ProductCardWrapper = ({ children, href }: ProductCardWrapperProps) => {
    return <CustomLink href={href}>{children}</CustomLink>;
};

export default ProductCardWrapper;
