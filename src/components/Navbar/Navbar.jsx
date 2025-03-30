import React from 'react' ;
import './Navbar.css' ;
import {Link} from 'react-scroll' ;
export default function Navbar() {
  return (  
    <div className="n-wrapper" id='NavBar'>
        <div className="n-left">
            <div className="n-name">ANKPANDIT</div>
            {/* <span>toggle</span> */}
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul>
                    <Link spy={true} to={'NavBar'} activeClass='activeClass'>
                        <li>Home</li>
                    </Link>
                    <Link spy={true} to={'Services'} activeClass='activeClass'>
                        <li>Services</li>
                    </Link>
                    <Link spy={true} to={'PortFolio'} activeClass='activeClass'>
                        <li>PortFolio</li>
                    </Link>
                    {/* <Link spy={true} to={"Testimonials"} activeClass='activeClass'>
                        <li>Testimonials</li>
                    </Link> */}
                </ul>
            </div>
            <Link spy={true} to={"Contact"} activeClass='activeClass' >
                <button className="button n-button">Contact</button>
            </Link>
        </div>
    </div>
  )
}
