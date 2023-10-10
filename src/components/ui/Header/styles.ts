import { device } from "@styles/breakPoints";
import styled from "styled-components";

export const Header = styled.header`
    grid-area: header;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: "left center right";
    align-items: center;
    
    background-color: ${({theme}) => theme.colors.gray.g50};
    margin-top: ${({ theme }) => theme.spacing.gapx};
    margin-bottom: ${({ theme }) => theme.spacing.gapx};

    & > nav {
        @media ${device.md} {
            grid-area: right;
        }
    }
`;

export const Logo = styled.img`
    width: auto;
`;
