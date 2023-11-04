
import Contact from '@pages/contact';
import Home from '@pages/home';
import NotFound from '@pages/notFound';
import ProductDetails from '@pages/productDetails';
import App from 'App';

import {
    Route,
    createBrowserRouter,
    createRoutesFromChildren,
} from 'react-router-dom';

const router = createBrowserRouter(
    createRoutesFromChildren(
        <Route
            path="/"
            element={<App />}
            errorElement={<NotFound />}
        >
            <Route
                path="/"
                element={<Home />}
                // loader={getProducts} // recupera os dados da função com o hook useLoaderData na rota
            />
            <Route
                path="product/:productId"
                element={<ProductDetails />}
                // loader={getProducts}
            />
            <Route
                path="/contact"
                element={<Contact />}
                // loader={getProducts}
            />
        </Route>
    )
);

export default router;
