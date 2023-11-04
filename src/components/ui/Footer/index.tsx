import facebook from '@assets/imgs/facebook.svg';
import instagram from '@assets/imgs/instagram.svg';
import whatsappFixed from '@assets/imgs/whatsapp-fixed.svg';
import whatsapp from '@assets/imgs/whatsapp.svg';
import logo from '@assets/imgs/white_logo.svg';
import CustomLink from '@components/CustomLink';

const Footer = () => {
    return (
        <footer className='relative bg-gray-dark-900'>
            <div className='fixed bottom-0 right-0 m-3'>
                <a href='#'>
                    <img
                        src={whatsappFixed}
                        className='h-14 w-14'
                    />
                </a>
            </div>
            <div className='p-20 md:px-5'>
                <div className='justify-center pb-20 sm:flex sm:justify-center'>
                    <img src={logo} />
                </div>

                <div className='flex flex-wrap justify-between gap-5 text-gray-dark-75'>
                    <ul>
                        <li>
                            <h4 className='mb-3 font-bold uppercase'>
                                Nossa Missão
                            </h4>
                        </li>

                        <li className='max-w-xs'>
                            A Nineh nasceu para facilitar a vida das pessoas por
                            meio de bolsas funcionais.
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <h4 className='mb-3 font-bold uppercase'>
                                Duvidas
                            </h4>
                        </li>

                        <CustomLink>
                            <li>Link</li>
                        </CustomLink>

                        <CustomLink>
                            <li>Link</li>
                        </CustomLink>

                        <CustomLink>
                            <li>Link</li>
                        </CustomLink>
                    </ul>

                    <ul>
                        <li>
                            <h4 className='mb-3 font-bold uppercase'>Sobre</h4>
                        </li>

                        <CustomLink>
                            <li>Link</li>
                        </CustomLink>

                        <CustomLink>
                            <li>Link</li>
                        </CustomLink>

                        <CustomLink>
                            <li>Link</li>
                        </CustomLink>
                    </ul>

                    <ul>
                        <li>
                            <h4 className='mb-3 font-bold uppercase'>
                                Redes Sociais
                            </h4>
                        </li>

                        <div className='flex flex-row gap-3'>
                            <CustomLink>
                                <li>
                                    <img
                                        src={whatsapp}
                                        className='h-5 w-5'
                                    />
                                </li>
                            </CustomLink>

                            <CustomLink>
                                <li>
                                    <img
                                        src={instagram}
                                        className='h-5 w-5'
                                    />
                                </li>
                            </CustomLink>

                            <CustomLink>
                                <li>
                                    <img
                                        src={facebook}
                                        className='h-5 w-5'
                                    />
                                </li>
                            </CustomLink>
                        </div>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
