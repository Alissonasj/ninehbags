import * as S from "@styles/Template";
import Footer from "@ui/Footer";
import Header from "@ui/Header";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <>    
            <S.Grid>
                <Header />
                <Outlet />
                <Footer />
            </S.Grid>
        </>
    );
}

export default App;
