import ResourceBlock from '../../component/ResourceBlock';
import './resources.css';

export default function Resources(){
    return(
        <div className='resources-container'>
            <h2>Empower Your Business with Free Resources</h2>
            <div className='resources-content'>
                <div className='resources-card'>
                    <ResourceBlock
                        imagem={<img src='./card6.png'/>}
                        genero1={'E-book'}
                        genero2={'Business Growthas'}
                        title={'10 Essential Strategies for Business Growth'}
                    />
                    <ResourceBlock
                        imagem={<img src='./card1.png'/>}
                        genero1={'Case Study'}
                        genero2={'Success Story'}
                        title={'Success Story: How Company XYZ Increased Sales by 50%'}
                    />
                    <ResourceBlock
                        imagem={<img src='./card2.png'/>}
                        genero1={'Data Analytics'}
                        genero2={'Tips and Techniques'}
                        title={'Unlocking Data Analytics: Pratical Tips and Techniques'}
                    />
                </div>
                <div className='resources-card'>
                    <ResourceBlock
                        imagem={<img src='./card3.png'/>}
                        genero1={'Webninar'}
                        genero2={'Digital Transformation'}
                        title={'Webinar: The Future of Digital Transformation in Business'}
                    />
                    <ResourceBlock
                        imagem={<img src='./card4.png'/>}
                        genero1={'Case Study'}
                        genero2={'Workflow Transformation'}
                        title={'Case Study: How TechVantage Transformed Company ABCs Workflow'}
                    />
                    <ResourceBlock
                        imagem={<img src='./card5.png'/>}
                        genero1={'Guide'}
                        genero2={'Social Media Marketing'}
                        title={'Mastering Social Media Marketing: A Comprehensive Guide'}
                    />
                </div>  
            </div>
        </div>
    )
}