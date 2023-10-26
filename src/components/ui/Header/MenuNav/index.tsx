import { Link } from "@components/Link";
import * as S from "./styles";

const MenuNav = () => {
    return (
        <S.MenuNav>
            <S.MenuList>
                <Link.Nav pathLink="/">
                    <S.MenuItem children="Home" />
                </Link.Nav>

                <Link.Nav>
                    <S.MenuItem children="Menu" />
                </Link.Nav>

                <Link.Nav>
                    <S.MenuItem children="Contato" />
                </Link.Nav>

                <Link.Nav>
                    <S.MenuItem children="A_Nineh" />
                </Link.Nav>
            </S.MenuList>
        </S.MenuNav>
    );
};

export default MenuNav;
