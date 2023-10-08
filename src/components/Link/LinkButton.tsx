import { LinkProps } from "./LinkProps";
import * as S from "./styles";

const LinkButton = ({ children, pathLink = "#" }: LinkProps) => {
    return <S.LinkButton href={pathLink}>{children}</S.LinkButton>;
};

export default LinkButton;
