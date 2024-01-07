import InfinityScroll from '@components/InfinityScroll/InfinityScroll';
import ProductCard from '@components/Product/Card';
import useApi from '@hooks/useApi';
import Product from '@myTypes/product';
import { motion } from 'framer-motion';
import ProductMenuNav from './Filter/Filter';

const ProductSection = () => {
    const products = useApi({
        method: 'get',
        url: '/products',
        params: { _limit: 8, _page: 1 },
    }) as Product[];

    const container = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.5,
            },
        },
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };

    return (
        <main className='my-28'>
            <ProductMenuNav />

            <motion.div
                variants={container}
                initial='hidden'
                animate='visible'
                className='grid grid-cols-4 gap-x-5 gap-y-10 lg:grid-cols-3 sm:grid-cols-2 s-sm:grid-cols-1'
            >
                {products.map((product) => {
                    return (
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            variants={item}
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
                        </motion.div>
                    );
                })}
                                
                <InfinityScroll />
            </motion.div>
        </main>
    );
};

export default ProductSection;
