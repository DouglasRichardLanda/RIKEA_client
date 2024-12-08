import CustomH1 from "../../global-elements/shared/elements/custom-h1.tsx";
import CustomH2 from "../../global-elements/shared/elements/custom-h2.tsx";
import StoneBoardelement from "./stone/stone-board-element.tsx";


export default function Materials () {

  return (
    <section>
      <div className={`p-20`}>
        <CustomH1>Materials</CustomH1>
        <div className={`my-5`}>
          <CustomH2>Stone</CustomH2>
          <div className={`my-5 flex justify-between overflow-auto`}>
            <StoneBoardelement stoneName={"Sahara dune Brick"} linkStone={`#`} imgPath={`/materials/pexels-zhmkhv-3373282-5512653.jpg`} />
            <StoneBoardelement stoneName={"Golden Ember Brick"} linkStone={`#`} imgPath={`/materials/pexels-padrinan-194096.jpg`} />
            <StoneBoardelement stoneName={"Desert Pearl Stone"} linkStone={`#`} imgPath={`/materials/pexels-milivigerova-6031343.jpg`} />
            <StoneBoardelement stoneName={"Black Stone"} linkStone={`#`} imgPath={`/materials/pexels-chris-f-38966-9018152.jpg`} />
            <StoneBoardelement stoneName={"Sandy Dream Brick"} linkStone={`#`} imgPath={`/materials/pexels-pixabay-220152.jpg`} />
            <StoneBoardelement stoneName={"Dark Gold Brick"} linkStone={`#`} imgPath={`/materials/pexels-pixabay-276514.jpg`} />
          </div>
          <div className={`flex`}>
            Infromation about Stones
          </div>
        </div>
      </div>
    </section>
  )
}



















