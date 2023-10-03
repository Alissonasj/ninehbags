import styled from "styled-components";

export const LinkNav = styled.a`
    font-size: ${({ theme }) => theme.text.px18};
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray.g800};
`;

export const LinkButton = styled.a`
    font-weight: 600;
    font-size: ${({ theme }) => theme.text.px18};
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.gray.g50};

    padding-inline: ${({ theme }) => theme.spacing.paddingx};
    padding-top: ${({ theme }) => theme.spacing.paddingy};
    padding-bottom: ${({ theme }) => theme.spacing.paddingy};
    background-color: ${({ theme }) => theme.colors.gray.g800};
    border-radius: ${({ theme }) => theme.spacing.radius};
`;
