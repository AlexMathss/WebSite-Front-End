import './perfil.css'

export default function Perfil({imagem, coment, company, assinatura}){
    return (
        <div className='perfil-container'>

            {imagem}

            <div className='card'>
                <div className='subClasse'>
                    <div className='coment'>
                        <div className='coment-container'>
                            <p>
                                {coment}
                            </p>
                        </div>
                        <span>{company}</span>
                        <p className='assinatura'>{assinatura}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}