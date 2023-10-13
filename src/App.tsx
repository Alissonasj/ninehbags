import ProductPage from "@pages/ProductPage/product";
import { Grid } from "@styles/Grid";
import Footer from "@ui/Footer";
import Header from "@ui/Header";

function App() {
    return (
        <>
            <Grid>
                <Header />
                <ProductPage />
                <Footer />
            </Grid>
        </>
    );
}

export default App;
