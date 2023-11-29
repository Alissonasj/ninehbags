interface ProductInfoWrapperProps {
    children?: React.ReactNode;
}

const ProductInfoWrapper = ({ children }: ProductInfoWrapperProps) => {
    return <div>{children}</div>;
};

export default ProductInfoWrapper;
