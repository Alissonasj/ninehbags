import styled from "styled-components";

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 5rem 1fr 5rem;
    grid-template-areas:
        ". header ."
        "banner banner banner"
        ". main ."
        "footer footer footer";

    height: 100svh;

    @media (max-width: 768px) {
        grid-template-columns: 1.25rem 1fr 1.25rem;
    }
`;
