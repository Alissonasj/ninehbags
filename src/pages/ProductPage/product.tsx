import * as S from "./styles";

const ProductPage = () => {
    return (
        <S.Wrapper>
            <S.ProductSection>
                <S.Gallery>
                    <S.GridGalleryList>
                        <S.GalleryItem />
                        <S.GalleryItem />
                        <S.GalleryItem />
                        <S.GalleryItem />
                    </S.GridGalleryList>
                </S.Gallery>

                <S.ProductInfoWrapper>
                    <S.ProdcutInfo />
                </S.ProductInfoWrapper>
            </S.ProductSection>
        </S.Wrapper>
    );
};

export default ProductPage;
