import useFetch from "@hooks/useFetch";
import MenuNav from "@ui/MenuNav";
import ProductCard from "@ui/ProductCard";
import * as S from "./styles";
import Product from "@myTypes/product";

const ProductSection = () => {
    const { dataFecth: products } = useFetch("http://localhost:3000/products");

    return (
        <S.ProductSection>
            <MenuNav />

            <S.GridProductSection>
                {products.map((product: Product) => {
                    return (
                        <ProductCard
                            key={product.id}
                            product={{
                                id: product.id,
                                img: product.img,
                                name: product.name,
                                price: product.price,
                            }}
                        />
                    );
                })}
            </S.GridProductSection>
        </S.ProductSection>
    );
};

export default ProductSection;
