import ProductInfoProps from "./ProductInfoProps";
import * as S from "./styles";

const ProductInfoContainer = ({
    children,
}: Pick<ProductInfoProps, "children">) => {
    return <S.ProductInfoContainer>{children}</S.ProductInfoContainer>;
};

export default ProductInfoContainer;
