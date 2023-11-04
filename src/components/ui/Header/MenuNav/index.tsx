import CustomLink from '@components/CustomLink';
import { twMerge } from 'tailwind-merge';

interface MenuNavProps {
    className?: string;
}

const MenuNav = ({ className }: MenuNavProps) => {
    return (
        <nav className={twMerge('', className)}>
            <menu className='flex justify-center gap-5'>
                <CustomLink
                    href='/'
                    variant='nav'
                >
                    <li className='px-[0.625rem] py-[0.3125rem]'>Home</li>
                </CustomLink>

                <CustomLink variant='nav'>
                    <li className='px-[0.625rem] py-[0.3125rem]'>Menu</li>
                </CustomLink>

                <CustomLink
                    href='/contact'
                    variant='nav'
                >
                    <li className='px-[0.625rem] py-[0.3125rem]'>Contato</li>
                </CustomLink>

                <CustomLink variant='nav'>
                    <li className='px-[0.625rem] py-[0.3125rem]'>A_Nineh</li>
                </CustomLink>
            </menu>
        </nav>
    );
};

export default MenuNav;
