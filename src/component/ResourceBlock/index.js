import './resourceblock.css';

export default function ResourceBlock({genero1, genero2, title, imagem}){
    return(
        <div className='container-card'>
            {imagem}
            <div className='referencias'>
                <div className='genero-container'>
                    <button>
                        {genero1}
                    </button>
                    <button>
                        {genero2}
                    </button>
                </div>
                <span>{title}</span>
                <button className='readmore'>
                    Read More
                </button>
            </div>
        </div>
    )
}