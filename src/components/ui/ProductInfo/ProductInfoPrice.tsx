interface ProductInfoPriceProps {
    children?: React.ReactNode;
}

const ProductInfoPrice = ({ children }: ProductInfoPriceProps) => {
    return <span>{children}</span>;
};

export default ProductInfoPrice;
