import React, { useState } from 'react'
import './WorkOverlay.css'
import { IoMdClose } from "react-icons/io";

function WorkOverlay({image,onClose}) {
    function close(event){
        if(event.target.classList.contains("overlay")){
            onClose() ;
        }
    }
    return (
    image && 
    <div className='overlay' id='overlay' onClick={close}>
        <IoMdClose onClick={onClose} id="close" />
        <div className="image">
            <img src={image} alt=""/>
        </div>
    </div>

  )
}

export default WorkOverlay