import { Link } from "@components/Link";
import * as S from "./styles";

const MenuNav = () => {
    return (
        <S.MenuNav>
            <Link.Nav children="Bolsas" />
            <Link.Nav children="Menu" />
            <Link.Nav children="Menu" />
            <Link.Nav children="Nineh" />
        </S.MenuNav>
    );
};

export default MenuNav;
