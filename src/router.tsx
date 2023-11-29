import Contact from '@pages/Contact';
import Home from '@pages/Home';
import NotFound from '@pages/NotFound';
import ProductDetails from '@pages/ProductDetails';
import App from 'App';

import {
    Route,
    createBrowserRouter,
    createRoutesFromChildren,
} from 'react-router-dom';

const router = createBrowserRouter(
    createRoutesFromChildren(
        <Route
            path='/'
            element={<App />}
            errorElement={<NotFound />}
        >
            <Route
                path='/'
                element={<Home />}
            />
            <Route
                path='product/:productId'
                element={<ProductDetails />}
            />
            <Route
                path='contact'
                element={<Contact />}
            />
        </Route>
    )
);

export default router;
