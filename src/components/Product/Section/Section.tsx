import ProductCard from '@components/Product/Card';
import useApi from '@hooks/useApi';
import Product from '@myTypes/product';
import Template from '@styles/Template';
import { Suspense } from 'react';
import { Link } from 'react-router-dom';
import ProductSectionFilter from './Filter/Filter';

const ProductSection = () => {
    const products: Product[] = useApi({
        method: 'get',
        url: '/products',
    });

    return (
        <Template>
            <h1 className='my-[6.25rem] text-4xl font-[700]'>Bolsas</h1>

            <div className='flex gap-10'>
                <aside>
                    <ProductSectionFilter />
                </aside>

                <Suspense fallback={'Loading...'}>
                    <main className='grid grid-cols-4 gap-x-5 gap-y-10 lg:grid-cols-3 sm:grid-cols-2 s-sm:grid-cols-1'>
                        {products.map((product) => {
                            return (
                                <Link
                                    key={product.id}
                                    to={`bolsa/${product.id}`}
                                    className='rounded-[5px] hover:shadow-md'
                                >
                                    <ProductCard.Wrapper>
                                        <ProductCard.Img src={product.img} />

                                        <div className='p-5'>
                                            <ProductCard.Name>
                                                {product.name}
                                            </ProductCard.Name>

                                            <ProductCard.Price>
                                                {product.price}
                                            </ProductCard.Price>
                                        </div>
                                    </ProductCard.Wrapper>
                                </Link>
                            );
                        })}
                    </main>
                </Suspense>
            </div>
        </Template>
    );
};

export default ProductSection;
