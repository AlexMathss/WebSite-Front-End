import Perfil from '../../component/Perfil'
import './customers.css'

export function Customers(){
    return (
        <div className='container-customers'>
            <div className='title-container'>
                <span>Join Thousands of Satisfied Customers</span>
                <p>
                    Don't just take our word for it. Hear what our customers
                    have to say about their experience with TechVantage.
                </p>
            </div>
            <div className='container-coments'>
                <Perfil
                    imagem={<img src='./perfil3.png'/>}
                    coment={'TechVantage has transformed the way we work. It has streamlined our processes and improved collaboration across teams.Highly recommended!'}
                    company={'ABC Company'}
                    assinatura={'John Smith, CEO'}
                />
                <Perfil
                    imagem={<img src='./perfil2.png'/>}
                    coment={'Weve been using TechVantage for months now, and it has become an indispensable tool for our business. The seamless communication and task management features have boosted our productivity significantly.'}
                    company={'DEF Corporation'}
                    assinatura={'Emily Johnson, Marketing Manager'}
                />
                <Perfil
                    imagem={<img src='./perfil1.png'/>}
                    coment={'TechVantages powerful analytics have given us invaluable insights into our business performance. The data visualization and reporting capabilities are exceptional, helping us make data-driven decisions with confidence.'}
                    company={'GHI Industries'}
                    assinatura={'Michael Chen, CFO'}
                />
                <Perfil
                    imagem={<img src='./perfil4.png'/>}
                    coment={'TechVantage has transformed the way we work. It has streamlined our processes and improved collaboration across teams. Highly recommended!'}
                    company={'ABC Company'}
                    assinatura={'Joana Mark, CEO'}
                />
            </div>

            {/* Pode ser criado um componente? */}
            <div className='awards-container'>
                <div className='awards-card'>
                    <span>10+</span>
                    <p>Years in the Market</p>
                </div>  
                <div className='awards-card'>
                    <span>200,00+</span>
                    <p>Happy Customers</p>
                </div>
                <div className='awards-card'>
                    <span>90%</span>
                    <p>Uptime</p>
                </div>
                <div className='awards-card'>
                    <span>98%</span>
                    <p>Customer Retention Rate</p>
                </div>
                <div className='awards-card'>
                    <span>24/7</span>
                    <p>Support</p>
                </div>
            </div>
        </div>
    )
}