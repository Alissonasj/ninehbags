import { Grid } from "@styles/Grid";
import Footer from "@ui/Footer";
import Header from "@ui/Header";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <>
            <Grid>
                <Header />
                <Outlet />
                <Footer />
            </Grid>
        </>
    );
}

export default App;
