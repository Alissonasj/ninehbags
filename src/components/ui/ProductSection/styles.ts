import styled from "styled-components";

export const ProductSection = styled.section`
    grid-area: main;

    margin-top: 6.25rem;
    margin-inline: 13.125rem;
    display: grid;
    grid-column-gap: 1.25rem;
    grid-row-gap: 2.5rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 460px));
    & > nav {
        margin-bottom: 2.5rem;
    }
`;

export const GridProductSection = styled.div