import styled from "styled-components";
import { device } from "./breakPoints";

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 2.5rem 1fr 2.5rem;
    grid-template-rows: auto 1fr;
    grid-template-areas: ". center .";
    height: 100svh;

    @media ${device.xl} {
        grid-template-columns: 1fr 1144px 1fr;
    }

    @media ${device.lg} {
        grid-template-columns: 1fr 79% 1fr;
    }
`;