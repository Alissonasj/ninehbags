interface ProductInfoNameProps {
    children?: React.ReactNode;
}

const ProductInfoName = ({ children }: ProductInfoNameProps) => {
    return (
        <h3 className='mb-5 text-4xl font-bold text-gray-dark-700'>
            {children}
        </h3>
    );
};

export default ProductInfoName;
