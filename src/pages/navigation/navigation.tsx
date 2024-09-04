import {GiTreeBranch} from "react-icons/gi";
import {Link} from "react-router-dom";
import {useState} from "react";
import {twMerge} from "tailwind-merge";

export default function Navigation() {
  return (
    <header
      className={`fixed left-0 top-0 h-screen w-60 bg-[var(--dark-green)] text-gray-200 flex flex-col items-center p-5`}>
        <Link to={`/`}>
          <GiTreeBranch className={`text-5xl`}/>
          <span className={`text-2xl`}>RIKEA</span>

        </Link>
      <nav className={`flex flex-col h-full justify-center text-xl`}>
        <SectionLabel>Indoor</SectionLabel>
        <MenuList>
          <Link className={`hover:text-[var(--vanilla-color)] duration-200`} to={'/doors'}>Doors</Link>
          <Link className={`hover:text-[var(--vanilla-color)] duration-200`} to={'/windows'}>Windows</Link>
          <Link className={`hover:text-[var(--vanilla-color)] duration-200`} to={'/colors'}>Colors</Link>
        </MenuList>

        <SectionLabel>Garden</SectionLabel>
        <MenuList>
          <Link className={`hover:text-[var(--vanilla-color)] duration-200`} to={'/fences'}>Fences</Link>
        </MenuList>
      </nav>
    </header>
  )
}

type SectionLabelTyp = {
  children: string
}
export function SectionLabel (props: SectionLabelTyp) {
  const [open, setOpen] = useState(false)
  return (
    <p onClick={() => setOpen(prev => !prev)} className={twMerge("cursor-pointer")}>{props.children}</p>
  )
}

type MenuListType = {
  children: React.ReactNode
}
export function MenuList(props: MenuListType) {

  return (
    <ul className={`flex flex-col gap-1 tracking-wider text-lg pl-5 mb-5`}>
      {props.children}
    </ul>
  )
}