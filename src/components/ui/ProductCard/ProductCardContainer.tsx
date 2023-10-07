import { ProductCardProps } from "./ProductCardProps";
import * as S from "./styles";

const ProductCardContainer = ({
    children,
    pathLink = "#",
}: ProductCardProps) => {
    return (
        <S.ProductCardContainer href={pathLink}>
            {children}
        </S.ProductCardContainer>
    );
};

export default ProductCardContainer;
