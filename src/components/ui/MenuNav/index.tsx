import Link from "@components/form/Link/inde";
import * as S from "./styles";


const MenuNav = () => {
    return (
            <S.MenuNav>
                <Link
                    path="#"
                    children="Bolsas"
                />
                <Link
                    path="#"
                    children="Menu"
                />
                <Link
                    path="#"
                    children="Menu"
                />
                <Link
                    path="#"
                    children="Nineh"
                />
            </S.MenuNav>
    );
};

export default MenuNav;
