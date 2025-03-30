import React from 'react' ;
import './Intro.css' ;
import Github from '../../img/github.png' ;
import Linkedin from '../../img/linkedin.png' ; 
import Instagram from '../../img/instagram.png' ;
import Vector1 from '../../img/Vector1.png' ;
import Vector2 from '../../img/Vector2.png' ;
import boy from '../../img/boy.png' ;
import {useTypewriter,Cursor} from 'react-simple-typewriter'

export default function Intro() {
  const [profession] = useTypewriter({
    words:['Software Developer','Web Developer','Singer'],
    loop:{},
    typeSpeed:100 ,
    deleteSpeed:40 ,
  })
  const [name] = useTypewriter({
    words:['Ankit Pandit'],
    loop:{},
    typeSpeed:100,
    deleteSpeed:40,
  })
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hy ! I Am</span>
                <span >{name}<Cursor cursorStyle='<>' cursorColor='black'/></span>
                {/* <span> I design and build attractive web interfaces using HTML, CSS, and JavaScript to create engaging user experiences.</span> */}
                {/* <span> I am a Software Developer ,Web Developer ,Singer</span> */}
                <div>
                  and I am<br/>
                  <span id="typed-text">{profession}<Cursor cursorStyle='<>' cursorColor='black'/></span>
                </div>
            </div>
            <button className='button i-button'>Hire me </button>
            <div className="i-icons">
                <a href='https://github.com/ankpandit'><img src={Github} alt="Github" /></a>
                <a href='https://www.linkedin.com/in/ankit-pandit-368059206/'><img src={Linkedin} alt="LinkedIn" /></a>
                <a href='https://www.instagram.com/_ankpandit_/'><img src={Instagram} alt="Instagram" /></a>
            </div>
        </div>
        <div className="i-right">
          <img src={Vector1} alt="vector1" />
          <img src={Vector2} alt="Vector2" />
          <img src={boy} alt="boy" />
        </div>

        {/* <div className="blur" style={{background:"rgb(238 210 255)"}}></div>
        <div className="blur" style={{background:"#C1F5FF",
        top:'25rem' ,
        width:'21rem' ,
        height:'11rem'}}>
        </div> */}
    </div>
  )
}
