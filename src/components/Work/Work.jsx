import React from 'react' ;
import './Work.css' ;
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";


export default function Work() {
  return (
    <div className="works">
        {/* left side */}
        <div className="awesome">
            <span>Works for All these</span>
            <span>Brands & Clients</span>
            <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                <br/>
                dignissimos, nobis aperiam laborum, maiores tempore optio 
                <br/>
                dignissimos, nobis aperiam laborum, maiores tempore optio 
                <br/>
                dignissimos, nobis aperiam laborum, maiores tempore optio 
            </span>
            <button className="button s-button">Hire Me</button>
            {/* <div className="blur s-blur" style={{background:' rgb(179, 255, 255)'}}></div> */}
        </div>

        {/* right side */}
        <div className="w-right">
            <div className="w-mainCircle">
                <div className="w-secCircle">
                    <img src={Upwork} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Fiverr} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Amazon} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Shopify} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Facebook} alt="" />
                </div>

                {/* background circles */}
                <div className="w-backcircle blueCircle"></div>
                <div className="w-backcircle yellowCircle"></div>
            </div>
        </div>
    </div>
  )
}
