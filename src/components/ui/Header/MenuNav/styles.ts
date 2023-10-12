import styled from "styled-components";

export const MenuNav = styled.nav`
    @media (max-width: 768px) { // Implementar menu hamburger
        display: none;
    }
`;

export const MenuList = styled.ul`
    display: flex;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.gapx};
`;

export const MenuItem = styled.li`
    padding-inline: ${({ theme }) => theme.spacing.link.sm_px};
    padding-top: ${({ theme }) => theme.spacing.link.sm_py};
    padding-bottom: ${({ theme }) => theme.spacing.link.sm_py};
`;
