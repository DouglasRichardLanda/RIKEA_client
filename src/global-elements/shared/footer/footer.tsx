import {Link} from "react-router-dom";

export default function Footer() {
  return (
    <footer id={`footer`} className={`text-custom-bright z-50`}>
      <div className={`bg-custom-dark py-20 px-5 sm:px-40 lg:px-60 flex justify-between gap-60`}>
        <div className={`hidden xl:block lg:w-1/3`}>
          <h3 className={`text-4xl text-gray font-extralight tracking-wider`}>Find everything <br/> for you home</h3>
          <p className={`my-20 text-gray tracking-wider`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aliquam, aliquid amet, dignissimos dolorem earum eligendi et exercitationem id illum in maxime minima modi
            mollitia nam nemo nihil nobis odit optio perferendis quam quo rerum sed tempore temporibus ut. Ab architecto
            culpa debitis dignissimos eos nemo placeat quos vitae! In, labore.</p>
        </div>
        <div className={`w-full xl:w-2/3`}>
          <h3 className={`text-4xl text-gray font-raleway font-extralight tracking-wider`}>Contact us</h3>

          <form className={`flex flex-col xl:w-4/5`}>
            <div className={`mt-20 flex gap-5 lg:gap-20 flex-col lg:flex-row`}>
              <label className={`flex flex-col mt-5 w-1/2 text-2xl`}>
                <span>
                  <span>First Name</span> <span className={`text-red inline`}>*</span>
                </span>
                <input type="text"
                       placeholder={`Adam`}
                       className={`border-b-2 border-custom-bright bg-custom-dark p-3 focus:outline-0 text-2xl text-blue`}/>
              </label>
              <label className={`flex flex-col mt-5 w-1/2 text-2xl`}>
                Last Name
                <input type="text"
                       placeholder={`Smith`}
                       className={`border-b-2 border-custom-bright bg-custom-dark p-3 focus:outline-0 text-2xl text-blue`}/>
              </label>
            </div>
            <div className={`mt-5 `}>
              <label className={`flex flex-col mt-5 text-2xl`}>
                <span>
                  <span>Email</span> <span className={`text-red inline`}>*</span>
                </span>
                <input type="text"
                       placeholder={`Adamsmith@gmail.com`}
                       className={`border-b-2 border-custom-bright bg-custom-dark p-3 focus:outline-0 text-2xl text-blue`}/>
              </label>
            </div>
            <div className={`mt-5 `}>
              <label className={`flex flex-col mt-5 text-2xl`}>
                <span>
                  <span>Message</span> <span className={`text-red inline`}>*</span>
                </span>
                <div className={`flex flex-col sm:flex-row w-full justify-between gap-5 items-end`}>
                  <textarea rows={4}
                            placeholder={`Hi, I’m looking to purchase materials for a home renovation...`}
                         className={`border-b-2 border-custom-bright bg-custom-dark p-3 focus:outline-0 text-2xl text-blue w-full`}/>
                  <button onClick={() => {
                    alert("Thank you for your message. We will contact you as soon as possible")
                  }} className={`px-5 py-2 bg-red`}>Submit</button>

                </div>
              </label>
            </div>

          </form>

        </div>
      </div>
      <div className={`bg-custom-extra-dark py-20 px-5 sm:px-20 xl:px-60 flex justify-between flex-col lg:flex-row`}>
        <div className={`flex flex-col gap-5`}>
          <h4 className={`text-gray tracking-wider text-lg`}>RIKEA Enterprice</h4>
          <h5 className={`text-gray tracking-wider`}>Personal and company rights are reserved &#xa9;</h5>
        </div>
        <div className={`flex gap-5 sm:gap-20 lg:gap-40`}>
          <div className={`flex gap-1 flex-col`}>
            <Link className={`tracking-wider hover:text-blue duration-200`} to={`#`}>Home</Link>
            <Link className={`tracking-wider hover:text-blue duration-200`} to={`#`}>Materials</Link>
            <Link className={`tracking-wider hover:text-blue duration-200`} to={`#`}>Another Link</Link>
            <Link className={`tracking-wider hover:text-blue duration-200`} to={`#`}>Another Link</Link>
          </div>
          <div className={`text-gray flex flex-col gap-1`}>
            <p>500 Tray Williams street</p>
            <p>South-West London</p>
            <p>United Kingdom</p>
            <p>contact@rikea.uk</p>
          </div>
        </div>
      </div>
    </footer>
  )
}