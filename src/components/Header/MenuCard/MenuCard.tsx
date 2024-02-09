import { Link } from 'react-router-dom';
import img from '@assets/imgs/product.jpg';

const MenuCard = () => {
    return (
        <div className='grid w-full grid-cols-2 bg-white'>
            <div className='flex justify-center space-x-10 p-5'>
                <div className='space-y-2'>
                    <h4 className='mb-4 font-[700]'>Modelo</h4>
                    <Link
                        to={'#'}
                        className='block py-1 font-[500]'
                    >
                        Love
                    </Link>
                    <Link
                        to={'#'}
                        className='block py-1 font-[500]'
                    >
                        Baguete
                    </Link>
                    <Link
                        to={'#'}
                        className='block py-1 font-[500]'
                    >
                        Moon
                    </Link>
                </div>
                <div className='space-y-2'>
                    <h4 className='mb-4 font-[700]'>Cor</h4>
                    <Link
                        to={'#'}
                        className='block py-1 font-[500]'
                    >
                        Preta
                    </Link>
                    <Link
                        to={'#'}
                        className='block py-1 font-[500]'
                    >
                        Branca
                    </Link>
                    <Link
                        to={'#'}
                        className='block py-1 font-[500]'
                    >
                        Marron
                    </Link>
                </div>
                <div className='space-y-2'>
                    <h4 className='mb-4 font-[700]'>Tamanho</h4>
                    <Link
                        to={'#'}
                        className='block py-1 font-[500]'
                    >
                        Pequena
                    </Link>
                    <Link
                        to={'#'}
                        className='block py-1 font-[500]'
                    >
                        Média
                    </Link>
                    <Link
                        to={'#'}
                        className='block py-1 font-[500]'
                    >
                        Grande
                    </Link>
                </div>
            </div>
            <div className='w-64 justify-self-end'>
                <img src={img} />
            </div>
        </div>
    );
};

export default MenuCard;
