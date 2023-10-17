import { ProductCardProps } from "./ProductCardProps";
import * as S from "./styles";

const ProductCardContainer = ({
    children,
    pathLink = "#",
}: ProductCardProps) => {
    return (
        <S.ProductCardContainer to={pathLink}>
            {children}
        </S.ProductCardContainer>
    );
};

export default ProductCardContainer;
