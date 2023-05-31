import './funcionalidade.css';

export default function Funcionalidade({title, subtitle, content, button}){
    return(
        <div className='funcionalidade-container'>
            <p className='title'>{title}</p>
            <span className='subtitle'>{subtitle}</span>
            <p className='content'>
                {content}
            </p>
            <button>
                {button}
            </button>
        </div>
    )
}