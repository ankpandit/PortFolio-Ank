import React from 'react';
import './NavTo.css' ;

import { AiFillHome,AiFillCustomerService } from "react-icons/ai";
import { IoCall} from "react-icons/io5";
import { BsToggleOn } from "react-icons/bs";
import { useState } from 'react';
import {Link} from 'react-scroll' ;

export default function NavTo() {


  // Dark Mode 
  const [mode, setMode] = useState(false) ;
  function darkMode(){
    if(mode===false){
      document.body.style.backgroundColor="#010821" ;
      document.body.style.color= "white";
      document.body.style.setProperty('--black' ,'#ffffff') ;
      document.body.style.setProperty('--white' ,'#010821') ;
      setMode(true) ;
    }
    else{
      document.body.style.backgroundColor="white" ;
      document.body.style.color= "white";
      document.body.style.setProperty('--black' ,'#242D49') ;
      document.body.style.setProperty('--white' ,'white') ;
      setMode(false) ;
    }
  }



  return (
    <div className="container">
        <div className="wrapper">
            <Link spy={true} to={'NavBar'}>
              <a href='/'><AiFillHome/></a>
            </Link>

            <Link spy={true} to={'Contact'} activeClass='activeClass'>
              <a href='contact'><AiFillCustomerService /></a>
            </Link>
            {/* <Link spy={true} to='Tel:+91-8527-657-999' activeClass='activeClass'> */}
              <a href='Tel:+91-8527-657-999'><IoCall style={{color:"#0A58CA"}}/></a>
            {/* </Link> */}
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={darkMode}/>
              <label class="form-check-label" for="flexSwitchCheckDefault">Dark Mode</label>
            </div>            
        </div>
    </div>
  )
}
