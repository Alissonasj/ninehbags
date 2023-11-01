import logo from '@assets/imgs/black_logo.svg';
import MenuNav from './MenuNav';

const Header = () => {
    return (
        <header className='px-20 py-5 md:px-5 border-b-[1px]'>
            <div className='flex items-center justify-between'>
                <img
                    src={logo}
                />
                
                <MenuNav />
            </div>
        </header>
    );
};

export default Header;
