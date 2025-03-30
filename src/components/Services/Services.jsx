import React from 'react'
import './Services.css'  ;
import HeartEmoji from "../../img/heartemoji.png";
import Humble from "../../img/humble.png";
// import Glasses from "../../img/glasses.png";
import Card from "../Card/Card" ;
import Resume from './Updated-Resume.pdf' ;
import programmingLanguage from '../../img/programmingLanguage.png' ;

export default function Services() {
  return (
    <div className="services" id='Services'>
        {/* left side */}
        <div className="awesome">
          <span>My Expertise</span>
              <span>
                  "I am skilled in Java, Python, JavaScript, React.js, Django, and Django REST Framework. As a passionate learner, I continuously update myself and explore new technologies every day."
                  <br/>
              </span>
              <a href={Resume} download>
                <button className="button s-button">Download CV</button>
              </a>
              {/* <span>Skills</span> */}
              {/* <div className="blur s-blur" style={{background:' rgb(179, 255, 255)'}}></div> */}
        </div>


        {/* right side */}
        <div className="cards">
          
          <div>
            <Card   
            emoji={HeartEmoji} 
            heading ={"Frameworks"} 
            detail={"React, Django, Django RestFramework"} ></Card> 
          </div>

          <div >
            <Card   
            emoji={programmingLanguage} 
            heading ={"Programming Languages"} 
            detail={"Java, Python, JavaScript"}></Card> 
          </div>
          <div >
            <Card   
            emoji={Humble} 
            heading ={"UI/UX"} 
            detail={"Figma X Abode"}></Card> 
          </div>
          {/* <div className="blur s-blur2" style={{background:"var(--purple)"}}></div> */}

        </div>
    </div>

  )
}
