import logo from '@assets/imgs/black_logo.svg';
import { Squash as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import MenuNav from './MenuNav/MenuNav';

const Header = () => {
    const [hambugerIsOpen, setHambugerIsOpen] = useState(false);

    return (
        <header className='sticky top-0 z-50 border-b-[1px] bg-gray-dark-50 px-20 py-5 md:px-5'>
            <div className='flex items-center justify-between md:items-start'>
               
                <img src={logo} />
             
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
