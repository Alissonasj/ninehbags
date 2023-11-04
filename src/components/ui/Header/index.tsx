import logo from '@assets/imgs/black_logo.svg';
import MenuNav from './MenuNav';

const Header = () => {
    return (
        <header className='sticky top-0 z-50 border-b-[1px] bg-gray-dark-50 px-20 py-5 md:px-5'>
            <div className='flex items-center justify-between'>
                <img src={logo} />

                <MenuNav className='md:hidden' />
            </div>
        </header>
    );
};

export default Header;
