import ProductInfoProps from "./ProductInfoProps";
import * as S from "./styles";

const ProductInfoPrice = ({ price }: Pick<ProductInfoProps, "price">) => {
    return <S.ProductInfoPrice>{price}</S.ProductInfoPrice>;
};

export default ProductInfoPrice;
