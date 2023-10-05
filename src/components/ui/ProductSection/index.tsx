import MenuNav from "@ui/MenuNav";
import ProductCard from "@ui/ProductCard";
import { useEffect, useState } from "react";
import * as S from "./styles";

const ProductSection = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await fetch("http://localhost:3000/products");
            console.log(response.ok);

            const data = await response.json();
            console.log(data);

            return setProducts(data);
        })();
    }, []);

    return (
        <S.ProductSection>
            <MenuNav />

            <S.GridProductSection>
                {/* <ProductCard
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
                /> */}
                {products.map((product) => {
                    return (
                        <ProductCard
                            key={product.id}
                            srcImg={product.img}
                            product={{
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
