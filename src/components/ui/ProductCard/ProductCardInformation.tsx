import { ProductCardProps } from "./ProductCardProps";
import * as S from "./styles";

const ProductCardIformation = ({ name, price }: ProductCardProps) => {
    return (
        <>
            <S.ProductCardName>{name}</S.ProductCardName>
            <S.ProductCardPrice>{price}</S.ProductCardPrice>
        </>
    );
};

export default ProductCardIformation;
