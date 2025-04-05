import React,{useEffect, useState} from 'react' ;
import './Portfolio.css';
import {Swiper ,SwiperSlide}  from 'swiper/react' ;
import 'swiper/css' ;
import Sidebar from "../../img/sidebar.png";
import FlowerPhobia from '../../img/FlowerPhobia.png' ;
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import WorkOverlay from '../WorkOverlay/WorkOverlay';
import { hover } from '@testing-library/user-event/dist/hover';

export default function Portfolio() {
    const [selectedImage, setSelectedImage] = useState(null);
    // Function to show WorkOverlay with selected image
    function displayWork(imgSrc) {
        setSelectedImage(imgSrc);  // Set image source
    }
    // let list ={Sidebar,FlowerPhobia,Ecommerce,HOC,MusicApp}
  return (
    <div className="portfolio" id='PortFolio'>

        {/* Heading */}
        <span>Recent Projects</span>
        <span>PortFolio</span>
        
        {/* slider */}
        <Swiper spaceBetween={30} slidesPerView={3.5} grabCursor={true} className='portfolio-slider' id="slider">
            <SwiperSlide >
                <img src={Sidebar} alt="" onClick={() => displayWork(Sidebar)} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={FlowerPhobia} alt="" onClick={() => displayWork(FlowerPhobia)}/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={Ecommerce} alt="" onClick={() => displayWork(Ecommerce)}/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={MusicApp} alt="" onClick={() => displayWork(MusicApp)}/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={HOC} alt="" onClick={() => displayWork(HOC)}/>
            </SwiperSlide>
        </Swiper>
        <WorkOverlay image={selectedImage} onClose={()=>{setSelectedImage(null)}}></WorkOverlay>
    </div>
  )
}
