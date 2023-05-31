import './header.css';
import {BsChevronDown} from 'react-icons/bs'

export default function Header(){
    return (
        <div className='container-header'>
            <div className="menu-container">
            <img src="/logo.png" alt="logo TechVantage"/>
            <div className="menu">
                <div className="menu-options">
                    <button>
                        Product
                        <BsChevronDown size={15} color='#000'/>
                    </button>
                    <button>
                        Solutions
                        <BsChevronDown size={15} color='#000'/>
                    </button>
                    <button>
                        Resources
                        <BsChevronDown size={15} color='#000'/>
                    </button>
                    <button>
                        Pricing
                    </button>
                </div>
                <div className="menu-login">
                    <button className='menu-log'>
                        Log in
                    </button>
                    <button className="menu-starter">
                        Get started now
                    </button>
                </div>
            </div>
            </div>
        </div>
        
    )
}