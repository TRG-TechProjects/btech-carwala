import { list } from 'postcss'
import React, { useState } from 'react'
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import ResponsiveMenu from './ResponsiveMenu.jsx';
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi';
import { Link } from "react-scroll";

export const NavLinks = [
    {
        id: "1",
        name: "HOME",
        link: "hero",
    },
    {
        id: "2",
        name: "ABOUT",
        link: "about",
    },
    {
        id: "3",
        name: "SERVICES",
        link: "services",
    },
    {
        id: "4",
        name: "CARS",
        link: "cars",
    },
    {
        id: "4",
        name: "REVIEWS",
        link: "reviews",
    },
]
const Navbar = ({ theme, setTheme }) => {
    const [showMenu, setShowMenu] = useState(false);
    const [authMode, setAuthMode] = useState(null); // "login" or "signup"

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
        <nav className='fixed top-0 left-0 w-full shadow-md bg-white dark:bg-dark dark:text-white duration-300 z-40'>
            <div className='container py-2 md:py-0'>
                <div className='flex justify-between items-center'>
                    <div>
                        <h1 className='text-3xl font-bold font-serif'>B.tech Carwala</h1>
                    </div>
                    <div className='hidden md:block'>
                        <ul className='flex items-center gap-6'>
                            {NavLinks.map((data) => (
                                <li key={data.id} className='py-4'>
                                    {/* <a className='py-2 hover:border-b-2 hover:text-primary hover:border-primary transition-colors duration-500 text-lg font-medium' href={data.link}>
                                        {data.name}
                                    </a> */}
                                    <Link
                                        className='py-2 hover:border-b-2 hover:text-primary hover:border-primary hover:cursor-pointer transition-colors duration-500 text-lg font-medium'
                                        to={data.link}
                                        smooth={true} // Enable smooth scrolling
                                        duration={800} // Scrolling duration in milliseconds
                                        offset={-50} // Adjust the scrolling position if needed
                                    >
                                        {data.name}
                                    </Link>
                                </li>
                            ))}
                            {/* dark mode icons */}
                            <div>
                                {
                                    theme === "dark" ? (
                                        <BiSolidSun
                                            onClick={() => setTheme("light")} className='text-2xl' />
                                    ) : (
                                        <BiSolidMoon
                                            onClick={() => setTheme("dark")} className='text-2xl' />
                                    )
                                }
                            </div>
                        </ul>
                    </div>

                    <div className='flex items-center gap-4 md:hidden'>
                        {/* dark mode icons */}
                        <div>
                            {
                                theme === "dark" ? (
                                    <BiSolidSun
                                        onClick={() => setTheme("light")} className='text-2xl' />
                                ) : (
                                    <BiSolidMoon
                                        onClick={() => setTheme("dark")} className='text-2xl' />
                                )
                            }
                        </div>
                        <div>
                            {/* mobile hamburger menu */}
                            {
                                showMenu ? (
                                    <HiMenuAlt1
                                        onClick={toggleMenu}
                                        size={30} className='cursor-pointer transition-all'
                                    />
                                ) : (
                                    <HiMenuAlt3
                                        onClick={toggleMenu}
                                        size={30} className='cursor-pointer transition-all'
                                    />
                                )
                            }
                        </div>
                    </div>

                </div>
            </div>
            <ResponsiveMenu showMenu={showMenu} toggleMenu={toggleMenu} />

            {/* Auth Modal */}
            {authMode && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-xl font-semibold mb-4">{authMode === "login" ? "Login" : "Signup"}</h2>
                        {authMode === "signup" && (
                            <input type="text" placeholder="Full Name" className="w-full border p-2 mb-3 rounded" />
                        )}
                        <input type="email" placeholder="Email" className="w-full border p-2 mb-3 rounded" />
                        <input type="password" placeholder="Password" className="w-full border p-2 mb-3 rounded" />
                        <button className="bg-primary text-white px-4 py-2 w-full rounded">
                            {authMode === "login" ? "Login" : "Sign Up"}
                        </button>
                        <button onClick={() => setAuthMode(null)} className="mt-3 text-red-500 w-full">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar