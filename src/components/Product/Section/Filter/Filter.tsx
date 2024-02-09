const ProductSectionFilter = () => {
    const h4Style = 'font-[700] text-lg';

    return (
        <div className=''>
            <div className=''>
                <h4 className={h4Style}>Modelo</h4>
                <div className="text-sm">
                    <div>Moon</div>
                    <div>Baguete</div>
                    <div>Love</div>
                </div>
            </div>

            <div className=''>
                <h4 className={h4Style}>Tamanho</h4>
                <div>
                    <div>Pequena</div>
                    <div>Média</div>
                    <div>Grande</div>
                </div>
            </div>

            <div className=''>
                <h4 className={h4Style}>Cor</h4>
                <div>
                    <div>Branca</div>
                    <div>Preta</div>
                    <div>Marron</div>
                </div>
            </div>
        </div>
    );
};

export default ProductSectionFilter;
