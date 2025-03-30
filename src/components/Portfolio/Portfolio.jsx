import React,{useState} from 'react' ;
import './Portfolio.css';
import {Swiper ,SwiperSlide}  from 'swiper/react' ;
import 'swiper/css' ;
import Sidebar from "../../img/sidebar.png";
import FlowerPhobia from '../../img/FlowerPhobia.png' ;
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import WorkOverlay from '../WorkOverlay/WorkOverlay';

export default function Portfolio() {
    const [selectedImage, setSelectedImage] = useState(null);
    console.log(selectedImage)
    // Function to show WorkOverlay with selected image
    function displayWork(imgSrc) {
        console.log(selectedImage)
        setSelectedImage(imgSrc);  // Set image source
    }
  return (
    <div className="portfolio" id='PortFolio'>

        {/* Heading */}
        <span>Recent Projects</span>
        <span>PortFolio</span>
        
        {/* slider */}
        <Swiper spaceBetween={30} slidesPerView={3} grabCursor={true} className='portfolio-slider'>
            <SwiperSlide >
                <img src={Sidebar} alt="" onClick={() => displayWork(Sidebar)} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={FlowerPhobia} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Ecommerce} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={MusicApp} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={HOC} alt="" />
            </SwiperSlide>
        </Swiper>
        <WorkOverlay image={selectedImage} onClose={()=>{setSelectedImage(null)}}></WorkOverlay>
    </div>
  )
}
