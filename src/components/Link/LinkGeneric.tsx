import { LinkProps } from "./LinkProps";
import * as S from "./styles";

const LinkGeneric = ({ children, pathLink = "#" }: LinkProps) => {
    return <S.LinkGeneric to={pathLink}>{children}</S.LinkGeneric>;
};

export default LinkGeneric;
