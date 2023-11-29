import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import { Outlet } from 'react-router-dom';

function App() {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default App;
