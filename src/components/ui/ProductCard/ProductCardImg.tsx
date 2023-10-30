interface ProductCardImgProps {
    src?: string;
}

const ProductCardImg = ({ src }: ProductCardImgProps) => {
    return (
        <img
            src={src}
            className="mb-4 rounded-tr-[1.25rem] rounded-bl-[1.25rem]"
        />
    );
};

export default ProductCardImg;
