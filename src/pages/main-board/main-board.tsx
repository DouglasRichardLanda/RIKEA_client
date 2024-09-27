import MainBoardFace from "./main-board-face.tsx";
import ElementH2Section from "../../global-elements/shared/element-h2-section.tsx";
import {SectionLayout} from "../../global-elements/layouts";
import MainBoardSection from "./main-board-section.tsx";

type SubElementType = {
  name: string,
  link: string
}

const subElements: SubElementType[] = [
  {
    name: "Igor",
    link: "#"
  }
]

export default function MainBoard() {

  return (
    <section>
      <MainBoardFace imagesUrl={['./mainbg2.jpg', './mainbg1.jpg', './mainbg3.jpg', './mainbg4.jpg']}  />

      <SectionLayout>
        <ElementH2Section>indoor section</ElementH2Section>
        <MainBoardSection
          h3={"Bedroom Furniture"}
          image={"./furniture.jpg"}
          availableItems={100_000}
          text={`lorem text for development purposes but you an write whatever you want. lorem text for development purposes but you an write whatever you want. lorem text for development purposes but you an write whatever you want.lorem text for development purposes but you an write whatever you want.lorem text for development purposes but you an write whatever you want.lorem text for development purposes but you an write whatever you want.`}
          subElements4={[{name: "Igor", link: "#"}]}
          swap={false}/>
        <MainBoardSection
          h3={"Kitchen"}
          image={"./kitchen.jpg"}
          text={`lorem text for development purposes but you an write whatever you want. lorem text for development purposes but you an write whatever you want. lorem text for development purposes but you an write whatever you want.lorem text for development purposes but you an write whatever you want.`}
          availableItems={10_000}
          subElements4={[{name: "Igor", link: "#"}]}
          swap={true}/>
        <MainBoardSection
          h3={"Indoor specialists"}
          image={"./indoorworker.jpg"}
          availableItems={5_000}
          text={`lorem text for development purposes but you an write whatever you want. lorem text for development purposes but you an write whatever you want. lorem text for development purposes but you an write whatever you want.lorem text for development purposes but you an write whatever you want.lorem text for development purposes but you an write whatever you want.lorem text for development purposes but you an write whatever you want.`}
          subElements4={[{name: "Igor", link: "#"}]}
          swap={false}/>
      </SectionLayout>

    </section>
  )
}


