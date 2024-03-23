import React from 'react'
import './Style.css'
import solidariedade_logo from '../../assets/loja_solidariedade.png'
import { NavLink } from 'react-router-dom'

const Solidariedade = () => {
  return (
    <div className='ctn_loga_solidariedade'>
        <div>
         <img src={solidariedade_logo} alt="" className='loja_logo'/>
        </div>

        <div className='description_solidariedade'>
          <NavLink to='/'>Voltar</NavLink>
          <p> A LOJA DA SOLIDARIEDADE é um dos Projetos da CASA DO VOLUNTÁRIO.
          Objetivos: Gerar renda para a nossa instituição e parceiros através da venda de produtos com finalidade beneficente.
          VENDEMOS</p>
          <ul>
          <li>Roupas novas, semi novas, adulto, infantil, masculina e feminina.</li>
          <li>Calçados novos, semi novos, adulto, infantil, masculina e feminina.</li>
          <li>Artesanatos</li>
          <li>Lembrancinhas</li>
          <li>Brinquedos</li>
          <li>Livros</li>
          <li>Bijuterias</li>
          <li>lingerie </li>
          <li>Promoções de alimentos</li>
          <li>Sorteios de prêmios</li>
          <li>RECEBEMOS DOAÇÕES DE:</li>
          <li>Tampinhas de plástico</li>
          <li>Lacres de latinhas</li>
          <li>Meias usadas</li>
          <li>Óleo de cozinha usados</li>
          <li>Blisters/Cartelinhas de remédio </li>
          <li>Rações para cães e gatos</li>
          <li>Rolhas de cortiça</li>
          <li>Livros</li>
          <li>Brinquedos</li>
          <li>Alimentos</li>
          <li>Calçados</li>
          <li>Roupas</li>
          <li>Materiais de limpeza</li>
          <li>produtos de higiene pessoal </li>
          <li>Visite, compre, seja um parceiro e divulgue a LOJA DA SOLIDARIEDADE.</li></ul>
      </div>
      
    </div>
  )
}

export default Solidariedade
