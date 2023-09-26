import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

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
        max-width: 100%;
        display: block;
    }

    table {
        width: 100%;
        border-collapse: collapse;
    }
`;
