import logo from '@assets/imgs/black_logo.svg';
import { Squash as Hamburger } from 'hamburger-react';
import LinkPath from 'link-path';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuNavDesktop from './MenuNav/Desktop/NavDesktop';
import MenuNavMobile from './MenuNav/Mobile/NavMobile';

const Header = () => {
    const [hambugerIsOpen, setHambugerOpen] = useState(false);

    return (
        <header className='sticky top-0 z-50 h-32 border-b-[1px] bg-gray-dark-50'>
            <div className='flex justify-between px-20 md:place-items-center md:px-5'>
                <Link
                    to={LinkPath.HOME}
                    className='py-5'
                >
                    <img src={logo} />
                </Link>

                <span className='z-40 hidden text-gray-dark-700 md:block'>
                    <Hamburger
                        toggle={setHambugerOpen}
                        toggled={hambugerIsOpen}
                    />
                </span>

                <MenuNavDesktop />

                <MenuNavMobile hambugerIsOpen={hambugerIsOpen} />
            </div>
        </header>
    );
};

export default Header;
