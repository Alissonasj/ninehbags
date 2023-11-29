interface ProductCardPriceProps {
    children?: React.ReactNode;
}

const ProductCardPrice = ({ children }: ProductCardPriceProps) => {
    return <span>{children}</span>;
};

export default ProductCardPrice;
