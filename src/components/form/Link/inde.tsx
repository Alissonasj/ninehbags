import { ReactNode } from "react";
import * as S from "./styles"

interface LinkProps {
    path?: string,
    children?: ReactNode
}

const Link = ({path, children} : LinkProps) => {
    return ( 
        <S.Link href={path}>
            {children}
        </S.Link>
     );
}
 
export default Link;