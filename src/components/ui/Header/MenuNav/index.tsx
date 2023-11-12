import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

interface MenuNavProps {
    hambugerIsOpen?: boolean;
}

const MenuNav = ({ hambugerIsOpen }: MenuNavProps) => {
    return (
        <nav
            className={`my-transition md:fixed md:-right-60 md:top-0 md:z-40  md:flex
                    md:h-[100vh] md:w-60 md:bg-gray-dark-50 md:p-5
                    ${hambugerIsOpen ? '-translate-x-60' : 'translate-x-0'}`}
        >
            <motion.menu className='flex justify-center gap-5 md:flex-col md:justify-start [&_a.active]:border-primary'>
                <NavLink
                    to='/'
                    className='link-nav my-transition border-b-2 border-transparent hover:border-b-2 hover:border-primary'
                >
                    <li className='px-[0.625rem] py-[0.3125rem] text-gray-dark-800'>
                        Inicio
                    </li>
                </NavLink>

                <NavLink
                    to='/contact'
                    className='link-nav my-transition border-b-2 border-transparent hover:border-b-2 hover:border-primary'
                >
                    <li className='px-[0.625rem] py-[0.3125rem] text-gray-dark-800'>
                        Contato
                    </li>
                </NavLink>

                <NavLink
                    to='/sobre'
                    className='link-nav my-transition border-b-2 border-transparent hover:border-b-2 hover:border-primary'
                >
                    <li className='px-[0.625rem] py-[0.3125rem] text-gray-dark-800'>
                        A Nineh
                    </li>
                </NavLink>
            </motion.menu>
        </nav>
    );
};

export default MenuNav;
