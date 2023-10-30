import productImg from '@assets/imgs/product.jpg';
import useFetch from '@hooks/useFetch';
import Product from '@myTypes/product';
import Template from '@styles/Template';
import ProductInfo from '@ui/ProductInfo';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
    const { productId } = useParams();
    const products = useFetch('http://localhost:3000/products') as Product[];

    return (
        <>
            {products.map((product) => {
                return (
                    product.id === productId && (
                        <Template key={product.id}>
                            <section className="grid grid-cols-2 gap-10">
                                <div>
                                    <ul className="grid grid-cols-2 gap-5 justify-items-center">
                                        <li className="max-w-[31.25rem]">
                                            <img src={product.img} />
                                        </li>

                                        <li className="max-w-[31.25rem]">
                                            <img src={product.img} />
                                        </li>

                                        <li className="max-w-[31.25rem]">
                                            <img src={product.img} />
                                        </li>

                                        <li className="max-w-[31.25rem]">
                                            <img src={product.img} />
                                        </li>
                                    </ul>
                                </div>

                                <div className="p-5">
                                    <ProductInfo.Wrapper>
                                        <h1>{product.id}</h1>
                                        <ProductInfo.Name>
                                            {product.name}
                                        </ProductInfo.Name>

                                        <ProductInfo.Price>
                                            {product.price}
                                        </ProductInfo.Price>

                                        <h5 className="mb-4 uppercase text-base">
                                            Características:{' '}
                                        </h5>
                                        <ProductInfo.Chacteristics>
                                            <li className="list-disc ml-4">
                                                Dimensões: 23 x 14 x 5,5 cm.
                                            </li>
                                            <li className="list-disc ml-4">
                                                Ferragens: Banho duplo em níquel
                                                e banho único em verniz
                                                italiano.
                                            </li>
                                            <li className="list-disc ml-4">
                                                Material tecnológico: Laminado
                                                sintético vinílico. Composição
                                                revestida em PVC sobre trama em
                                                algodão.
                                            </li>
                                        </ProductInfo.Chacteristics>
                                    </ProductInfo.Wrapper>
                                </div>
                            </section>

                            <section className="mt-10">
                                <div className="flex items-center gap-5">
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
                                        <img src={productImg} />
                                    </div>
                                </div>
                            </section>
                        </Template>
                    )
                );
            })}
        </>
    );
};

export default ProductPage;
