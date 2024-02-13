import PATHS from 'paths';
import { Link } from 'react-router-dom';
import MenuCard from '../MenuCard/MenuCard';

interface MenuNavProps {
    hambugerIsOpen?: boolean;
}

const MenuNav = ({ hambugerIsOpen }: MenuNavProps) => {
    const menu = [
        {
            title: 'Inicio',
            link: `${PATHS.HOME}`,
        },
        {
            title: 'Bolsas',
            link: `${PATHS.PRODUCTS}`,
        },
        {
            title: 'Contato',
            link: `${PATHS.CONTACT}`,
        },
        {
            title: 'A Nineh',
            link: `${PATHS.ABOUT}`,
        },
    ];

    return (
        <nav
            className={`my-transition flex md:fixed md:-right-full md:top-0 md:z-40 md:flex
                    md:h-[100vh] md:w-full md:bg-gray-dark-50 md:p-5
                    ${hambugerIsOpen ? '-translate-x-full' : 'translate-x-0'}`}
        >
            <menu className='flex gap-10 md:flex-col md:justify-start [&_a.active]:border-primary'>
                {menu.map((m) => {
                    return (
                        <li
                            key={m.title}
                            className={`flex ${m.title === 'Bolsas' && 'group'}`}
                        >
                            <Link
                                to={m.link}
                                className='link-nav my-transition self-center font-[700]'
                            >
                                {m.title}
                            </Link>
                            {m.title === 'Bolsas' && (
                                <MenuCard className='absolute right-0 top-full hidden w-screen translate-x-20 group-hover:flex' />
                            )}
                        </li>
                    );
                })}
            </menu>
        </nav>
    );
};

export default MenuNav;
