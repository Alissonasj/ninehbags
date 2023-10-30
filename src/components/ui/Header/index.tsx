import logo from '@assets/imgs/black_logo.svg';
import MenuNav from './MenuNav';

const Header = () => {
    return (
        <header className="px-10 py-5 md:px-5">
            <div className="flex items-center justify-between">
                <img
                    className="w-auto"
                    src={logo}
                />
                <MenuNav />
            </div>
        </header>
    );
};

export default Header;
