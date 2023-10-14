import product from "@assets/imgs/product.jpg";
import ProductInfo from "@ui/ProductInfo";
import * as S from "./styles";

const ProductPage = () => {
    return (
        <S.Wrapper>
            <S.ProductSection>
                <S.Gallery>
                    <S.GridGalleryList>
                        <S.GalleryItem>
                            <S.GalleryImg src={product} />
                        </S.GalleryItem>

                        <S.GalleryItem>
                            <S.GalleryImg src={product} />
                        </S.GalleryItem>

                        <S.GalleryItem>
                            <S.GalleryImg src={product} />
                        </S.GalleryItem>

                        <S.GalleryItem>
                            <S.GalleryImg src={product} />
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
