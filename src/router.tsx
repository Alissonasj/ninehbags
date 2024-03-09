import ProductSection from '@components/Product/Section/Section';
import Contact from '@pages/Contact';
import Home from '@pages/Home';
import NotFound from '@pages/NotFound';
import ProductDetails from '@pages/ProductDetails';
import App from 'App';
import LINK_PATH from 'link-path';

import {
    Route,
    createBrowserRouter,
    createRoutesFromChildren,
} from 'react-router-dom';

const router = createBrowserRouter(
    createRoutesFromChildren(
        <Route
            path={LINK_PATH.HOME}
            element={<App />}
            errorElement={<NotFound />}
        >
            <Route
                path={LINK_PATH.HOME}
                element={<Home />}
            />
            <Route
                path={LINK_PATH.CONTACT}
                element={<Contact />}
            />
            <Route
                path={LINK_PATH.PRODUCTS}
                element={<ProductSection />}
            />
            <Route
                path={LINK_PATH.PRODUCT_DETAILS}
                element={<ProductDetails />}
            />
            <Route
                path={LINK_PATH.ABOUT}
                element={<h1>Sobre a Nineh</h1>}
            />
        </Route>
    )
);

export default router;
