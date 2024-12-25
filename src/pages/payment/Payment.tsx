import SectionLayout from "../../global-elements/layouts/section-layout.tsx";


export default function Payment () {

  return (
    <div>
      <SectionLayout>
        <div className={`flex justify-center items-center flex-col gap-20`}>
          <div>
            Card elements
          </div>
          <div>
            Payment elements
          </div>
        </div>
      </SectionLayout>
    </div>
  )
}