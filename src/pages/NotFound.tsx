import LINK_PATH from 'link-path';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <>
            <h1 className='mb-10'>Página não encontrada</h1>
            <Link
                to={LINK_PATH.HOME}
                className='link-button'
            >
                Inicio
            </Link>
        </>
    );
};

export default NotFound;
