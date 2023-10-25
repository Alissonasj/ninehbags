import { Link } from "@components/Link";
import * as S from "./styles";

const ProductMenuNav = () => {
    return (
        <S.ProductMenuList>
            <Link.Generic>
                <S.ProductMenuItem children="Bolsa" />
            </Link.Generic>
            <Link.Generic>
                <S.ProductMenuItem children="Bolsa" />
            </Link.Generic>
            <Link.Generic>
                <S.ProductMenuItem children="Bolsa" />
            </Link.Generic>
            <Link.Generic>
                <S.ProductMenuItem children="Bolsa" />
            </Link.Generic>
            <Link.Generic>
                <S.ProductMenuItem children="Bolsa" />
            </Link.Generic>
        </S.ProductMenuList>
    );
};

export default ProductMenuNav;
