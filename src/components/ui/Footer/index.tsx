import facebook from "@assets/imgs/facebook.svg";
import instagram from "@assets/imgs/instagram.svg";
import whatsapp from "@assets/imgs/whatsapp.svg";
import logo from "@assets/imgs/white_logo.svg";
import { Link } from "@components/Link";

import FooterNav from "./FooterNav";
import * as S from "./styles";

const Footer = () => {
    return (
        <S.Footer>
            <S.Container>
                <S.Header>
                    <img src={logo} />
                </S.Header>
                <S.Body>
                    <FooterNav title="Nossa Missão">
                        "A Nineh nasceu para facilitar a vida das pessoas por
                        meio de bolsas funcionais."
                    </FooterNav>

                    <FooterNav title="Duvidas">
                        <Link.Nav children="Link" />
                        <Link.Nav children="Link" />
                        <Link.Nav children="Link" />
                    </FooterNav>

                    <FooterNav title="Sobre">
                        <Link.Nav children="Link2" />
                        <Link.Nav children="Link2" />
                        <Link.Nav children="Link2" />
                    </FooterNav>

                    <FooterNav title="Redes Sociais">
                        <Link.Nav>
                            <img
                                src={whatsapp}
                                style={{ width: 20, height: 20 }}
                            />
                        </Link.Nav>

                        <Link.Nav>
                            <img
                                src={instagram}
                                style={{ width: 20, height: 20 }}
                            />
                        </Link.Nav>

                        <Link.Nav>
                            <img
                                src={facebook}
                                style={{ width: 20, height: 20 }}
                            />
                        </Link.Nav>
                    </FooterNav>
                </S.Body>
            </S.Container>
        </S.Footer>
    );
};

export default Footer;
