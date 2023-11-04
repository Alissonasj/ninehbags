import CustomLink from '@components/CustomLink';

const NotFound = () => {
    return (
        <>
            <h1 className='mb-10'>Página não encontrada</h1>
            <CustomLink href='/' variant='button'>Inicio</CustomLink>
        </>
    );
};

export default NotFound;
