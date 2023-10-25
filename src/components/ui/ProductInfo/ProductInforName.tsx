import ProductInfoProps from "./ProductInfoProps";
import * as S from "./styles";

const ProductInfoName = ({ name }: ProductInfoProps) => {
    return <S.ProductInforName>{name}</S.ProductInforName>;
};

export default ProductInfoName;
