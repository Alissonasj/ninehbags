import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const LinkNav = styled(NavLink)`
    font-size: ${({ theme }) => theme.text.lg};
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray.g800};

    /* &.active {
        border: 1px solid red;
    } */
`;

export const LinkGeneric = styled(Link)`
    font-size: ${({ theme }) => theme.text.lg};
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray.g800};
`;

export const LinkButton = styled(Link)`
    font-weight: 600;
    font-size: ${({ theme }) => theme.text.lg};
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.gray.g50};

    padding-inline: ${({ theme }) => theme.spacing.button.lg_px};
    padding-top: ${({ theme }) => theme.spacing.button.lg_py};
    padding-bottom: ${({ theme }) => theme.spacing.button.lg_py};
    background-color: ${({ theme }) => theme.colors.gray.g900};
    border-radius: ${({ theme }) => theme.radius.sm};
`;
