import { GlobalStyles } from "@styles/GlobalStyles.ts";
import { DefaultTheme } from "@theme/defaultTheme.ts";
import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ThemeProvider theme={DefaultTheme}>
            <GlobalStyles />
            <App />
        </ThemeProvider>
    </React.StrictMode>    
);
