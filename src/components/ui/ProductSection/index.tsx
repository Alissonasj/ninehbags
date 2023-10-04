import product from "@assets/imgs/product.jpg";
import ProductCard from "@ui/ProductCard";
import * as S from "./styles";
import MenuNav from "@ui/MenuNav";

const ProductSection = () => {
    return (
        <S.ProductSection>
            <MenuNav />
                       
            <ProductCard
                srcImg={product}
                product={{ name: "Moon Bag", price: "R$99,00" }}
            />
        </S.ProductSection>
    );
};

export default ProductSection;
