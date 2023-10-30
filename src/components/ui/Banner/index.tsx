import bannerDesktop from '@assets/imgs/banner_desk.jpg';

import CustomLink from '@components/Link/CustomLink';

const Banner = () => {
    return (
        <div className="h-[43.75rem] 2md:h-[37.5rem] 2sm:h-[31.25rem] relative">
            <img
                src={bannerDesktop}
                className="object-cover object-center w-full h-full"
            />

            <CustomLink
                variant="button"
                children="Novidade"
                className="absolute translate-x-[-50%] translate-y-[-50%] left-[50%] bottom-[5%]"
            />
        </div>
    );
};

export default Banner;
