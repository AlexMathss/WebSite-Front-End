import './resourseresponsivo.css';

export default function ResourseResponsivo(){
    return(
        <div className='container-responsivo'>
            <div className='card-responsividade'>
                <img src='./card1.png'/>
                <div className='description-responsividade'>
                    <span>10 Essential Strategies for Business Growth</span>
                    <button className='readmore'>
                        Read More
                    </button>
                </div>
            </div>
            <div className='card-responsividade'>
                <img src='./card2.png'/>
                <div className='description-responsividade'>
                    <span>Success Story: How Company XYZ Increased Sales by 50%</span>
                    <button className='readmore'>
                        Read More
                    </button>
                </div>
            </div>
            <div className='card-responsividade'>
                <img src='./card3.png'/>
                <div className='description-responsividade'>
                    <span>Unlocking Data Analytics: Practical Tips and Techniques</span>
                    <button className='readmore'>
                        Read More
                    </button>
                </div>
            </div>
            <div className='card-responsividade'>
                <img src='./card4.png'/>
                <div className='description-responsividade'>
                    <span>Webinar: The Future of Digital Transformation in Business</span>
                    <button className='readmore'>
                        Read More
                    </button>
                </div>
            </div>
            <div className='card-responsividade'>
                <img src='./card5.png'/>
                <div className='description-responsividade'>
                    <span>Case Study: How TechVantage Transformed Company ABC's Workflow</span>
                    <button className='readmore'>
                        Read More
                    </button>
                </div>
            </div>
            <div className='card-responsividade'>
                <img src='./card6.png'/>
                <div className='description-responsividade'>
                    <span>Mastering Social Media Marketing: A Comprehensive Guide</span>
                    <button className='readmore'>
                        Read More
                    </button>
                </div>
            </div>
        </div>  
        
    )
}