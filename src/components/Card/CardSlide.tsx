import React from 'react'
import './CardSlide.css'

const CardSlide = ({image}) => {
  return (
    <div className='ctn_image'>
      <img src={image} className='image_item'/>
    </div>
  )
}

export default CardSlide
