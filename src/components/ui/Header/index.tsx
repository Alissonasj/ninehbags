import logo from '@assets/imgs/black_logo.svg';
import { motion, useScroll, useTransform } from 'framer-motion';
import MenuNav from './MenuNav';

const Header = () => {
    const { scrollYProgress } = useScroll();
    const width = useTransform(scrollYProgress, [0, 0.1], ['175px', '100px']);

    return (
        <header className='sticky top-0 z-50 border-b-[1px] bg-gray-dark-50 px-20 py-5 md:px-5'>
            <div className='flex items-center justify-between'>
                <motion.img
                    src={logo}
                    style={{ width }}
                />

                <MenuNav className='md:hidden' />
            </div>
        </header>
    );
};

export default Header;
