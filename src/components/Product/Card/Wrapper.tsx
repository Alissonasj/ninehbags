interface ProductCardWrapperProps extends React.HTMLAttributes<HTMLDivElement> {}

const ProductCardWrapper = ({
    children,
}: ProductCardWrapperProps) => {
    return <div>{children}</div>;
};

export default ProductCardWrapper;
