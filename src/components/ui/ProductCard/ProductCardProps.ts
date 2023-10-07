import { ReactNode } from "react";

export interface ProductCardProps {
    pathLink?: string;
    children?: ReactNode;
    img?: string;
    name?: string;
    price?: string;
}
