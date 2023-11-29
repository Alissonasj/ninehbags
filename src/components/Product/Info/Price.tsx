interface ProductInfoPriceProps {
    children?: React.ReactNode;
}

const ProductInfoPrice = ({ children }: ProductInfoPriceProps) => {
    return <span className='text-3xl text-gray-dark-800'>{children}</span>;
};

export default ProductInfoPrice;
