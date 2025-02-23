import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from 'react-icons/fa'

const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "About",
        link: "/#about",
    },
    {
        title: "Cars",
        link: "/#cars",
    },
    {
        title: "Booking",
        link: "/#booking",
    },
]

const Footer = () => {
    return (
        <div className='dark:bg-black dark:text-white'>
            <div className="container">
                <div className='grid md:grid-cols-3 py-8 rounded-t-3xl'>

                    {/* company details */}
                    <div className='py-8 px-4'>
                        <h1 className='text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3 font-serif gap-3 flex items-center'>B.tech Carwala</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <br />
                        <div className='flex items-center gap-3'>
                            <FaLocationArrow />
                            <p> Dubai, UAE</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <FaMobileAlt />
                            <p>+00 9876532104</p>
                        </div>
                        {/* social Handles */}
                        <div className='flex items-center gap-3 mt-3'>
                            <a href="#">
                                <FaInstagram className='text-3xl hover:text-primary duration-300' />
                            </a>
                            <a href="#">
                                <FaFacebook className='text-3xl hover:text-primary duration-300' />
                            </a>
                            <a href="#">
                                <FaLinkedin className='text-3xl hover:text-primary duration-300' />
                            </a>
                        </div>
                    </div>

                    
                    {/* navlinks */}
                    <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
                        {/* first col */}
                        <div>
                            <div className='py-8 px-4'>
                                <h1 className='text-xl  font-bold sm:text-left text-justify mb-3 font-serif'>Important Links</h1>
                                <ul className='flex flex-col gap-3'>
                                    {
                                        FooterLinks.map((data) => {
                                            return (
                                                <li key={data.title}
                                                    className='cursor-pointer hover:text-primary duration-300'
                                                >
                                                    <span className='mr-2'>&#11162;</span>
                                                    <a href={data.link}>{data.title}</a>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        {/* second col */}
                        <div>
                            <div className='py-8 px-4'>
                                <h1 className='text-xl  font-bold sm:text-left text-justify mb-3 font-serif'>Important Links</h1>
                                <ul className='flex flex-col gap-3'>
                                    {
                                        FooterLinks.map((data) => {
                                            return (
                                                <li key={data.title}
                                                    className='cursor-pointer hover:text-primary duration-300'
                                                >
                                                    <span className='mr-2'>&#11162;</span>
                                                    <a href={data.link}>{data.title}</a>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        {/* third col */}
                        <div>
                            <div className='py-8 px-4'>
                                <h1 className='text-xl  font-bold sm:text-left text-justify mb-3 font-serif'>Important Links</h1>
                                <ul className='flex flex-col gap-3'>
                                    {
                                        FooterLinks.map((data) => {
                                            return (
                                                <li key={data.title}
                                                    className='cursor-pointer hover:text-primary duration-300'
                                                >
                                                    <span className='mr-2'>&#11162;</span>
                                                    <a href={data.link}>{data.title}</a>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer