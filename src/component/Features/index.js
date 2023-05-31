import Funcionalidade from '../Funcionalidade';
import './features.css';

export default function Features(){
    return(
        <div className='container-features'>
            <div className='content-features'>
                <h3>Streamline Your WorkFlow with TechVantage</h3>
                <p>
                    TechVantage is a cutting-edge Saas Solution designed to revolutinize the
                    the way businesses operate. Our powerfull platform empowers you to Streamline
                    your workflow, optimize collaboration, and drive productivity. Experience the 
                    future of work with TechVantage.

                </p>
            </div>

            <div className='functionality'>
                <div className='container-function'>
                    <Funcionalidade
                        title={'1st functionality'}
                        subtitle={'Effortless Task Management'}
                        content={'Simplify project management with our intuitive task tracking system. Assign tasks, set deadlines, and track progress effortlessly.'}
                        button={'Streamline Tasks Now'}
                    />
                    <img src='./features.png'/>
                </div>
                <div className='container-function'>
                    <img src='./features.png'/>
                    <Funcionalidade
                        title={'2nd functionality'}
                        subtitle={'Seamless Communication'}
                        content={'Facilitate seamless communication and collaboration with integrated messaging and real-time updates. Stay connected and never miss.'}
                        button={'Connect and Collaborate Today'}
                    />
                </div>
                <div className='container-function'>
                    <Funcionalidade
                        title={'3rd functionality'}
                        subtitle={'Powerful Analytics'}
                        content={'Gain valuable insights into your business with our powerful analytics tools. Track key metrics, visualize data, and make informed decisions.'}
                        button={'Gain Insights Instantly'}
                    />
                    <img src='./features.png'/>
                </div>
            </div>
        </div>
    )
}