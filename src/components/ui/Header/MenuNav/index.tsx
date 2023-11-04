import { NavLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

interface MenuNavProps {
    className?: string;
}

const MenuNav = ({ className }: MenuNavProps) => {
    return (
        <nav className={twMerge('', className)}>
            <menu className='flex justify-center gap-5 [&_a.active]:border-primary'>
                <NavLink
                    to='/'
                    className='link-nav border-b-2 border-transparent hover:border-b-2 hover:border-primary'
                >
                    <li className='px-[0.625rem] py-[0.3125rem]'>Inicio</li>
                </NavLink>

                <NavLink
                    to='/contact'
                    className='link-nav border-b-2 border-transparent hover:border-b-2 hover:border-primary'
                >
                    <li className='px-[0.625rem] py-[0.3125rem]'>Contato</li>
                </NavLink>

                <NavLink
                    to='/sobre'
                    className='link-nav border-b-2 border-transparent hover:border-b-2 hover:border-primary'
                >
                    <li className='px-[0.625rem] py-[0.3125rem]'>A_Nineh</li>
                </NavLink>
            </menu>
        </nav>
    );
};

export default MenuNav;
