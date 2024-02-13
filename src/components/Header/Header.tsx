import logo from '@assets/imgs/black_logo.svg';
import { Squash as Hamburger } from 'hamburger-react';
import PATHS from 'paths';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuNav from './MenuNav/MenuNav';

const Header = () => {
    const [hambugerIsOpen, setHambugerIsOpen] = useState(false);

    return (
        <header className='sticky top-0 z-50 border-b-[1px] bg-gray-dark-50 px-20 py-5 md:px-5'>
            <div className='flex justify-between md:items-start'>
                <Link to={PATHS.HOME}>
                    <img src={logo} />
                </Link>

                <div className='relative z-50 hidden text-gray-dark-700 md:block'>
                    <Hamburger
                        toggle={setHambugerIsOpen}
                        toggled={hambugerIsOpen}
                    />
                </div>

                <MenuNav hambugerIsOpen={hambugerIsOpen} />
            </div>
        </header>
    );
};

export default Header;
