import { ProductCardProps } from "./ProductCardProps";
import * as S from "./styles";

const ProductCardImg = ({ img }: ProductCardProps) => {
    return <S.ProductCardImg src={img} />;
};

export default ProductCardImg;
