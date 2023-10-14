import Product from "@myTypes/product";
import { ReactNode } from "react";

export interface ProductCardProps extends Product {
    pathLink?: string;
    children?: ReactNode;
}
