import styled from "styled-components";

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 2.5rem 1fr 2.5rem;
    grid-template-rows: auto 1fr;
    grid-template-areas: ". center .";
    height: 100svh;
`;