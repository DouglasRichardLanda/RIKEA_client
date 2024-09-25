





export default function MainBoard() {

  return (
    <section className={`h-[90vh]`}>
      <div className={`w-full h-full bg-[url("/mainbg1.jpg")] bg-cover bg-top`}>
        <div className={`flex flex-col h-full w-full bg-black/50 justify-center items-center text-custom-bright gap-5 tracking-wider`}>
          <h1 className={`text-7xl`}>We will help you</h1>
          <p className={`text-2xl tracking-widest`}>to build your dream</p>
          <button className={`px-10 py-3 bg-red duration-200 hover:bg-red/80 tracking-widest`}>Contact</button>
        </div>
      </div>
    </section>
  )
}


