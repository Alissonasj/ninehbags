import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body {
        font-family: "Montserrat", sans-serif;
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
        max-width: 100%;
        display: block;
    }

    table {
        width: 100%;
        border-collapse: collapse;
    }
`;
