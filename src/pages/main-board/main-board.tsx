import MainBoardFace from "./main-board-face.tsx";
import ElementH2Section from "../../global-elements/shared/titles/element-h2-section.tsx";
import MainBoardSection from "./main-board-section.tsx";
import SectionLayout from "../../global-elements/layouts/section-layout.tsx";
import ContactLead from "../../global-elements/shared/elements/contact-lead.tsx";

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
        <div className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5`}>
          <MainBoardSection
           available={320}
           description={"Glossy black finish, natural texture"}
           length={60}
           name={"Black stone"}
           origin={"Iceland"}
           price={18.99}
           width={30}
           link={`#`}>
            <img src="/materials/pexels-chris-f-38966-9018152.jpg" alt="" className={`h-[300px] w-full object-cover`}/>
          </MainBoardSection>
          <MainBoardSection
            available={120}
            description={"Bright finish with golden flecks"}
            length={10}
            name={"Golden Ember Brick"}
            origin={"Italy"}
            price={14.99}
            width={20}
            link={`#`}>
            <img src="/materials/pexels-padrinan-194096.jpg" alt="" className={`h-[300px] w-full object-cover`}/>
          </MainBoardSection>
          <MainBoardSection
            available={550}
            description={"Warm sandy tones, subtle shimmer"}
            length={60}
            name={"Desert Pearl Stone"}
            origin={"Israel"}
            price={19.99}
            width={30} link={`#`}>
            <img src="/materials/pexels-milivigerova-6031343.jpg" alt="" className={`h-[300px] w-full object-cover`}/>
          </MainBoardSection>
          <MainBoardSection
            available={4450}
            description={"Soft beige with sandy texture"}
            length={20}
            name={"Sahara Dune Brick"}
            origin={"Israel"}
            price={4.99}
            width={10} link={`#`}>
            <img src="/materials/pexels-zhmkhv-3373282-5512653.jpg" alt="" className={`h-[300px] w-full object-cover`}/>
          </MainBoardSection>
        </div>
        <ContactLead />
      </SectionLayout>
    </section>
  )
}


