import Link from "next/link"
import { FaHome } from "react-icons/fa"
import { ActiveLink } from "@/components"

const navItems = [
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: "/pricing", label: "Pricing" },
]


export const Navbar = async() => {    
    return (
        <nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded gap-2'>
            <Link className="flex items-center gap-2" href="/">
            <FaHome />
            Home
            </Link>
            <div className='flex flex-1'></div>
            {
                navItems.map(({ path, label }) => (
                   <ActiveLink key={path} path={path} label={label} /> 
                ))
            }

        </nav>
    )
}
