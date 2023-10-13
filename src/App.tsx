import Home from "@pages/home";
import { Grid } from "@styles/Grid";
import Footer from "@ui/Footer";
import Header from "@ui/Header";

function App() {
    return (
        <>
            <Grid>
                <Header />
                <Home />
                <Footer />
            </Grid>
        </>
    );
}

export default App;
