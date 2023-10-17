import productImg from "@assets/imgs/product.jpg";
import getProducts from "@funtions/getProducts";
import Product from "@myTypes/product";
import ProductInfo from "@ui/ProductInfo";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as S from "./styles";

const ProductPage = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState<Product>({});

    // async function getProduct() {
    //     const productList = await getProducts();

    //     productList?.map((p) => {
    //         p.id === productId && setProduct(p);
    //     });
    // }

    useEffect(() => {
        (async () => {
            const productList = await getProducts();

            productList?.map((p) => {
                p.id === productId && setProduct(p);
            });
        })();
    }, [productId]);

    return (
        <S.Wrapper>
            <h1>{product.id}</h1>
            <h1>{product.name}</h1>
            <h1>{product.price}</h1>
            <S.ProductSection>
                <S.Gallery>
                    <S.GridGalleryList>
                        <S.GalleryItem>
                            <S.GalleryImg src={productImg} />
                        </S.GalleryItem>

                        <S.GalleryItem>
                            <S.GalleryImg src={productImg} />
                        </S.GalleryItem>

                        <S.GalleryItem>
                            <S.GalleryImg src={productImg} />
                        </S.GalleryItem>

                        <S.GalleryItem>
                            <S.GalleryImg src={productImg} />
                        </S.GalleryItem>
                    </S.GridGalleryList>
                </S.Gallery>

                <S.ProductInfoWrapper>
                    <ProductInfo.Container>
                        <ProductInfo.Name name="Moo Bag - Marrom" />
                        <ProductInfo.Price price="R$99,00" />
                    </ProductInfo.Container>
                </S.ProductInfoWrapper>
            </S.ProductSection>
        </S.Wrapper>
    );
};

export default ProductPage;
