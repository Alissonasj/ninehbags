import img from '@assets/imgs/product.jpg';
import LinkPath from 'link-path';
import { Link } from 'react-router-dom';

const MenuNavList = () => {
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
        <div className='absolute right-0 top-full hidden w-[calc(100vw-15px)] translate-x-[310px] bg-white pt-10 group-hover:flex'>
            <div className='flex grow flex-col gap-[10%]'>
                <div className='flex grow justify-between px-20'>
                    {menu.map((m) => {
                        return (
                            <ul key={m.title}>
                                <li className='space-y-2'>
                                    <h4 className='mb-4 font-[700]'>
                                        {m.title}
                                    </h4>
                                    {m.items.map((i) => {
                                        return (
                                            <Link
                                                to={i.link}
                                                key={i.name}
                                                className='link-nav my-transition block py-1'
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

                <Link
                    to={LinkPath.PRODUCTS}
                    className='bg-gray-200 py-3 pl-20 font-[700]'
                >
                    Todas as bolsas
                </Link>
            </div>

            <div className='max-w-80 justify-self-end'>
                <img src={img} />
            </div>
        </div>
    );
};

export default MenuNavList;
