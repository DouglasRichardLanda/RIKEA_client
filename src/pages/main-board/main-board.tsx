import MainBoardFace from "./main-board-face.tsx";
import ElementH2Section from "../../global-elements/shared/titles/element-h2-section.tsx";
import MainBoardSection from "./main-board-section.tsx";
import SectionLayout from "../../global-elements/layouts/section-layout.tsx";

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
          subElements4={[{name: "Bed", link: "#", availableNumbers: 1500},
            {name: "Paintings", link: "#", availableNumbers: 2000},
            {name: "Shelves", link: "#", availableNumbers: 5000},
            {name: "Windows", link: "#", availableNumbers: 4400}]}
          swap={false}/>
        <MainBoardSection
          h3={"Kitchen"}
          image={"./kitchen.jpg"}
          text={`lorem text for development purposes but you an write whatever you want. lorem text for development purposes but you an write whatever you want. lorem text for development purposes but you an write whatever you want.lorem text for development purposes but you an write whatever you want.`}
          availableItems={10_000}
          subElements4={[{name: "Tables", link: "#", availableNumbers: 3500},
            {name: "Chairs", link: "#", availableNumbers: 3000},
            {name: "Glasses", link: "#", availableNumbers: 300},
            {name: "Plates", link: "#", availableNumbers: 500}]}
          swap={true}/>
        <MainBoardSection
          h3={"Indoor specialists"}
          image={"./indoorworker.jpg"}
          availableItems={5_000}
          text={`lorem text for development purposes but you an write whatever you want. lorem text for development purposes but you an write whatever you want. lorem text for development purposes but you an write whatever you want.lorem text for development purposes but you an write whatever you want.lorem text for development purposes but you an write whatever you want.lorem text for development purposes but you an write whatever you want.`}
          subElements4={[{name: "Kitchener", link: "#", availableNumbers: 230},
            {name: "Plumber", link: "#", availableNumbers: 550},
            {name: "Electrician", link: "#", availableNumbers: 400},
            {name: "Cleaner", link: "#", availableNumbers: 1200}]}
          swap={false}/>
      </SectionLayout>

    </section>
  )
}


