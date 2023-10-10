import { ReactNode } from "react";
import * as S from "./styles";

interface FooterProps {
    title?: string;
    children?: ReactNode;
}

const FooterNav = ({ title, children }: FooterProps) => {
    return (
        <S.MenuList>
            <S.MenuTitle>{title}</S.MenuTitle>
            <S.MenuItem>{children}</S.MenuItem>
        </S.MenuList>
    );
};

export default FooterNav;
