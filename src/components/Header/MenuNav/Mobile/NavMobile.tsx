import LINK_PATH from 'link-path';
import { NavLink } from 'react-router-dom';

interface MenuNavMobileProps {
    hambugerIsOpen: boolean;
}

const MenuNavMobile = ({ hambugerIsOpen }: MenuNavMobileProps) => {
    return (
        <nav
            className={`my-transition fixed -right-full top-0 z-40 hidden h-[100vh]
                    w-full  bg-gray-dark-50 md:flex
                    ${hambugerIsOpen ? '-translate-x-full' : 'translate-x-0'}`}
        >
            <menu className='mt-[127px] flex grow flex-col gap-5 [&_a.active]:border-primary'>
                <li className='group flex'>
                    <NavLink
                        to={LINK_PATH.HOME}
                        className='link-nav my-transition flex w-full justify-between self-center bg-gray-dark-200 p-5 font-[700]'
                    >
                        Início
                    </NavLink>
                </li>

                <li className='group flex'>
                    <NavLink
                        to={LINK_PATH.PRODUCTS}
                        className='link-nav my-transition flex w-full justify-between self-center bg-gray-dark-200 p-5 font-[700]'
                    >
                        Bolsas
                        <p>T</p>
                    </NavLink>

                    {/* <MenuNavDrawer /> */}
                </li>

                <li className='group flex'>
                    <NavLink
                        to={LINK_PATH.CONTACT}
                        className='link-nav my-transition flex w-full justify-between self-center bg-gray-dark-200 p-5 font-[700]'
                    >
                        Contato
                    </NavLink>
                </li>

                <li className='group flex'>
                    <NavLink
                        to={LINK_PATH.ABOUT}
                        className='link-nav my-transition flex w-full justify-between self-center bg-gray-dark-200 p-5 font-[700]'
                    >
                        A Nineh
                    </NavLink>
                </li>
            </menu>
        </nav>
    );
};

export default MenuNavMobile;
