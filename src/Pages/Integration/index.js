import LogoMarca from '../../component/LogoMarca';
import './integration.css';

export default function Integration(){
    return (
        <div className='container-integration'>
            <div className='container'>
                <div className='container-resume'>
                    <span>
                        Seamless Software Integrations
                    </span>
                    <p>
                        Connect, collaborate, and automate with TechVantage's extensive library of integrations. Our platform seamlessly integrates with popular software, empowering you to streamline workflows and maximize productivity. 
                    </p>
                    <button>
                        Explore Our Integrations Today
                    </button>
                </div>
                <div className='container-logomarcas'>
                    <LogoMarca
                        logo1={<img src='./gp1.png'/>}
                        logo2={<img src='./gp2.png'/>}
                        logo3={<img src='./gp3.png'/>}
                    />
                    <LogoMarca
                        logo1={<img src='./gp3.png'/>}
                        logo2={<img src='./gp4.png'/>}
                        logo3={<img src='./gp5.png'/>}
                    />
                    <LogoMarca
                        logo1={<img src='./gp6.png'/>}
                        logo2={<img src='./gp7.png'/>}
                        logo3={<img src='./gp8.png'/>}
                    />
                </div>
            </div>
        </div>
    )
}