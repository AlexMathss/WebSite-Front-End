import './coment.css';

export default function Coment({imagem, coment, company, assinatura}){
    return(
        
            <div className='perfil-container'>
                
                <div className='card'>
                    
                    <div className='coment'>
                        {imagem}
                        <div className='coment-container'>
                            
                            <div className='coment-title'>
                                {coment}
                            </div>
                            <div className='coment-company'>
                                {company}
                            </div>
                            <div className='coment-assinatura'>
                                {assinatura}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}