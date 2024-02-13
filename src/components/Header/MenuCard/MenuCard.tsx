import img from '@assets/imgs/product.jpg';
import PATHS from 'paths';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

interface MenuCardProps extends React.HTMLAttributes<HTMLDivElement> {}

const MenuCard = ({ className }: MenuCardProps) => {
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
        <div className={twMerge('flex flex-col bg-white pt-10', className)}>
            <div className='flex gap-[10%]'>
                <div className='ml-24 flex grow justify-between'>
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

                <div className='max-w-80 justify-self-end'>
                    <img src={img} />
                </div>
            </div>

            <Link
                to={PATHS.PRODUCTS}
                className='bg-gray-200 py-3 pl-24 font-[700]'
            >
                Todas as bolsas
            </Link>
        </div>
    );
};

export default MenuCard;
