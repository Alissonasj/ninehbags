import ProductSection from '@components/Product/Section/Section';
import Contact from '@pages/Contact';
import Home from '@pages/Home';
import NotFound from '@pages/NotFound';
import ProductDetails from '@pages/ProductDetails';
import App from 'App';
import PATHS from 'paths';

import {
    Route,
    createBrowserRouter,
    createRoutesFromChildren,
} from 'react-router-dom';

const router = createBrowserRouter(
    createRoutesFromChildren(
        <Route
            path={PATHS.HOME}
            element={<App />}
            errorElement={<NotFound />}
        >
            <Route
                path={PATHS.HOME}
                element={<Home />}
            />
            <Route
                path={PATHS.CONTACT}
                element={<Contact />}
            />
            <Route
                path={PATHS.PRODUCTS}
                element={<ProductSection />}
            />
            <Route
                path={PATHS.PRODUCT_DETAILS}
                element={<ProductDetails />}
            />
            <Route
                path={PATHS.ABOUT}
                element={<h1>Sobre a Nineh</h1>}
            />
        </Route>
    )
);

export default router;
