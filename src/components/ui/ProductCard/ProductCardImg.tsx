interface ProductCardImgProps {
    src?: string;
}

const ProductCardImg = ({ src }: ProductCardImgProps) => {
    return (
        <img
            src={src}
            className='mb-4 rounded-tl-[5px] rounded-tr-[5px] border-b-[1px] pb-3'
        />
    );
};

export default ProductCardImg;
