import Template from '@styles/Template';
import Banner from '@components/Banner/Banner';
import ProductSection from '@components/Product/Section/Section';

const Home = () => {
    return (
        <>
            <Banner />
            <Template>
                <ProductSection />
            </Template>
        </>
    );
};

export default Home;
