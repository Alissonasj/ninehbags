import Link from "@components/form/Link/inde";
import * as S from "./styles"

const MenuNav = () => {
    return ( 
        <S.Container>
            <S.Logo src="" />

            <S.MenuNav>
                <Link path="#" children="Menu" />
                <Link path="#" children="Menu" />
                <Link path="#" children="Menu" />
                <Link path="#" children="Menu" />
            </S.MenuNav>
        </S.Container>
     );
}
 
export default MenuNav;
