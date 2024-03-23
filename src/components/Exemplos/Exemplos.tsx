import { useState } from "react";
import { EXAMPLES } from "../Button/data.js"
import TabButton from "../Button/Button.js"
import Section from "../Section/Section.js"
import Tabs from "../Tabs/Tabs.js"
import Card from "../Card/Card.js";
import { GrWorkshop } from "react-icons/gr";
import { BiDonateHeart } from "react-icons/bi";
import { CiBadgeDollar } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";
import './Styles.css'

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState("components");
  let tabContent = "Click para ver detalhes";

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

  return (
    <Section title="AÇÕES DA CASA DO VOLUNTÁRIO" id="examples">
      <Tabs
        buttonsContainer="menu"
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={() => handleSelect("components")}
            >
            <Card
            titulo="Vagas em emprego"
            icon={<GrWorkshop />}
            />
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              <Card
            titulo="Doações"
            icon={<BiDonateHeart />}
            />
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => handleSelect("props")}
            >
                <Card
            titulo="Rifas e Sorteios"
            icon={<CiBadgeDollar />}
            />
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => handleSelect("state")}
            >
                <Card
            titulo="Divulgação de Parceiros"
            icon={<IoShareSocialOutline/>}
            />
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>

      {selectedTopic && (
        <div id="tab contents" className="tab-contents" >
           <div>
            <img src={EXAMPLES[selectedTopic].image} className="image_item"/>
          </div>
          <div>
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          </div>
        </div>
      )}
    </Section>
  );
}
