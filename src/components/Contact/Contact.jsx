import React from 'react'

const Contact = () => {
    return (
        <div className='bg-gray-200 dark:bg-dark dark:text-white pt-4 pb-16 sm:grid sm:place-items-center'>
            <div className="container">
                <div 
                data-aos="fade-up"
                className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-dark dark:bg-black p-8 rounded-lg">
                    <div 
                    data-aos="fade-up"
                    className='col-span-2 space-y-5'>
                        <h1 className='text-3xl sm:text-4xl font-bold text-white font-serif'>
                        {""}
                        Let's collaborate on your upcomming car rental venture</h1>
                        <p className='text-gray-400'> Your perfect ride is just a tap away.</p>
                    </div>
                    <div 
                    data-aos="fade-up"
                    className='grid place-items-center'>
                        <a href="#"
                        className='button'
                        >Contact</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
