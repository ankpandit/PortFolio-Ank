import React from 'react'
import './Card.css' ;
export default function Card(props) {
  return (
    <div className="card">
      <img src={props.emoji} alt="" />
      <span>{props.heading}</span>
      <span>{props.detail}</span>
      <button className="c-button">Learn More</button>
    </div>
  )
}
