import CustomLink from '@components/Link/CustomLink';

const MenuNav = () => {
    return (
        <nav className='md:hidden'>
            <ul className='flex justify-center gap-5'>
                <CustomLink
                    variant='nav'
                    href='/'
                >
                    <li className='px-[0.625rem] py-[0.3125rem]'>Home</li>
                </CustomLink>

                <CustomLink variant='nav'>
                    <li className='px-[0.625rem] py-[0.3125rem]'>Menu</li>
                </CustomLink>

                <CustomLink variant='nav'>
                    <li className='px-[0.625rem] py-[0.3125rem]'>Contato</li>
                </CustomLink>

                <CustomLink variant='nav'>
                    <li className='px-[0.625rem] py-[0.3125rem]'>A_Nineh</li>
                </CustomLink>
            </ul>
        </nav>
    );
};

export default MenuNav;
