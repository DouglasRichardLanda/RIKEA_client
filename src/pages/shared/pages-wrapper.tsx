import * as React from "react";


type PagesWrapper = {
  children: React.ReactNode
}
export default function PagesWrapper (props: PagesWrapper) {

  return (
    <section className={`p-5`}>
      {props.children}
    </section>
  )
}