import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`    


    @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url("../../src/assets/fonts/Montserrat-Regular.woff2") format("woff2")
    }

    @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url("../../src/assets/fonts/Montserrat-Medium.woff2") format("woff2")
    }

    @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url("../../src/assets/fonts/Montserrat-SemiBold.woff2") format("woff2")
    }

    @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url("../../src/assets/fonts/Montserrat-Bold.woff2") format("woff2")
    }

    body {
        font-family: ${({ theme }) => theme.fonts.primary};
        background-color: ${({ theme }) => theme.colors.gray.g50};
    }
    
    * {
        margin: 0;
        padding: 0;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    button {
        background: none;
        border: none;
        outline: none;
        cursor: pointer;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    ul {
        list-style-type: none;
    }

    img {                
        display: block;
        width: 100%;
    }

    table {
        width: 100%;
        border-collapse: collapse;
    }
`;
