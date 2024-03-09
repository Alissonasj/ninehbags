import logo from '@assets/imgs/black_logo.svg';
import { Squash as Hamburger } from 'hamburger-react';
import LINK_PATH from 'link-path';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuNavDesktop from './MenuNav/Desktop/NavDesktop';
import MenuNavMobile from './MenuNav/Mobile/NavMobile';

const Header = () => {
    const [hambugerIsOpen, setHambugerIsOpen] = useState(false);

    return (
        <header className='sticky top-0 z-50 border-b-[1px] bg-gray-dark-50 px-20 py-5 md:px-5'>
            <div className='flex justify-between md:items-start'>
                <Link to={LINK_PATH.HOME}>
                    <img src={logo} />
                </Link>

                <div className='relative z-50 hidden text-gray-dark-700 md:block'>
                    <Hamburger
                        toggle={setHambugerIsOpen}
                        toggled={hambugerIsOpen}
                    />
                </div>

                <MenuNavDesktop />
                <MenuNavMobile
                    hambugerIsOpen={hambugerIsOpen}                    
                />
            </div>
        </header>
    );
};

export default Header;
