import { device } from "@styles/breakPoints";
import styled from "styled-components";

export const ProductSection = styled.section`
    grid-area: main;
    justify-self: center;

    width: 90%;
    margin-top: 6.25rem;

    & > ul {
        margin-bottom: 2.5rem;        
    }
`;

export const GridProductSection = styled.div`
    display: grid;
    grid-column-gap: 1.25rem;
    grid-row-gap: 2.5rem;
    grid-template-columns: repeat(auto-fit, minmax(23rem, 1fr));    

    @media ${device.md} {
        grid-template-columns: repeat(auto-fit, minmax(16.5rem, 1fr));
    }
`;
