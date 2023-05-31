import Beneficios from '../../component/Beneficios'
import './home.css'

export default function Home(){
    return(
        <div className="container-home">
            
            <div className="resume-content">
                <div className="resume">
                    <h1>TechVantage <br/>Solutions</h1>
                    <p>
                        Empowering Businesses with Innovative Solutions for Success and
                        Growth. Streamline workflows, foster collaboration, and unlock your true
                        potential with TechVantage. Experience the future of work today.
                    </p>
                    <div className="button-content">
                        <div className="button-start">
                            Start Your Free Trial Now
                        </div>
                        <div className="button-request">
                            Request a demo
                        </div>
                    </div>
                </div>
                <img src="./Hero.png" alt="Publicidade Imagem"/>
            </div>

            <div className="benefits-content">
                <Beneficios 
                    title={'Increased Efficiency'}
                    content={'Streamline your workflow and save time'}
                    icone={<img src='./clock.png' alt='relogio'/>}
                />
                <Beneficios 
                    title={'Improved cooperation'}
                    content={'Foster teamwork and communication.'}
                    icone={<img src='./bag.png' alt='bag'/>}
                />
                <Beneficios 
                    title={'Scalabillity'}
                    content={'Adapt to growing business needs samlessly.'}
                    icone={<img src='./graph.png' alt='bag'/>}
                />
                <Beneficios 
                    title={'Data Security'}
                    content={'Ensure the safety and privacy of your valuable data.'}
                    icone={<img src='./shield.png' alt='bag'/>}
                />
                <Beneficios 
                    title={'24/7'}
                    content={'Provide round-the-rock assistance to your customers'}
                    icone={<img src='./support.png' alt='bag'/>}
                />
            </div>
        </div>
    )
}