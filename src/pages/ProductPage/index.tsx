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
                            <div className='my-10'>
                                <section className='grid grid-cols-[1fr_500px] gap-10 lg:grid-cols-none'>
                                    <div>
                                        <ul className='grid grid-cols-2 justify-items-center gap-5'>
                                            <li className='max-w-[31.25rem]'>
                                                <img src={product.img} />
                                            </li>

                                            <li className='max-w-[31.25rem]'>
                                                <img src={product.img} />
                                            </li>

                                            <li className='max-w-[31.25rem]'>
                                                <img src={product.img} />
                                            </li>

                                            <li className='max-w-[31.25rem]'>
                                                <img src={product.img} />
                                            </li>
                                        </ul>
                                    </div>

                                    <div className='p-5 lg:p-0'>
                                        <ProductInfo.Wrapper>
                                            <h1>{product.id}</h1>
                                            <ProductInfo.Name>
                                                {product.name}
                                            </ProductInfo.Name>

                                            <ProductInfo.Price>
                                                {product.price}
                                            </ProductInfo.Price>

                                            <ProductInfo.Chacteristics>
                                                <li>
                                                    <h5 className='mb-4 mt-16 text-base font-bold uppercase text-gray-dark-700'>
                                                        Características:{' '}
                                                    </h5>
                                                </li>
                                                <li className='ml-4 list-disc text-gray-dark-600'>
                                                    Dimensões: 23 x 14 x 5,5 cm.
                                                </li>
                                                <li className='ml-4 list-disc text-gray-dark-600'>
                                                    Ferragens: Banho duplo em
                                                    níquel e banho único em
                                                    verniz italiano.
                                                </li>
                                                <li className='ml-4 list-disc text-gray-dark-600'>
                                                    Material tecnológico:
                                                    Laminado sintético vinílico.
                                                    Composição revestida em PVC
                                                    sobre trama em algodão.
                                                </li>
                                            </ProductInfo.Chacteristics>
                                        </ProductInfo.Wrapper>
                                    </div>
                                </section>

                                <section className='mt-10'>
                                    <div className='flex items-center gap-5 custom-sm:flex-col-reverse'>
                                        <div className='space-y-5 text-gray-dark-800'>
                                            <h4 className='font-bold uppercase '>
                                                Um Clássico Must Have
                                            </h4>
                                            <p>
                                                Com inúmeras possibilidades de
                                                uso, o perfect top é o item que
                                                para qualquer ocasião, perfeito
                                                para fazer a mala cápsula de
                                                viagens e pra alta frequência de
                                                uso no dia a dia.
                                            </p>
                                        </div>
                                        <div>
                                            <img src={productImg} />
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </Template>
                    )
                );
            })}
        </>
    );
};

export default ProductPage;
