import { LinkProps } from "./LinkProps";
import * as S from "./styles";

const LinkButton = ({ children, path = "#" }: LinkProps) => {
    return <S.LinkButton href={path}>{children}</S.LinkButton>;
};

export default LinkButton;
