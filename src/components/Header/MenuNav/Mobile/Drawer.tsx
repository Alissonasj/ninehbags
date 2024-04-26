import img from '@assets/imgs/product.jpg';
import LinkPath from 'link-path';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

interface MenuDrawerProps {
    menuDrowerClose: React.Dispatch<React.SetStateAction<boolean>>;
    menuDrowerIsOpen: boolean;
}

const MenuNavDrawer = ({
    menuDrowerIsOpen,
    menuDrowerClose,
}: MenuDrawerProps) => {
    const menu = [
        {
            title: 'Modelo',
            items: [
                { name: 'Love', link: '#' },
                { name: 'Moon', link: '#' },
                { name: 'Baguete', link: '#' },
            ],
        },
        {
            title: 'Cor',
            items: [
                { name: 'Branca', link: '#' },
                { name: 'Preta', link: '#' },
                { name: 'Marron', link: '#' },
            ],
        },
        {
            title: 'Tamanho',
            items: [
                { name: 'Pequena', link: '#' },
                { name: 'Média', link: '#' },
                { name: 'Grande', link: '#' },
            ],
        },
    ];

    return (
        <div
            className={twMerge(
                'my-transition fixed top-0 flex h-full w-full  translate-x-full flex-col bg-white',
                `${menuDrowerIsOpen && 'translate-x-0'}`
            )}
        >
            <button
                onClick={() => menuDrowerClose(!menuDrowerClose)}
                className='bg-gray-200 py-3 pl-20 font-[700]'
            >
                Voltar
            </button>

            <div className='grow overflow-y-scroll'>
                <div className='px-5'>
                    {menu.map((m) => {
                        return (
                            <ul key={m.title}>
                                <li className='mb-5 space-y-2'>
                                    <h4 className='mb-4 font-[700]'>
                                        {m.title}
                                    </h4>
                                    {m.items.map((i) => {
                                        return (
                                            <Link
                                                to={i.link}
                                                key={i.name}
                                                className='link-nav my-transition block'
                                            >
                                                {i.name}
                                            </Link>
                                        );
                                    })}
                                </li>
                            </ul>
                        );
                    })}
                </div>
            </div>

            <Link
                to={LinkPath.PRODUCTS}
                className='bg-gray-200 py-3 pl-5 font-[700]'
            >
                Todas as bolsas
            </Link>

            <div className='max-w-80 justify-self-end'>
                <img src={img} />
            </div>
        </div>
    );
};

export default MenuNavDrawer;
