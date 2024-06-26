import productImg from '@assets/imgs/product.jpg';
import ProductInfo from '@components/Product/Info/';
import useApi from '@hooks/useApi';
import Template from '@styles/Template';
import Product from 'interfaces/product';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { productId } = useParams();
    const products = useApi({ method: 'get', url: '/products' }) as Product[];

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
                                                <img
                                                    src={product.img}
                                                    className='rounded-bl-[1.25rem] rounded-tr-[1.25rem]'
                                                />
                                            </li>

                                            <li className='max-w-[31.25rem]'>
                                                <img
                                                    src={product.img}
                                                    className='rounded-bl-[1.25rem] rounded-tr-[1.25rem]'
                                                />
                                            </li>

                                            <li className='max-w-[31.25rem]'>
                                                <img
                                                    src={product.img}
                                                    className='rounded-bl-[1.25rem] rounded-tr-[1.25rem]'
                                                />
                                            </li>

                                            <li className='max-w-[31.25rem]'>
                                                <img
                                                    src={product.img}
                                                    className='rounded-bl-[1.25rem] rounded-tr-[1.25rem]'
                                                />
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
                                                        Características:
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
                                            <div className='mt-10'>
                                                <h5 className='mb-4 mt-16 text-base font-bold uppercase text-gray-dark-700'>
                                                    Resumo:
                                                </h5>
                                                <p className='text-justify text-base text-gray-dark-600'>
                                                    A Moon bag, também conhecida
                                                    como Bolsa Lua, recebe esse
                                                    nome devido ao seu design
                                                    circular. Suas faces são
                                                    adornadas com material
                                                    texturizado, conferindo um
                                                    toque especial à peça, além
                                                    de ser bem estruturada
                                                    mantendo seu formato
                                                    intacto! Equipada com uma
                                                    alça transversal ajustável,
                                                    tirantes laterais com um
                                                    design exclusivo em forma
                                                    triangular e mosquetões em
                                                    suas extremidades, tornando
                                                    a remoção da alça uma tarefa
                                                    simples. A Moon bag se
                                                    apresenta como a opção
                                                    espaçosa e ideal para
                                                    transportar seus itens
                                                    essenciais com estilo, ela
                                                    te acompanhará em momentos
                                                    incríveis.
                                                </p>
                                            </div>
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

export default ProductDetails;
