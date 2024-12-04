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
        <ElementH2Section>materials section</ElementH2Section>
        <div>
          <MainBoardSection
           available={250} 
           description={"description"}
           length={2}
           name={"name"}
           origin={"America"}
           price={18.99}
           width={2.5}>
            <img src="/indoorworker.jpg" alt="" className={`w-[200px] h-[200px] object-cover`}/>
          </MainBoardSection>
        </div>
      </SectionLayout>
    </section>
  )
}


