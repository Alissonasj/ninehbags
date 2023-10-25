import { device } from "@styles/breakPoints";
import styled from "styled-components";

export const Footer = styled.footer`
    grid-area: footer;

    background-color: ${({ theme }) => theme.colors.gray.g900};
`;

export const Container = styled.div`
    padding: 5rem;

    @media (max-width: 768px) {
        padding: 1.25rem;
    }
`;

export const Header = styled.div`
    padding-bottom: 5rem;

    @media ${device.sm} {
        display: flex;
        justify-content: center;
    }
`;

export const Body = styled.div`
    display: flex;
    gap: 1.25rem;
    justify-content: space-between;
    flex-wrap: wrap;

    & > ul:last-child li {        
        flex-direction: row;
    }
`;
