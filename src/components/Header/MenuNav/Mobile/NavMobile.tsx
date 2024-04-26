import LinkPath from 'link-path';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import MenuNavDrawer from './Drawer';

interface MenuNavMobileProps {
    hambugerIsOpen: boolean;
}

const MenuNavMobile = ({ hambugerIsOpen }: MenuNavMobileProps) => {
    const [menuDrowerIsOpen, setMenuDrowerOpen] = useState(false);

    hambugerIsOpen
        ? (document.body.style.overflow = 'hidden')
        : (document.body.style.overflow = 'auto');

    return (
        <div
            className={twMerge(
                'my-transition fixed right-0 top-32 hidden h-[calc(100%-8rem)] w-full translate-x-full bg-gray-dark-50 md:grid',
                `${hambugerIsOpen && 'translate-x-0'}`
            )}
        >
            <div>
                <nav>
                    <menu className='flex flex-col gap-5'>
                        <li className='flex'>
                            <Link
                                to={LinkPath.HOME}
                                className='link-nav my-transition flex w-full justify-between self-center bg-gray-dark-200 p-5 font-[700]'
                            >
                                Início
                            </Link>
                        </li>

                        <li className='flex'>
                            <button
                                onClick={() =>
                                    setMenuDrowerOpen(!menuDrowerIsOpen)
                                }
                                className='link-nav my-transition flex w-full justify-between self-center bg-gray-dark-200 p-5 font-[700]'
                            >
                                Bolsas
                                <p>Icone</p>
                            </button>

                            <MenuNavDrawer
                                menuDrowerClose={setMenuDrowerOpen}
                                menuDrowerIsOpen={menuDrowerIsOpen}
                            />
                        </li>

                        <li className='flex'>
                            <Link
                                to={LinkPath.CONTACT}
                                className='link-nav my-transition flex w-full justify-between self-center bg-gray-dark-200 p-5 font-[700]'
                            >
                                Contato
                            </Link>
                        </li>

                        <li className='flex'>
                            <Link
                                to={LinkPath.ABOUT}
                                className='link-nav my-transition flex w-full justify-between self-center bg-gray-dark-200 p-5 font-[700]'
                            >
                                A Nineh
                            </Link>
                        </li>
                    </menu>
                </nav>
            </div>
            <div className='self-end'>RODAPE</div>
        </div>
    );
};

export default MenuNavMobile;
