import React from 'react'
import {
  CardComponent,
  Titulo,
} from './StyleCard.tsx'

interface CardContent{
    titulo:string;
    icon?:string;
}

const Card = (props:CardContent) => {
  return (
    <CardComponent>
        <Titulo>{props.titulo}</Titulo>
        <div>
            {props.icon}
        </div>
        
      
    </CardComponent>
  )
}

export default Card
