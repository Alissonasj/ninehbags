import imgg from "@assets/imgs/product.jpg";
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

                            <S.TechnicalInfoSection>
                                <div>
                                    <S.TechnicalInfoTitle>
                                        Informações técnicas
                                    </S.TechnicalInfoTitle>
                                    <S.TechnicalInfoList>
                                        <S.TechnicalInfoItem>
                                            Dimensões: 23 x 14 x 5,5 cm.
                                        </S.TechnicalInfoItem>

                                        <S.TechnicalInfoItem>
                                            Ferragens: Banho duplo em níquel e
                                            banho único em verniz italiano.
                                        </S.TechnicalInfoItem>

                                        <S.TechnicalInfoItem>
                                            Material tecnológico: Laminado
                                            sintético vinílico. Composição
                                            revestida em PVC sobre trama em
                                            algodão.
                                        </S.TechnicalInfoItem>
                                    </S.TechnicalInfoList>
                                </div>
                            </S.TechnicalInfoSection>

                            <S.HistorySection>
                                <div className="div-1">
                                    <div>
                                        <h4>Um Clássico Must Have</h4>
                                        <p>
                                            Com inúmeras possibilidades de uso,
                                            o perfect top é o item que para
                                            qualquer ocasião, perfeito para
                                            fazer a mala cápsula de viagens e
                                            pra alta frequência de uso no dia a
                                            dia.
                                        </p>
                                    </div>
                                    <div>
                                        <img src={imgg} />
                                    </div>
                                </div>
                            </S.HistorySection>
                        </S.Wrapper>
                    )
                );
            })}
        </>
    );
};

export default ProductPage;
