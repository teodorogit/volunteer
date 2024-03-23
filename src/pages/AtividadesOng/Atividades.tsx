import React from 'react'
import { Cards, MainContent,SubContainer } from '../../components/Main/Styles'
import Examples from '../../components/Exemplos/Exemplos'
import './Styles.css'
import { NavLink } from 'react-router-dom'

const Atividades = () => {
  return (
    <div>
         <MainContent>
          <NavLink  to="/" className='btn_voltar'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 icones">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
</svg>
Voltar</NavLink>
            <SubContainer>
                <Cards/>
                <Examples/>
            </SubContainer>
        </MainContent>
    </div>
  )
}

export default Atividades
