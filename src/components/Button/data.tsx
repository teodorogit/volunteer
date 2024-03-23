import {useState} from 'react'
import emprego from "../../assets/emprego.svg";
import doacao from "../../assets/doacao.svg"
import rifas from "../../assets/rifas.svg"
import divulgacao from "../../assets/divulgacao.svg"


export const EXAMPLES = {
  components: {
    title: "Vagas de Emprego",
    description:
    "Encontre oportunidades que transformam vidas! Nossa instituição voluntária conecta talentos a empregadores, abrindo portas para o futuro profissional dos nossos membros. Junte-se a nós e descubra novas possibilidades de carreira.",
    image: emprego,
  },
  jsx: {
    title: "Doações",
    description:
      "Faça a diferença com apenas um gesto de generosidade! Com nossos canais de doação, você pode impactar positivamente a vida de muitos. Contribua com alimentos, roupas ou outros itens essenciais e ajude a construir um mundo mais solidário.",
    image: doacao,
  },
  props: {
    title: "Rifas e Sorteios",
    description:
      "Entre na diversão e apoie uma causa nobre ao mesmo tempo! Participe de nossas rifas e sorteios para concorrer a prêmios incríveis enquanto contribui para o bem-estar da comunidade. Cada bilhete comprado é um passo a mais na direção da solidariedade.",
    image: rifas,
  },
  state: {
    title: "Divulgação de Parceiros",
    description:
      "Juntos somos mais fortes! Nossa instituição voluntária valoriza parcerias que fortalecem nossa missão de ajudar o próximo. Conheça e apoie os nossos parceiros, empresas e organizações comprometidas com o bem-estar social. Juntos, podemos fazer ainda mais pelo mundo.",
  image: divulgacao,
  },
}
const Counter=()=> {
  const [isVisible, setIsVisible] = useState(false);

  const  handleClick=()=> {
    setIsVisible(true);
  }

  return (
    <div>
      <button onClick={handleClick}>Show Details</button>
      {isVisible && <p>Amazing details!</p>}
    </div>
  );

};
