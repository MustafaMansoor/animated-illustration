import React from 'react';

import Menu from './images/bars-solid.svg'
import "./Navbar.css"

export default function Navbar(){
    
    

     
     
    
    
       

    return(
        <header>
            
            <div className='logo'>
                <h1>Shape.</h1>
            </div>
            <nav>
                <div className="menu-item">
                    <ul>
                        <li><span className="home">Home</span></li>
                        <li><span>About Us</span></li>
                        <li><span>Blog</span></li>
                        <li><span>Services</span></li>
                    
                    </ul>
                </div>
                <div className='contact'>
                    
                        <span>Contact Us</span>
        
                </div>
            </nav>
            <div className='menu'>
                <img src={Menu} alt='' width='30' />
            </div>

            
        </header>
        
    )
}