import ProductSection from '@components/Product/Section/Section';
import Contact from '@pages/Contact';
import Home from '@pages/Home';
import NotFound from '@pages/NotFound';
import ProductDetails from '@pages/ProductDetails';
import App from 'App';
import LinkPath from 'link-path';

import {
    Route,
    createBrowserRouter,
    createRoutesFromChildren,
} from 'react-router-dom';

const router = createBrowserRouter(
    createRoutesFromChildren(
        <Route
            path={LinkPath.HOME}
            element={<App />}
            errorElement={<NotFound />}
        >
            <Route
                path={LinkPath.HOME}
                element={<Home />}
            />

            <Route
                path={LinkPath.CONTACT}
                element={<Contact />}
            />

            <Route
                path={LinkPath.PRODUCTS}
                element={<ProductSection />}
            />

            <Route
                path={LinkPath.PRODUCT_DETAILS}
                element={<ProductDetails />}
            />
            
            <Route
                path={LinkPath.ABOUT}
                element={<h1>Sobre a Nineh</h1>}
            />
        </Route>
    )
);

export default router;
