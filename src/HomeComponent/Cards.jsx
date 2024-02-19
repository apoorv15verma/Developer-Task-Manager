import React from 'react'
import "./Cards.css"




const Cards = (props) => {


   


    return (
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <p className="heading">{props.Heading}</p>
            {/* <img className="card-image" src={cardStyle} alt="" /> */}
          </div>
          <div className="flip-card-back">
            <p className='content'> {props.Content}</p>
          </div>
        </div>
      </div>
    )
  }
  

export default Cards;
