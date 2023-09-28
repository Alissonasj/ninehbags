import { device } from "@styles/breakPoints";
import styled from "styled-components";

export const Banner = styled.div`
    grid-area: banner;
    grid-row: 2;
    height: 700px;
    position: relative;

    @media ${device.md} {
        height: 600px;
    }

    & > a {
        position: absolute;
        transform: translate(-50%, -50%);
        left: 50%;
        bottom: 5%;
    }
`;

export const BannerImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
`;
