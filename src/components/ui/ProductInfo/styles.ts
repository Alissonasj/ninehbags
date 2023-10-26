import styled from "styled-components";

export const ProductInfoContainer = styled.div``;

export const ProductInfoName = styled.h3``;

export const ProductInfoPrice = styled.span``;

export const ProductCharacteristics = styled.div``;

export const ChacteristicsTitle = styled.h5`
    margin-bottom: 1rem;
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.text.md};
`;

export const ChacteristicsList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-size: ${({ theme }) => theme.text.sm};
`;

export const ChacteristicsItem = styled.li`
    list-style: disc;
    margin-left: 1rem;
`;
