interface ProductInfoCharacteristicsListProps {
    children?: React.ReactNode;
}

const ProductInfoCharacteristicsList = ({
    children,
}: ProductInfoCharacteristicsListProps) => {
    return <ul className='flex flex-col gap-2 text-sm'>{children}</ul>;
};

export default ProductInfoCharacteristicsList;
