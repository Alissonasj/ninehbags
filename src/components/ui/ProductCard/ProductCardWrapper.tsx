import CustomLink from '@components/CustomLink';
import { motion } from 'framer-motion';

interface ProductCardWrapperProps {
    children?: React.ReactNode;
    href?: string;
}

// my-transition hover:scale-105

const ProductCardWrapper = ({ children, href }: ProductCardWrapperProps) => {
    return (
        <CustomLink href={href}>
            <motion.div
                whileHover={{ scale: 1.05 }}
                className='rounded-[5px] p-3  hover:shadow-sm hover:shadow-gray-dark-500'
            >
                {children}
            </motion.div>
        </CustomLink>
    );
};

export default ProductCardWrapper;
