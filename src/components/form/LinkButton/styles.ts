import styled from "styled-components";

export const LinkButton = styled.a`
    background-color: ${({ theme }) => theme.colors.gray.g800};
    color: ${({ theme }) => theme.colors.gray.g75};
    font-weight: 700;
    text-transform: uppercase;
    padding: ${({ theme }) => theme.sizes.paddingbutton};
    border-radius: ${({ theme }) => theme.sizes.radius};
`;
