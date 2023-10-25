import { GlobalStyles } from "@styles/GlobalStyles.ts";
import { DefaultTheme } from "@theme/defaultTheme.ts";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "router.tsx";
import { ThemeProvider } from "styled-components";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ThemeProvider theme={DefaultTheme}>
            <GlobalStyles />
            <RouterProvider router={router} />
        </ThemeProvider>
    </React.StrictMode>
);
