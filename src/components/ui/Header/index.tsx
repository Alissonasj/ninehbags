import logo from '@assets/imgs/black_logo.svg';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Squash as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import MenuNav from './MenuNav';

const Header = () => {
    const { scrollYProgress } = useScroll();
    const width = useTransform(scrollYProgress, [0, 0.1], ['175px', '96px']);
    const [hambugerIsOpen, setHambugerIsOpen] = useState(false);

    return (
        <header className='sticky top-0 z-50 border-b-[1px] bg-gray-dark-50 px-20 py-5 md:px-5'>
            <div className='flex items-center justify-between'>
                <motion.img
                    src={logo}
                    style={{ width }}
                />

                <MenuNav
                    className={`md:absolute md:flex md:h-[100vh] md:w-80 md:flex-col md:justify-start md:bg-gray-dark-50 md:p-5 
                    ${hambugerIsOpen ? 'right-0' : '-right-80'}`}
                    ////////////////////
                />

                <div className='hidden text-gray-dark-700 md:block'>
                    <Hamburger
                        toggle={setHambugerIsOpen}
                        toggled={hambugerIsOpen}
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
