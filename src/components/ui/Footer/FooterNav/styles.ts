import styled from "styled-components";

export const MenuList = styled.ul``;

export const MenuItem = styled.li`
   
    font-weight: 400;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    max-width: 60ch;

    & > a {
       
    }
`;

export const MenuTitle = styled.h4`
   
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 1.25rem;
`;
