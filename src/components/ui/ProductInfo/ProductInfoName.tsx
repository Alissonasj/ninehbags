interface ProductInfoNameProps {
    children?: React.ReactNode;
}

const ProductInfoName = ({ children }: ProductInfoNameProps) => {
    return <h3>{children}</h3>;
};

export default ProductInfoName;
