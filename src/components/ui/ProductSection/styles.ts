import { device } from "@styles/breakPoints";
import styled from "styled-components";

export const ProductSection = styled.section`
    grid-area: main;
    justify-self: center;

    width: 100%;
    margin: 6.25rem 0;

    & > ul {
        margin-bottom: 2.5rem;
    }
`;

export const GridProductSection = styled.div`
    display: grid;
    grid-column-gap: 1.25rem;
    grid-row-gap: 2.5rem;
    grid-template-columns: repeat(4, 1fr);

    @media (max-width: 1100px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media ${device.sm} {
        grid-template-columns: repeat(2, 1fr);
    }

    @media ${device.xs} {
        grid-template-columns: 1fr;
    }
`;
