import Link from "next/link";

export default function MobileNavbar({active}) {
  return (
    <nav className={`xl:hidden absolute flex flex-col gap-y-6 pt-20 p-4 ${active?"activeSidenav":"sidenav"}`}>
            <Link href={"#about"}  >About</Link>
            <Link href={"#skills"} >Skills</Link>
            <Link href={"#projects"} >Projects</Link>
            <Link href={"#education"}  >Education</Link>
            <Link href={"#contact"} >Contact</Link>
        </nav>
  )
}
