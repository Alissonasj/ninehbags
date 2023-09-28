import bannerDesktop from "@assets/imgs/banner_desk.jpg";
import LinkButton from "@components/form/LinkButton";
import * as S from "./styles";

const Banner = () => {
    return (
        <S.Banner>
            <S.BannerImg src={bannerDesktop} />
            <LinkButton children="Novidade" />
        </S.Banner>
    );
};

export default Banner;
