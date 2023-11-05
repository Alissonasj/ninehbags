import CustomLink from '@components/CustomLink';

interface ProductCardWrapperProps {
    children?: React.ReactNode;
    href?: string;
}

const ProductCardWrapper = ({ children, href }: ProductCardWrapperProps) => {
    return (
        <CustomLink
            href={href}
            className='my-transition rounded-[5px] rounded-tr-[20px] p-3 hover:scale-105 hover:shadow-sm hover:shadow-gray-dark-500'
        >
            {children}
        </CustomLink>
    );
};

export default ProductCardWrapper;
