import { useState } from "react";
import logo from "../../assets/svg/logo.svg"
import { Link } from "react-router-dom";
import menu from "../../assets/svg/menu.svg"

const navBarLinks = [
    {
        url: "/",
        title: "Home"
    },
    {
        url: "/about",
        title: "About"
    },
    {
        url: "/blog",
        title: "Blog"
    }
]

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="relative">
            <nav className="flex justify-between items-center w-full p-8 pb-16 max-w-[1000px] mx-auto">
                <img src = {logo} className="w-[150px]" />
                <div className="hidden md:block space-x-4">
                    {navBarLinks.map((navBarLink, idx) => (
                        <Link key={idx} to={navBarLink.url}>
                            {navBarLink.title}
                        </Link>
                    ))}

                    <Link 
                    className="bg-[#319A64] border-[#319A64] border-2 p-4 rounded-xl text-white"
                    to="/contact"
                    >
                        Contact Us
                    </Link>
                </div>

                <img 
                onClick={() => setIsOpen(true)}
                src={menu}
                className="w-[40px] md:hidden"
                />


            </nav>
        </div>
    )
}