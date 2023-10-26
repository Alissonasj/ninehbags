import ProductInfoProps from "./ProductInfoProps";
import * as S from "./styles";

const ProductInfoName = ({ name }: Pick<ProductInfoProps, "name">) => {
    return <S.ProductInfoName>{name}</S.ProductInfoName>;
};

export default ProductInfoName;
