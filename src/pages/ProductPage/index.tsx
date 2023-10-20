import useFetch from "@hooks/useFetch";
import Product from "@myTypes/product";
import ProductInfo from "@ui/ProductInfo";
import { useParams } from "react-router-dom";
import * as S from "./styles";

const ProductPage = () => {
    const { productId } = useParams();
    const products = useFetch("http://localhost:3000/products") as Product[];

    return (
        <>
            {products.map((product) => {
                return (
                    product.id === productId && (
                        <S.Wrapper key={product.id}>
                            <S.ProductSection>
                                <S.Gallery>
                                    <S.GridGalleryList>
                                        <S.GalleryItem>
                                            <S.GalleryImg src={product.img} />
                                        </S.GalleryItem>

                                        <S.GalleryItem>
                                            <S.GalleryImg src={product.img} />
                                        </S.GalleryItem>

                                        <S.GalleryItem>
                                            <S.GalleryImg src={product.img} />
                                        </S.GalleryItem>

                                        <S.GalleryItem>
                                            <S.GalleryImg src={product.img} />
                                        </S.GalleryItem>
                                    </S.GridGalleryList>
                                </S.Gallery>

                                <S.ProductInfoWrapper>
                                    <ProductInfo.Container>
                                        <h1>{product.id}</h1>
                                        <ProductInfo.Name name={product.name} />
                                        <ProductInfo.Price
                                            price={product.price}
                                        />
                                    </ProductInfo.Container>
                                </S.ProductInfoWrapper>
                            </S.ProductSection>
                        </S.Wrapper>
                    )
                );
            })}
        </>
    );
};

export default ProductPage;
