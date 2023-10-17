import Product from "@myTypes/product";
import ProductCard from "@ui/ProductCard";
import { useLoaderData } from "react-router-dom";
import ProductMenuNav from "./ProductMenuNav";
import * as S from "./styles";

const ProductSection = () => {
    const products = useLoaderData() as Product[];

    return (
        <S.ProductSection>
            <ProductMenuNav />
            <S.GridProductSection>
                {products.map((product) => {
                    return (
                        <ProductCard.Container
                            key={product.id}
                            pathLink={`product/${product.id}`}
                        >
                            <ProductCard.Img img={product.img} />
                            <ProductCard.Information
                                name={product.name}
                                price={product.price}
                            />
                        </ProductCard.Container>
                    );
                })}
            </S.GridProductSection>
        </S.ProductSection>
    );
};

export default ProductSection;
