import bannerDesktop from '@assets/imgs/banner_desk.jpg';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='relative h-[43.75rem] x-md:h-[37.5rem] s-sm:h-[31.25rem]'>
            <img
                src={bannerDesktop}
                className='h-full w-full object-cover object-center'
            />

            <Link
                to='#'
                className='link-button absolute bottom-[5%] left-[50%] translate-x-[-50%] translate-y-[-50%] hover:bg-gray-dark-800'
            >
                Novidade
            </Link>
        </div>
    );
};

export default Banner;
