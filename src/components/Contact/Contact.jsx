import React from 'react'

const Contact = () => {
    return (
        <div className='bg-gray-200 dark:bg-dark dark:text-white pb-16'>
            <div className="container">
                <div 
                data-aos="fade-up"
                className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-gray-800 py-8 px-6 rounded-lg">
                    <div 
                    data-aos="fade-up"
                    className='col-span-2 space-y-5'>
                        <h1 className='text-3xl sm:text-4xl font-bold text-white font-serif'>
                        {""}
                        Let's collaborate on your upcomming car rental venture</h1>
                        <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quae consequuntur.</p>
                    </div>
                    <div 
                    data-aos="fade-up"
                    className='grid place-items-center'>
                        <a href="#"
                        className='inline-block font-semibold py-2 px-6 bg-primary text-black rounded-lg tracking-wider hover:bg-primary/80 duration-300'
                        >Contact</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
