import { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../data.js";
import Section from "./Section";
import Tabs from "./Tabs";


export default function Examples() {

    const [seletedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton) {
      setSelectedTopic(selectedButton);
    }
  
    let tabContent = <p>Please click a button</p>;


    if (seletedTopic) {
        tabContent = (
          <div id="tab-content">
            <h3>{EXAMPLES[seletedTopic].title}</h3>
            <p>{EXAMPLES[seletedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[seletedTopic].code}</code>
            </pre>
          </div>
        );
      }

  return (
    <Section title='Examples' id="examples">
      <menu>
       
      </menu>
      <Tabs buttons={
        <>
     <TabButton
          isSelected={seletedTopic === "components"}
          onSelect={() => handleSelect("components")}
        >
          Component
        </TabButton>
        <TabButton
          isSelected={seletedTopic === "jsx"}
          onSelect={() => handleSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={seletedTopic === "props"}
          onSelect={() => handleSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={seletedTopic === "state"}
          onSelect={() => handleSelect("state")}
        >
          State
        </TabButton>
        </>
      }>
      {tabContent}
      </Tabs>
    </Section>
  );
}
