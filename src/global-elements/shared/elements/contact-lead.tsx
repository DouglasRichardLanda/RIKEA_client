






export default function ContactLead () {

  return (
    <div className={`w-full my-20 flex justify-center items-center`}>
      <button onClick={() => {
        const footer = document.getElementById("footer");
        footer?.scrollIntoView({ behavior: 'smooth' })
      }} className={`uppercase tracking-widest px-10 py-3 bg-red text-custom-bright`}>Contact</button>
    </div>
  )
}