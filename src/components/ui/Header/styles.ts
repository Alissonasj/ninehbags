import { device } from "@styles/breakPoints";
import styled from "styled-components";

export const Header = styled.header`
    grid-area: header;
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: "left center right";
    align-items: center;

    background-color: ${({ theme }) => theme.colors.gray.g50};
    margin-top: ${({ theme }) => theme.spacing.gapx};
    margin-bottom: ${({ theme }) => theme.spacing.gapx};

    & > nav {
        @media ${device.md} {
            grid-area: right;
        }
    }

    padding-inline: 5rem;

    @media (max-width: 768px) {
        padding-inline: 1.25rem;
    }
`;

export const Logo = styled.img`
    width: auto;
`;
