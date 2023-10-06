import Product from "@myTypes/product";
import * as S from "./styles";

interface ProductCardProps {
    pathLink?: string;    
    product?: Product;
}

const ProductCard = ({ pathLink = "#",  product }: ProductCardProps) => {
    return (
        
        <S.ProductLink key={product?.id} href={pathLink}>
            <S.ProductImg src={product?.img} />
            <S.ProductName children={product?.name} />
            <S.ProductPrice children={product?.price} />
        </S.ProductLink>
    );
};

export default ProductCard;
