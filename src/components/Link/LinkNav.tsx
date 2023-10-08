import { LinkProps } from "./LinkProps";
import * as S from "./styles";

const LinkNav = ({ children, pathLink = "#" }: LinkProps) => {
    return <S.LinkNav href={pathLink}>{children}</S.LinkNav>;
};

export default LinkNav;
