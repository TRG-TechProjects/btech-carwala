import React from 'react'
import { FaCarSide } from "react-icons/fa";
import { IoMdPricetag } from "react-icons/io";
import { RiCustomerServiceFill } from "react-icons/ri";

const skillsData = [
    {
        name: "Wide Selection of Cars",
        icon: (
            <FaCarSide className='text-5xl text-primary dark:text-black group-hover:text-black duration-3000' />
        ),
        link: "#",
        description: "From sporty supercars to luxury sedans & SUVs, we offer diverse vehicles for every need and budget. Choose your perfect ride with ease.",
        aosDelay: "0",
    },
    {
        name: "Affordable Pricing",
        icon: (
            <IoMdPricetag className='text-5xl text-primary dark:text-black group-hover:text-black duration-3000' />
        ),
        link: "#",
        description: "Enjoy competitive rates with no hidden charges. We offer budget-friendly car rentals to make your journey both cost-effective and comfortable.",
        aosDelay: "500",
    },
    {
        name: "24/7 Customer Support",
        icon: (
            <RiCustomerServiceFill className='text-5xl text-primary dark:text-black group-hover:text-black duration-3000' />
        ),
        link: "#",
        description: "We're here for you anytime, anywhere! Our support team is available 24/7 to assist you with bookings, queries, and roadside assistance.",
        aosDelay: "1000",
    },
]

const Services = () => {
    return (
        <div className="py-24 dark:bg-black dark:text-white sm:grid sm:place-items-center">
            <div className="container">
                <div className="pb-12">
                    <h1
                        data-aos='fade-up'
                        className='text-3xl font-semibold text-center font-serif sm:text-4xl'
                    >Why Choose Us</h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {
                        skillsData.map((skills) => (
                            <div
                                key={skills.name}
                                data-aos="fade-up"
                                data-aos-delay={skills.aosDelay}
                                className='card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-dark hover:bg-primary dark:bg-primary dark:text-black duration-300 ease-in-out text-white hover:text-black rounded-lg'
                            >
                                <div className='grid place-items-center'>{skills.icon}</div>
                                <h1 className='font-semibold'>{skills.name}</h1>
                                <p>{skills.description}</p>
                                <a href={skills.link} className='font-semibold text-primary group-hover:text-black dark:text-black'>Know more</a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Services
