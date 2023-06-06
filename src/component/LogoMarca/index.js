import './logomarca.css';

export default function LogoMarca({logo1, logo2, logo3}){
    return (
            <div className='container-grupo'>
                {logo1}
                {logo2}
                {logo3}
            </div>
    )
}