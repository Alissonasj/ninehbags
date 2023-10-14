import styled from "styled-components";

export const Wrapper = styled.div`
    grid-area: main;
    margin: 2.5rem 0;
`;

export const ProductSection = styled.section`
    display: grid;
    grid-template-columns: 1fr 25rem;
    column-gap: 2.5rem;
`;

export const Gallery = styled.div``;

export const GridGalleryList = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem;
    justify-items: center;
`;

export const GalleryItem = styled.li`
    max-width: 500px;
`;

export const GalleryImg = styled.img``;

export const ProductInfoWrapper = styled.div`
    padding: 20px; //
`;
