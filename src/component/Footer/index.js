import './footer.css';
import {FaTwitter, FaFacebookSquare, FaGooglePlusG} from 'react-icons/fa';

export default function Footer(){
    return (
        <div className='footer-container'>
            <div className='footer-content'>
                <div className='container-redes'>
                    <span>
                        TechVantage
                    </span>
                    <p>
                        Transforming Industries through Innovative Technology
                    </p>
                    <div className='container-social'>
                        <FaTwitter size={17} color='#094BCA'/>
                        <FaFacebookSquare size={17} color='#094BCA'/>
                        <FaGooglePlusG size={24} color='#094BCA'/>
                    </div>
                </div>
                <div className='container-about'>
                    <span>About</span>
                    {/* Preferivel fazer com Link to="" para ser redirecionado até a página. */}
                    <div className='about'>
                        <p>About Us</p>
                        <p>Blog</p>
                        <p>Team</p>
                        <p>Career</p>
                        <p>Contact</p>
                    </div>
                </div>
                <div className='container-company'>
                    <span>Company</span>
                    <div className='company'>
                        <p>About Us</p>
                        <p>Blog</p>
                        <p>Team</p>
                        <p>Career</p>
                        <p>Contact</p>
                    </div>
                </div>
                <div className='container-blog'>
                    <span>Blog</span>
                    <div className='blog'>
                        <div className='blog-card'>
                            <img src='./blog2.png'/>
                            <div className='blog-content'>
                                <p>Webinar: the Future of Digital Transformation in Business</p>
                                <button>
                                    Read More
                                </button>
                            </div>
                        </div>
                        <div className='blog-card'>
                            <img src='./blog1.png'/>
                            <div className='blog-content'>
                                <p>Mastering Social Media Marketing: A Comprehensive Guide</p>
                                <button>
                                    Read More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}