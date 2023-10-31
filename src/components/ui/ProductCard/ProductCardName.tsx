interface ProductCardNameProps {
    children?: React.ReactNode;
}

const ProductCardName = ({ children }: ProductCardNameProps) => {
    return (
        <h3 className='mb-6 text-xl font-bold text-gray-dark-800'>
            {children}
        </h3>
    );
};

export default ProductCardName;
