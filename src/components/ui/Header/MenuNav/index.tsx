import { NavLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion'

interface MenuNavProps extends React.MenuHTMLAttributes<HTMLElement> {}

const MenuNav = ({ className }: MenuNavProps) => {
    return (
        <nav>
            <motion.menu className={twMerge('flex justify-center gap-5 [&_a.active]:border-primary', className)}>
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
