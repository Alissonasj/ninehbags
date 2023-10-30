import ProductPage from '@pages/ProductPage';
import Home from '@pages/home';
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
            errorElement={<h1>Ainda vou impletar a página de erro ^^'</h1>}
        >
            <Route
                path="/"
                element={<Home />}
                // loader={getProducts} // recupera os dados da função com o hook useLoaderData na rota
            />
            <Route
                path="product/:productId"
                element={<ProductPage />}
                // loader={getProducts}
            />
        </Route>
    )
);

export default router;
