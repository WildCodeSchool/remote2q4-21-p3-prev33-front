import React from 'react'
import './CardsFormation.css';
import {Link} from 'react-router-dom';

const CardsFormations = ({
  image,
  title,
  pageFormation1,
  pageFormation2,
  pageFormation3,
  pageFormation4,
  pageFormation5,
  titleFormation1,
  titleFormation2,
  titleFormation3,
  titleFormation4,
  titleFormation5,
}) => {

  return (
    <div className='CardsFormation'>
      <div className="card">

          <div className="side card_face--front">
                <span className='title-card'>{title}</span>
                <img src={image} alt={title} />
          </div>
          
          <div className="side card_face--back">
            <div className="link-card">
           <Link to={{pageFormation1}} className='link' > {titleFormation1} </ Link> 
            <Link to={{pageFormation2}} className="link"> {titleFormation2} </ Link> 
            <Link to={{pageFormation3}} className="link"> {titleFormation3} </ Link> 
            <Link to={{pageFormation4}} className="link"> {titleFormation4} </ Link> 
            <Link to={{pageFormation5}} className="link"> {titleFormation5} </ Link> 
            </div>
          </div>

      </div>   
    </div>
  )
}

export default CardsFormations