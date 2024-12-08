

export default function CustomH1 ({children}: {children: string}) {
  return <h1 className={`text-3xl tracking-wider font-bold`}>{children}</h1>
}