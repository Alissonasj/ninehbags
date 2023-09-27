import MenuNav from "../MenuNav";
import * as S from "./styles";
import logo from "@assets/imgs/logo.svg";

const Header = () => {
    return (
        <S.Header>
            <S.Logo src={logo} />
            <MenuNav />
        </S.Header>
    );
};

export default Header;
