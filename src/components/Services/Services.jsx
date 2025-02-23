import React from 'react'
import { FaCameraRetro } from 'react-icons/fa'
import { GiNotebook } from 'react-icons/gi'
import { SlNote } from 'react-icons/sl'

const skillsData = [
    {
        name: "Best Rate",
        icon: (
            <FaCameraRetro className='text-5xl text-primary group-hover:text-black duration-3000' />
        ),
        link: "#",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat.",
        aosDelay: "0",
    },
    {
        name: "Fast & Safe",
        icon: (
            <GiNotebook className='text-5xl text-primary group-hover:text-black duration-3000' />
        ),
        link: "#",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis.",
        aosDelay: "500",
    },
    {
        name: "Experienced Drivers",
        icon: (
            <SlNote className='text-5xl text-primary group-hover:text-black duration-3000' />
        ),
        link: "#",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam.",
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
                                className='card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-dark hover:bg-primary duration-300 ease-in-out text-white hover:text-black rounded-lg'
                            >
                                <div className='grid place-items-center'>{skills.icon}</div>
                                <h1>{skills.name}</h1>
                                <p>{skills.description}</p>
                                <a href={skills.link} className='text-primary group-hover:text-black'>Know more</a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Services
