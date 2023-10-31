import bannerDesktop from '@assets/imgs/banner_desk.jpg';

import CustomLink from '@components/Link/CustomLink';

const Banner = () => {
    return (
        <div className='relative h-[43.75rem] 2md:h-[37.5rem] 2sm:h-[31.25rem]'>
            <img
                src={bannerDesktop}
                className='h-full w-full object-cover object-center'
            />

            <CustomLink
                variant='button'
                children='Novidade'
                className='absolute bottom-[5%] left-[50%] translate-x-[-50%] translate-y-[-50%]'
            />
        </div>
    );
};

export default Banner;
