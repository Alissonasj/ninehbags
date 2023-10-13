import styled from "styled-components";

export const Wrapper = styled.div`
    grid-area: main;
    height: 100svh;
`;

export const ProductSection = styled.section`
    display: grid;
    grid-template-columns: 1fr 400px;
    column-gap: 2.5rem;
    height: 100%; //remover
`;

export const Gallery = styled.div`
    background-color: gray;//
`;

export const GridGalleryList = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem;
    height: 100%; //
`;

export const GalleryItem = styled.li`   
    background-color: yellow;//    
`;

export const ProductInfoWrapper = styled.div`
    background-color: brown;//
    padding: 20px;//
`;

export const ProdcutInfo = styled.div`
    background-color: green; //
    height: 100%; //
`;
