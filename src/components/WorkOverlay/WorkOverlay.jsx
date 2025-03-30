import React, { useState } from 'react'
import './WorkOverlay.css'
import { IoMdClose } from "react-icons/io";

function WorkOverlay({image,onClose}) {
    const flag = useState(()=>{
        if(image = null){
            Array.from(document.getElementsByClassName('overlay')).forEach((element) => {
                element.style.display="flex"
            });
            return true
        }
        else{
            Array.from(document.getElementsByClassName('overlay')).forEach((element) => {
                element.style.display="none"
                // console.log(element)
            });
            return false
        }
    })
    function close(){
        // document.getElementById('overlay').style.display="none"
        // document.getElementById('overlay').style.visibility="hidden"
        Array.from(document.getElementsByClassName('overlay')).forEach((element) => {
            element.style.display="none"
            // console.log(element)
        });
    }
    console.log(flag)
    return (
    flag[0] && 
    <div className='overlay' id='overlay'>
        <IoMdClose onClick={onClose}/>
        <div className="image">
            <img src={image} alt=""/>
        </div>
    </div>

  )
}

export default WorkOverlay