import './beneficios.css';


export default function Beneficios({title, content, icone}){
    return(
        <div className='box-container'>
            <div className='box-content'>
                <span>{title}</span>
                <p className='normal'>{content}</p>
                <div className='icon-container'>
                    {icone}
                </div>
            </div>
           
        </div>
    )
}