import styled from "styled-components";

export const Header = styled.header`
    grid-area: center;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: "left center right";
    align-items: center;

    margin-top: ${({ theme }) => theme.sizes.gapx};
    margin-bottom: ${({ theme }) => theme.sizes.gapx};

    text-transform: uppercase;

    & > nav {
        justify-content: center;
    }
`;
export const Logo = styled.img``;
