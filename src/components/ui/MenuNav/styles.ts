import styled from "styled-components";

export const MenuNav = styled.nav`
    display: flex;
    gap: ${({ theme }) => theme.sizes.gapx};
    color: ${({ theme }) => theme.colors.gray.g800};
    font-weight: 400;
`;
