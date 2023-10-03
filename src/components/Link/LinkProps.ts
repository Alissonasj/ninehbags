import { ReactNode } from "react";

export interface LinkProps {
    path?: string;
    children?: ReactNode;
    style?: {
        size?: string;
        weight?: string;
        backGroundColor?: string;
        radius?: string;
        padingTop?: string;
        padingRight?: string;
        padingBottom?: string;
        padingLeft?: string;
        textTransform?: "uppercase" | "lowercase";
    };
}

export interface LinkStylesProps extends Pick<LinkProps, "style"> {}
