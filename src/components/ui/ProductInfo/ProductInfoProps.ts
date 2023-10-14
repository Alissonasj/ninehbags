import Product from "@myTypes/product";
import { ReactNode } from "react";

interface ProductInfoProps extends Product{
    children?: ReactNode;
}

export default ProductInfoProps;
