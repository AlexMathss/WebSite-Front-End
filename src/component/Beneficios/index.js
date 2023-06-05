import './beneficios.css';


export default function Beneficios({title, content, icone}){
    return(
        <div className='box-container'>
            <div className='box-content'>
                <span>{title}</span>
                <div className='normal-container'>
                    <p className='normal'>{content}</p>
                </div>
                <div className='icon-container'>
                    {icone}
                </div>
            </div>
           
        </div>
    )
}