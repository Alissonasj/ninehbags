import Banner from '@components/Banner/Banner';
import MenuCard from '@components/Header/MenuCard/MenuCard';
import Template from '@styles/Template';

const Home = () => {
    return (
        <>
            <Banner />
            <Template>
                <h1 className='py-10 text-center text-7xl'>
                    Página de destaques
                </h1>
                <MenuCard />
            </Template>
        </>
    );
};

export default Home;
