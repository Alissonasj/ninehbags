import styled from "styled-components";

export const Wrapper = styled.div`
    grid-area: main;
    margin: 2.5rem 0;
`;

export const ProductSection = styled.section`
    display: grid;
    grid-template-columns: 1fr 30rem;
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

export const TechnicalInfoSection = styled.section`
    margin-top: 2.5rem;
`;

export const TechnicalInfoTitle = styled.h5`
    margin-bottom: 1rem;
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.text.md};
`;

export const TechnicalInfoList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-size: ${({theme}) => theme.text.sm};
`;

export const TechnicalInfoItem = styled.li`
    list-style: disc;
    margin-left: 1rem;
`;

export const HistorySection = styled.section`
    margin-top: 2.5rem;

    & > .div-1 {
        display: flex;
        align-items: center;
        gap: 1.25rem;
    }
`;
