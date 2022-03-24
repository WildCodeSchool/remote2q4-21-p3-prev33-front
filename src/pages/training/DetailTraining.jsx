import React from 'react'

const DetailTraining = ({formation}) => {

  return (
    <div className='DetailTraining'>
        <div className="pdf">
          <span>{formation.title}</span>
        </div>
        {/* <img src={formation.link} alt="" /> */}

    </div>
  )
}

export default DetailTraining