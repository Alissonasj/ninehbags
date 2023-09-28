import LinkBasic from "@components/form/LinkBasic/index";
import * as S from "./styles";

const MenuNav = () => {
    return (
        <S.MenuNav>
            <LinkBasic children="Bolsas" />
            <LinkBasic children="Menu" />
            <LinkBasic children="Menu" />
            <LinkBasic children="A-Nineh" />
        </S.MenuNav>
    );
};

export default MenuNav;
