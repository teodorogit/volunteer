import React from 'react'

import '../../global.css'
import Examples from '../Exemplos/Exemplos.tsx'
import amizade from '../../assets/amigos.svg'


import {
    Container,
    Image,
} from './Styles.tsx'
import CardSlide from '../Card/CardSlide.js';
import image1 from '../../assets/imgvvl1.jpg'
import { NavLink } from 'react-router-dom';
import './Style.css'
import CardHeader from '../Card/CardHeader.tsx'
import cuidado_golpes from '../../assets/cuidado_golpes.jpg'
import curso_libras from '../../assets/curso_libras.png'


import loja_solidariedade from '../../assets/loja_solidariedade.jpg'


const Main = () => {
    return (
      <>
            <div className='content'>
                    <p id='title_cnt'><span id='first'>C</span>ASA DO <span id='first'>V</span><span id='main'>OLUNTÁRI</span>O - <span id='first'>M</span>ARINGÁ</p></div>
                    <div id='cards'>
                    <CardHeader
                    title='Cuidado com Golpes'
                    img={cuidado_golpes}
                    />
                    <CardHeader
                    title='Curso de libras'
                    img={curso_libras}
                    />
                    <CardHeader
                    title='Cuidado com Golpes'
                    img={cuidado_golpes}
                    />
                    <CardHeader
                    title='Curso de libras'
                    img={curso_libras}
                    />
                    </div>
                <div>
                </div>
        <Container className='container'>
            <div className='container_imagens'>
                 <div className='title_main'>
                    <h2 className='titulo'>PRECISAMOS DE <span>VOLUNTÁRIOS</span></h2>
                    <p>"Comece onde você está. Use o que você tem. Faça o que você pode".</p>
             </div>
                    <CardSlide image={image1} />
                </div>
                <div className='container_logo'>
                    <Image src={amizade} alt="fundo-logo" className='img_amizade' />
                </div>
            </Container>
            <div className='router_div' style={{ display: 'flex' }}>
                <div className='opc'>
                <div className='ctn_img'>
                       <form id='cadastro'>
                        <label htmlFor="nome">Nome</label>
                        <input type="text" />
                        <label htmlFor="e-mail">E-mail</label>
                        <input type="email" />
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                        <div>
                            <button>Enviar</button>
                        </div>
                       </form>
                    </div>
                    <div className='ctn_img'>
                    <NavLink to='/solidariedade'>
                        <img src={loja_solidariedade} alt="" className='img_ong' />
                        <h5>Loja da Solidariedade</h5>
                        <p> A LOJA DA SOLIDARIEDADE é um dos Projetos da CASA DO VOLUNTÁRIO.
                        Objetivos: Gerar renda para a nossa instituição e parceiros através da venda de produtos com finalidade beneficente.

                        VENDEMOS:</p>
                        </NavLink>
                    </div>
                  
                    
                </div>
                </div>
         </>       
    )
}

export default Main
