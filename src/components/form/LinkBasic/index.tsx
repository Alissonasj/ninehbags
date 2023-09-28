import { ReactNode } from "react";
import * as S from "./styles";

interface LinkBasicProps {
    path?: string;
    children?: ReactNode;
}

const LinkBasic = ({ path = "#", children }: LinkBasicProps) => {
    return <S.LinkBasic href={path}>{children}</S.LinkBasic>;
};

export default LinkBasic;
