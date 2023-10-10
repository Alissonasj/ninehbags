import styled from "styled-components";

export const ProductMenuList = styled.ul`
    display: flex;
    justify-content: center;
    gap: 1.25rem;
`;

export const ProductMenuItem = styled.li`
    padding-inline: ${({ theme }) => theme.spacing.link.sm_px};
    padding-top: ${({ theme }) => theme.spacing.link.sm_py};
    padding-bottom: ${({ theme }) => theme.spacing.link.sm_py};
`;