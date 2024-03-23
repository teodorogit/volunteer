import React from 'react'
import './StyleCardHeader.css'

const CardHeader = ({title,img}) => {
  return (
    <div className='crd_div'>
        <h3>{title}</h3>
        <img src={img} alt={title} className='img_card'/>
      
    </div>
  )
}

export default CardHeader
