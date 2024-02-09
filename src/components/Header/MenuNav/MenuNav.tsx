import { NavLink } from 'react-router-dom';

interface MenuNavProps {
    hambugerIsOpen?: boolean;
}

const MenuNav = ({ hambugerIsOpen }: MenuNavProps) => {
    const linkStyle = 'link-nav my-transition';
    const liStyle = 'px-[0.625rem] py-[0.3125rem]';

    return (
        <nav
            className={`my-transition md:fixed md:-right-full md:top-0 md:z-40 md:flex
                    md:h-[100vh] md:w-full md:bg-gray-dark-50 md:p-5
                    ${hambugerIsOpen ? '-translate-x-full' : 'translate-x-0'}`}
        >
            <menu className='flex justify-center gap-5 md:flex-col md:justify-start [&_a.active]:border-primary'>
                <NavLink
                    to='/'
                    className={linkStyle}
                >
                    <li className={liStyle}>Inicio</li>
                </NavLink>

                <NavLink
                    to='/products'
                    className={linkStyle}
                >
                    <li className={liStyle}>Produtos</li>
                </NavLink>

                <NavLink
                    to='/contact'
                    className={linkStyle}
                >
                    <li className={liStyle}>Contato</li>
                </NavLink>

                <NavLink
                    to='/about'
                    className={linkStyle}
                >
                    <li className={liStyle}>A Nineh</li>
                </NavLink>
            </menu>
        </nav>
    );
};

export default MenuNav;
