import { LinkProps } from "./LinkProps";
import * as S from "./styles";

const LinkNav = ({ children, path = "#" }: LinkProps) => {
    return <S.LinkNav href={path}>{children}</S.LinkNav>;
};

export default LinkNav;
