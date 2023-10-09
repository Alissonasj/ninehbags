import { Grid } from "@styles/Grid";
import Banner from "@ui/Banner";
import Footer from "@ui/Footer";
import Header from "@ui/Header";
import ProductSection from "@ui/ProductSection";

function App() {
    return (
        <Grid>
            <Header />
            <Banner />
            <ProductSection />
            <Footer />
        </Grid>
    );
}

export default App;
