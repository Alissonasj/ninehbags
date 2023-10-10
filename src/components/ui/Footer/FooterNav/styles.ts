import styled from "styled-components";

export const MenuList = styled.ul``;

export const MenuItem = styled.li`
    color: ${({ theme }) => theme.colors.gray.g300};
    font-weight: 400;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    max-width: 60ch;

    & > a {
        color: ${({ theme }) => theme.colors.gray.g300};
    }
`;

export const MenuTitle = styled.h4`
    color: ${({ theme }) => theme.colors.gray.g600};
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 1.25rem;
`;
