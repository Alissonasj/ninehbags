import logo from "@assets/imgs/logo.svg";
import MenuNav from "./MenuNav";
import * as S from "./styles";

const Header = () => {
    return (
        <S.Header>
            <S.Logo src={logo} />
            <MenuNav />
        </S.Header>
    );
};

export default Header;
