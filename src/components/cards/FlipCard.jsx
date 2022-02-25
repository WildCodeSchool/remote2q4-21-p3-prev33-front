import React from 'react'
import 'FlipCard.css'
import {Link} from 'react-router-dom';


const FlipCard = ( image,
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
    ) => {

  return (
    <div className="flip-card-outer">
    <div className="flip-card-inner">
      <div className="card front">
        <div className="card-body d-flex justify-content-center align-items-center">
           <p className="card-text fs-1 fw-bold"> {titleFormation1}  </p>  
        </div>
      </div>
      <div className="card back">
        <div className="card-body d-flex justify-content-center align-items-center">
          <Link to={{pathname:'/'}} > <p className="card-text fs-1 fw-bold"> {titleFormation1}  </p> </ Link> 

        </div>
      </div>
    </div>
  </div>
  )
}

export default FlipCard