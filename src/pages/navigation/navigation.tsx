import {GiTreeBranch} from "react-icons/gi";
import {Link} from "react-router-dom";

export default function Navigation() {

  return (
    <header
      className={`fixed left-0 top-0 h-screen w-80 bg-[var(--dark-green)] text-gray-200 flex flex-col items-center p-5`}>
        <Link to={`/`}>
          <GiTreeBranch className={`text-5xl`}/>
        </Link>
      <nav className={`flex flex-col items-center h-full justify-center`}>
        <ul className={`flex flex-col gap-2 text-2xl font-bold tracking-wider`}>
          <Link className={`hover:text-[var(--vanilla-color)] duration-200`} to={'doors'}>Doors</Link>
          <Link className={`hover:text-[var(--vanilla-color)] duration-200`} to={'windows'}>Windows</Link>
          <Link className={`hover:text-[var(--vanilla-color)] duration-200`} to={'fences'}>Fences</Link>
          <Link className={`hover:text-[var(--vanilla-color)] duration-200`} to={'colors'}>Colors</Link>
        </ul>
      </nav>
    </header>
  )
}