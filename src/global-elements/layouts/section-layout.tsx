








export default function SectionLayout (props: {children: React.ReactNode}) {

  return (
    <div className={`m-5 md:m-20 lg:m-40`}>
      {props.children}
    </div>
  )
}