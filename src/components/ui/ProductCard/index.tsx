import Product from "@myTypes/product";
import * as S from "./styles";

interface ProductCardProps {
    pathLink?: string;
    srcImg?: string;
    product?: Product;
}

const ProductCard = ({ pathLink = "#", srcImg, product }: ProductCardProps) => {
    return (
        <S.ProductLink href={pathLink}>
            <S.ProductImg src={srcImg} />
            <S.ProductName children={product?.name} />
            <S.ProductPrice children={product?.price} />
        </S.ProductLink>
    );
};

export default ProductCard;
