import Banner from '@components/Banner/Banner';
import Template from '@styles/Template';

const Home = () => {
    return (
        <>
            <Banner />

            <Template>
                <h1 className='py-10 text-center text-7xl'>
                    Página de destaques
                </h1>
            </Template>
        </>
    );
};

export default Home;
