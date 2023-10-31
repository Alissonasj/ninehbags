import useFetch from '@hooks/useFetch';
import Product from '@myTypes/product';
import ProductCard from '@ui/ProductCard';
import ProductMenuNav from './ProductMenuNav';

const ProductSection = () => {
    const products = useFetch('http://localhost:3000/products') as Product[];

    return (
        <main className='my-28'>
            <ProductMenuNav />

            <div className='grid grid-cols-4 gap-x-5 gap-y-10 lg:grid-cols-3 sm:grid-cols-2 s-sm:grid-cols-1'>
                {products?.map((product) => {
                    return (
                        <ProductCard.Wrapper
                            key={product.id}
                            href={`product/${product.id}`}
                        >
                            <ProductCard.Img src={product.img} />

                            <ProductCard.Name>{product.name}</ProductCard.Name>

                            <ProductCard.Price>
                                {product.price}
                            </ProductCard.Price>
                        </ProductCard.Wrapper>
                    );
                })}
            </div>
        </main>
    );
};

export default ProductSection;
