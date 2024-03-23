import React from 'react'
import './Style.css'

const Index = () => {
  return (
    <div className='container_footer'>
      <div>
        <h3 className='title'>Localização</h3>
        <div className='endereco'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
      <a href="https://www.google.com/maps/dir/?api=1&destination=-0.000012046734055031%2C-0.000025763873&fbclid=IwAR1Ye89U3vs30o6o0yEDhdHmTbA-szbvJ8g69vrOO9e7OoMNaOdPCn6qJCs">Avenida Brasil 5620, Maringá, PR, Brazil</a>

        </div>

      </div>
      <div>
        <h3 className='title'>Seguidores</h3>
        <div className='endereco'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
        </svg>
        <a href='#'>7300</a>
        </div>
        <p id='direitos'>Direitos reservados &copy;2024</p>

      </div>
      <div >
        <div className='endereco'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
          <h3 className='title'>Meios de contato</h3>
        </div>

        <a className='acrs msg' href="">E-mail</a>
      </div>
    </div>
  )
}

export default Index
