import LinkPath from 'link-path';
import { NavLink } from 'react-router-dom';
import MenuCard from './NavList';

const MenuNavDesktop = () => {
    const menu = [
        {
            title: 'Inicio',
            link: `${LinkPath.HOME}`,
        },
        {
            title: 'Bolsas',
            link: `${LinkPath.PRODUCTS}`,
        },
        {
            title: 'Contato',
            link: `${LinkPath.CONTACT}`,
        },
        {
            title: 'A Nineh',
            link: `${LinkPath.ABOUT}`,
        },
    ];

    return (
        <nav className='my-transition flex md:hidden'>
            <menu className='flex gap-10 [&_a.active]:border-primary'>
                {menu.map((m) => {
                    return (
                        <li
                            key={m.title}
                            className={`flex ${m.title === 'Bolsas' && 'group relative'}`}
                        >
                            <NavLink
                                to={m.link}
                                className='link-nav my-transition self-center font-[700]'
                            >
                                {m.title}
                            </NavLink>

                            {m.title === 'Bolsas' && <MenuCard />}
                        </li>
                    );
                })}
            </menu>
        </nav>
    );
};

export default MenuNavDesktop;
