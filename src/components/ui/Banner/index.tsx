import bannerDesktop from "@assets/imgs/banner_desk.jpg";

import { Link } from "@components/Link";
import * as S from "./styles";

const Banner = () => {
    return (
        <S.Banner>
            <S.BannerImg src={bannerDesktop} />
            <Link.Button children="Novidade" />
        </S.Banner>
    );
};

export default Banner;
