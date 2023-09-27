import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    grid-area: center;
    padding-top: ${({theme}) => theme.sizes.gapx};
    padding-bottom: ${({theme}) => theme.sizes.gapx};
`
export const Logo = styled.img``