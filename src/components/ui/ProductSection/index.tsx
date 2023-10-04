import product from "@assets/imgs/product.jpg";
import MenuNav from "@ui/MenuNav";
import ProductCard from "@ui/ProductCard";
import * as S from "./styles";

const ProductSection = () => {
    return (
        <S.ProductSection>
            <MenuNav />

            <S.GridProductSection>
                <ProductCard
                    srcImg={product}
                    product={{ name: "Moon Bag", price: "R$99,00" }}
                />
                <ProductCard
                    srcImg={product}
                    product={{ name: "Moon Bag", price: "R$99,00" }}
                />
                <ProductCard
                    srcImg={product}
                    product={{ name: "Moon Bag", price: "R$99,00" }}
                />
                <ProductCard
                    srcImg={product}
                    product={{ name: "Moon Bag", price: "R$99,00" }}
                />
            </S.GridProductSection>
        </S.ProductSection>
    );
};

export default ProductSection;
