import ProductInfoProps from "./ProductInfoProps";
import * as S from "./styles";

const ProductInfoCharacteristics = ({
    chacteristics,
}: Pick<ProductInfoProps, "chacteristics">) => {
    return <S.ChacteristicsItem>{chacteristics}</S.ChacteristicsItem>;
};

export default ProductInfoCharacteristics;
