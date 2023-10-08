import { Link } from "@components/Link";
import * as S from "./styles";

const ProductMenuNav = () => {
    return (
        <S.ProductMenuList>
            <Link.Nav>
                <S.ProductMenuItem children="Bolsa" />
            </Link.Nav>
            <Link.Nav>
                <S.ProductMenuItem children="Bolsa" />
            </Link.Nav>
            <Link.Nav>
                <S.ProductMenuItem children="Bolsa" />
            </Link.Nav>
            <Link.Nav>
                <S.ProductMenuItem children="Bolsa" />
            </Link.Nav>
            <Link.Nav>
                <S.ProductMenuItem children="Bolsa" />
            </Link.Nav>
        </S.ProductMenuList>
    );
};

export default ProductMenuNav;
