import { ReactNode } from "react";
import * as S from "./styles";

interface LinkButtonProrps {
    path?: string;
    children?: ReactNode;
}

const LinkButton = ({ path = "#", children }: LinkButtonProrps) => {
    return <S.LinkButton href={path}>{children}</S.LinkButton>;
};

export default LinkButton;
