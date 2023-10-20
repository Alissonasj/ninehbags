import useFetch from "@hooks/useFetch";
import Product from "@myTypes/product";
import ProductCard from "@ui/ProductCard";
import ProductMenuNav from "./ProductMenuNav";
import * as S from "./styles";

const ProductSection = () => {
    const products = useFetch("http://localhost:3000/products") as Product[];

    return (
        <S.ProductSection>
            <ProductMenuNav />
            <S.GridProductSection>
                {products?.map((product) => {
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
