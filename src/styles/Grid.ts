import styled from "styled-components";
import { device } from "./breakPoints";

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 2.5rem 1fr 2.5rem;
    grid-template-areas:
        ". center ."
        "banner banner banner";
    grid-template-rows: auto 1fr;
    height: 100svh;

    @media ${device.md} {
        grid-template-columns: 1.25rem 1fr 1.25rem;
    }
`;
