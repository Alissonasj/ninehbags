import logo from "@assets/imgs/white_logo.svg";
import { Logo as SLogo } from "@ui/Header/styles";
import * as S from "./styles";

const Footer = () => {
    return (
        <S.Footer>
            <S.Container>
                <S.Header>
                    <SLogo src={logo} />
                </S.Header>
                <S.Body></S.Body>
            </S.Container>
        </S.Footer>
    );
};

export default Footer;
