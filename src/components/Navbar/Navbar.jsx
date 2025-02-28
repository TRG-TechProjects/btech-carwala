import { list } from 'postcss'
import React, { useState,  useRef, useEffect } from 'react'
import { BiSolidSun, BiSolidMoon, BiSolidUserCircle } from "react-icons/bi";
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
        id: "5",
        name: "REVIEWS",
        link: "reviews",
    },
]
const Navbar = ({ theme, setTheme }) => {
    const [showMenu, setShowMenu] = useState(false);
    const [authMode, setAuthMode] = useState(null); // "login" or "signup"
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

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

                            {/* User Account Dropdown */}
                            <div className="relative" ref={dropdownRef}>
                                <BiSolidUserCircle
                                    className="text-3xl cursor-pointer text-primary"
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                />
                                {dropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                                        <ul className="py-2 text-gray-700 dark:text-white">
                                            <li
                                                onClick={() => setAuthMode("login")}
                                                className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                                            >
                                                Login
                                            </li>
                                            <li
                                                onClick={() => setAuthMode("signup")}
                                                className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                                            >
                                                Signup
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>

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
                    <div className="bg-white dark:bg-black p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-xl font-semibold mb-4">{authMode === "login" ? "Login" : "Signup"}</h2>

                        {authMode === "signup" && (
                            <>
                                <input type="text" placeholder="Full Name" className="w-full border p-2 mb-3 rounded dark:bg-black" />
                                <input type="tel" placeholder="Phone Number" className="w-full border p-2 mb-3 rounded dark:bg-black" />
                            </>
                        )}

                        <input type="email" placeholder="Email" className="w-full border p-2 mb-3 rounded dark:bg-black" />
                        <input type="password" placeholder="Password" className="w-full border p-2 mb-3 rounded dark:bg-black" />

                        <button className="bg-primary text-white dark:text-black px-4 py-2 w-full rounded">
                            {authMode === "login" ? "Login" : "Sign Up"}
                        </button>

                        <p className="mt-3 text-center">
                            {authMode === "login" ? "Don't have an account? " : "Already have an account? "}
                            <span
                                className="text-blue-500 cursor-pointer"
                                onClick={() => setAuthMode(authMode === "login" ? "signup" : "login")}
                            >
                                {authMode === "login" ? "Sign up" : "Login"}
                            </span>
                        </p>

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