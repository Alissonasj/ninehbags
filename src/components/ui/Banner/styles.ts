import { device } from "@styles/breakPoints";
import styled from "styled-components";

export const Banner = styled.div`
    grid-area:  banner;

    height: 700px;
    position: relative;

    @media ${device.md} {
        height: 600px;
    }

    @media ${device.sm} {
        height: 500px;
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
