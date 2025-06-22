import { list } from 'postcss'
import React, { useState, useRef, useEffect } from 'react'
import { BiSolidSun, BiSolidMoon, BiSolidUserCircle } from "react-icons/bi";
import ResponsiveMenu from './ResponsiveMenu.jsx';
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi';
import { Link } from "react-scroll";
import AuthModal from "../UserAuthentication/UserAuthentication.jsx";

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
        name: "CONTACT",
        link: "contact",
    },
]
const Navbar = ({ theme, setTheme }) => {
    const [showMenu, setShowMenu] = useState(false);
    const [authMode, setAuthMode] = useState(null); // "login" or "signup"
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const menuRef = useRef(null);
    const menuButtonRef = useRef(null);  // ✅ Reference for menu toggle button
    

    const toggleMenu = () => {
        setShowMenu(prev => !prev);
    }

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                (dropdownRef.current && dropdownRef.current.contains(event.target)) ||
                (menuRef.current && menuRef.current.contains(event.target)) ||
                (menuButtonRef.current && menuButtonRef.current.contains(event.target)) // ✅ Ignore clicks on menu button
            ) {
                return;
            }

            // Close dropdown
            setDropdownOpen(false);

            // Close mobile menu
            setShowMenu(false);
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



                    <div className='flex items-center gap-4 md:hidden' ref={menuRef}>
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
            <div ref={menuRef}>            
            {/* <ResponsiveMenu showMenu={showMenu} toggleMenu={toggleMenu} /> */}
            <ResponsiveMenu showMenu={showMenu} toggleMenu={() => setShowMenu(false)} />
            </div>

            {/* Auth Modal */}
            <AuthModal authMode={authMode} setAuthMode={setAuthMode} />
        </nav>
    );
};

export default Navbar

