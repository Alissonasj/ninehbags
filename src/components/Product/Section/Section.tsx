import ProductCard from '@components/Product/Card';
import useApi from '@hooks/useApi';
import Product from '@myTypes/product';
import ProductMenuNav from './Filter/Filter';

const ProductSection = () => {
    const products = useApi({
        method: 'get',
        url: '/products',
        params: { _limit: 8, _page: 1 },
    }) as Product[];

    return (
        <main className='my-28'>
            <ProductMenuNav />

            <div className='grid grid-cols-4 gap-x-5 gap-y-10 lg:grid-cols-3 sm:grid-cols-2 s-sm:grid-cols-1'>
                {products.map((product) => {
                    return (
                        <div
                            className='rounded-[5px] hover:shadow-md'
                            key={product.id}
                        >
                            <ProductCard.Wrapper href={`product/${product.id}`}>
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
                        </div>
                    );
                })}
            </div>
        </main>
    );
};

export default ProductSection;
