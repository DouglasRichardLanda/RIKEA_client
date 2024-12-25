import MainBoardFace from "./main-board-face.tsx";
import ElementH2Section from "../../global-elements/shared/titles/element-h2-section.tsx";
import MainBoardSection from "./main-board-section.tsx";
import SectionLayout from "../../global-elements/layouts/section-layout.tsx";
import ContactLead from "../../global-elements/shared/elements/contact-lead.tsx";

type SubElementType = {
  name: string,
  link: string
}

export default function MainBoard() {

  return (
    <section>
      <MainBoardFace imagesUrl={['./mainbg2.jpg', './mainbg1.jpg', './mainbg3.jpg', './mainbg4.jpg']}  />
      <SectionLayout>
        <ElementH2Section>Stone section</ElementH2Section>
        <div className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5`}>
          <MainBoardSection
            available={4450}
            description={"A deep, dark brick with a refined matte finish, Shadowstone Brick is perfect for home exteriors and interiors, offering timeless elegance and lasting durability"}
            length={20}
            name={"Shadowstone Brick"}
            origin={"Israel"}
            price={7.99}
            width={10} link={`/materials`}>
            <img src="/materials/stone/stone1.jpg" alt="" className={`h-[300px] w-full object-cover`}/>
          </MainBoardSection>
          <MainBoardSection
            available={4450}
            description={"Light and airy, Sandrift Brick is a sandy, textured brick ideal for garden walls and pathways, blending seamlessly with nature while offering a soft, inviting look"}
            length={40}
            name={"Sandrift Brick"}
            origin={"Israel"}
            price={3.99}
            width={10} link={`/materials`}>
            <img src="/materials/stone/stone2.jpg" alt="" className={`h-[300px] w-full object-cover`}/>
          </MainBoardSection>
          <MainBoardSection
            available={4450}
            description={"Soft beige with sandy texture"}
            length={20}
            name={"Sahara Dune Brick"}
            origin={"Israel"}
            price={4.99}
            width={10} link={`/materials`}>
            <img src="/materials/stone/stone3.jpg" alt="" className={`h-[300px] w-full object-cover`}/>
          </MainBoardSection>
          <MainBoardSection
            available={120}
            description={"Bright finish with golden flecks"}
            length={10}
            name={"Golden Ember Brick"}
            origin={"Italy"}
            price={14.99}
            width={20}
            link={`/materials`}>
            <img src="/materials/stone/stone4.jpg" alt="" className={`h-[300px] w-full object-cover`}/>
          </MainBoardSection>
          <MainBoardSection
            available={550}
            description={"Warm sandy tones, subtle shimmer"}
            length={60}
            name={"Desert Pearl Stone"}
            origin={"Israel"}
            price={19.99}
            width={30} link={`/materials`}>
            <img src="/materials/stone/stone5.jpg" alt="" className={`h-[300px] w-full object-cover`}/>
          </MainBoardSection>
          <MainBoardSection
           available={320}
           description={"Glossy black finish, natural texture"}
           length={60}
           name={"Black stone"}
           origin={"Iceland"}
           price={18.99}
           width={30}
           link={`/materials`}>
            <img src="/materials/stone/stone6.jpg" alt="" className={`h-[300px] w-full object-cover`}/>
          </MainBoardSection>
        </div>
        <ContactLead />
      </SectionLayout>
      <SectionLayout>
        <ElementH2Section>Wood section</ElementH2Section>
        <div className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5`}>
          <MainBoardSection
            available={850}
            description={"A rare fusion of mahogany, ebony, and willow, Emberwhisper Timber boasts a smoky red hue, intricate dark veining, and a soft, enchanting fragrance"}
            length={120}
            name={"Emberwhisper Timber"}
            origin={"Canada"}
            price={29.99}
            width={40}
            link={`/materials`}>
            <img src="/materials/wood/wood1.jpg" alt="" className={`h-[300px] w-full object-cover`}/>
          </MainBoardSection>
          <MainBoardSection
            available={1520}
            description={"Vibrantly streaked with natural hues of rosewood, purpleheart, and yellowheart, Prismbark Lumber dazzles with its rainbow-like grain, making it perfect for artistic creations"}
            length={120}
            name={"Prismbark Lumber"}
            origin={"Italy"}
            price={16.99}
            width={30}
            link={`/materials`}>
            <img src="/materials/wood/wood2.jpg" alt="" className={`h-[300px] w-full object-cover`}/>
          </MainBoardSection>
          <MainBoardSection
            available={660}
            description={"Native to Spain, Solara Birchwood is lightweight and creamy white with a subtle golden sheen, prized for its fine grain and radiant warmth"}
            length={150}
            name={"Solara Birchwood"}
            origin={"Spain"}
            price={19.99}
            width={40} link={`/materials`}>
            <img src="/materials/wood/wood3.jpg" alt="" className={`h-[300px] w-full object-cover`}/>
          </MainBoardSection>
          <MainBoardSection
            available={4450}
            description={"A dense, dark wood with a natural oily finish, Obsidianheart Timber exudes deep black-brown tones and a polished surface, perfect for luxurious, durable designs"}
            length={1400}
            name={"Obsidianheart Timber"}
            origin={"United Kingdom"}
            price={34.99}
            width={40} link={`/materials`}>
            <img src="/materials/wood/wood4.jpg" alt="" className={`h-[300px] w-full object-cover`}/>
          </MainBoardSection>
          <MainBoardSection
            available={4450}
            description={"Sourced from African forests, Ivoryshade Mahogany offers a creamy beige hue with subtle golden swirls, blending elegance and durability for refined furniture and decor"}
            length={1400}
            name={"Ivoryshade Mahogany"}
            origin={"South Africa"}
            price={24.99}
            width={30} link={`/materials`}>
            <img src="/materials/wood/wood5.jpg" alt="" className={`h-[300px] w-full object-cover`}/>
          </MainBoardSection>
          <MainBoardSection
            available={4450}
            description={"Native to the USA, Smokewood Oak features a rich, slightly dark smoky tone with soft gray undertones, perfect for rustic and contemporary furnishings alike"}
            length={1200}
            name={"Smokewood Oak"}
            origin={"USA"}
            price={34.99}
            width={45} link={`/materials`}>
            <img src="/materials/wood/wood6.jpg" alt="" className={`h-[300px] w-full object-cover`}/>
          </MainBoardSection>
        </div>
        <ContactLead />
      </SectionLayout>
      <SectionLayout>
        <ElementH2Section>Glas section</ElementH2Section>
        <div className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5`}>
          <MainBoardSection
            available={30}
            description={"Perfectly round and crystal-clear, Crystalorb Glass adds a modern, seamless elegance to room dividers, windows, and decorative installations, enhancing spatial harmony"}
            length={80}
            name={"Crystalorb Glass"}
            origin={"Canada"}
            price={159.99}
            width={40}
            link={`/materials`}>
            <img src="/materials/glas/glas1.jpg" alt="" className={`h-[300px] w-full object-cover`}/>
          </MainBoardSection>
          <MainBoardSection
            available={120}
            description={"A dazzling glass adorned with intricate mosaic patterns, Mosaicgem Glass transforms walls and windows into artful masterpieces, radiating light and vibrant colors"}
            length={60}
            name={"Mosaicgem Glass"}
            origin={"Ireland"}
            price={99.99}
            width={60}
            link={`/materials`}>
            <img src="/materials/glas/glas2.jpg" alt="" className={`h-[300px] w-full object-cover`}/>
          </MainBoardSection>
          <MainBoardSection
            available={290}
            description={"Designed for roofs and outdoor use, Skyshield Glass is durable, weather-resistant, and lightly tinted, offering both protection and aesthetic appeal"}
            length={100}
            name={"Skyshield Glass"}
            origin={"Germany"}
            price={209.99}
            width={150} link={`/materials`}>
            <img src="/materials/glas/glas3.jpg" alt="" className={`h-[300px] w-full object-cover`}/>
          </MainBoardSection>
        </div>
        <ContactLead />
      </SectionLayout>
      <SectionLayout>
        <ElementH2Section>sand section</ElementH2Section>
        <div className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5`}>
          <MainBoardSection
            available={300}
            description={"Pristine, fine-grained white sand, ideal for luxurious decor or aquariums. Feels soft and exotic"}
            length={0}
            name={"Maldives White Sand"}
            origin={"Maldives"}
            price={24.99}
            width={0}
            link={`/materials`}>
            <img src="/materials/sand/sand1.jpg" alt="" className={`h-[300px] w-full object-cover`}/>
          </MainBoardSection>
          <MainBoardSection
            available={400}
            description={"Smooth, pale vanilla-toned sand, perfect for crafting or coastal-inspired designs. Subtle warm undertones"}
            length={0}
            name={"Vanilla White Sand"}
            origin={"Seychelles"}
            price={21.99}
            width={0}
            link={`/materials`}>
            <img src="/materials/sand/sand2.jpg" alt="" className={`h-[300px] w-full object-cover`}/>
          </MainBoardSection>
          <MainBoardSection
            available={120}
            description={"Rich, volcanic dark sand with a striking texture, ideal for terrariums or unique decorative projects"}
            length={0}
            name={"Obsidian Dark Sand"}
            origin={"Iceland"}
            price={34.99}
            width={0}
            link={`/materials`}>
            <img src="/materials/sand/sand3.jpg" alt="" className={`h-[300px] w-full object-cover`}/>
          </MainBoardSection>
          <MainBoardSection
            available={120}
            description={"Warm beige sand with soft earthy tones, perfect for natural landscaping or elegant displays"}
            length={0}
            name={"Almond Beige Sand"}
            origin={"Morocco"}
            price={14.99}
            width={0}
            link={`/materials`}>
            <img src="/materials/sand/sand4.jpg" alt="" className={`h-[300px] w-full object-cover`}/>
          </MainBoardSection>
          <MainBoardSection
            available={120}
            description={"Vibrant orange-hued sand, reminiscent of tangerines, ideal for artistic projects and vibrant decor"}
            length={0}
            name={"Tangerine Sunset Sand"}
            origin={"Australia"}
            price={19.99}
            width={0}
            link={`/materials`}>
            <img src="/materials/sand/sand5.jpg" alt="" className={`h-[300px] w-full object-cover`}/>
          </MainBoardSection>
          <MainBoardSection
            available={120}
            description={"Subtle green-tinged sand with a soft shimmer, perfect for aquascaping or unique decorative accents"}
            length={0}
            name={"Emerald Drift Sand"}
            origin={"New Zealand"}
            price={22.99}
            width={0}
            link={`/materials`}>
            <img src="/materials/sand/sand6.jpg" alt="" className={`h-[300px] w-full object-cover`}/>
          </MainBoardSection>
        </div>
        <ContactLead />
      </SectionLayout>
    </section>
  )
}


