import React from 'react'
import { FaUserCircle } from 'react-icons/fa';
import { NavLinks } from './Navbar';

const ResponsiveMenu = ({showMenu }) => {
  return (
    <div className={`${showMenu ? "left-0" : "-left-full"} fixed top-0 z-50 bg-white dark:bg-gray-800 h-screen w-[45%] md:hidden rounded-r-xl shadow-md flex flex-col justify-between px-8 pt-16 transition-all duration-300`}>
      <div className="card">
        <div className="flex items-center justify-start gap-3">
            <FaUserCircle size={50} />
            <div>
                <h1>Hello,</h1>
                <h1>Premium User</h1>
            </div>
        </div>

        {/* links */}
        <nav className="mt-12">
            <ul className="space-y-4 text-xl">
                {NavLinks.map((data) => (
                    <li key={data.id}>
                        <a href={data.link}>{data.name}</a>
                    </li>
                ))}
            </ul>
        </nav>
      </div>

      {/* FOOTER */}
      <div>
        <h1 className='pb-4'>Made & Maintained by <a href="">TRG</a>{""}</h1>
      </div>
    </div>
  )
}

export default ResponsiveMenu
