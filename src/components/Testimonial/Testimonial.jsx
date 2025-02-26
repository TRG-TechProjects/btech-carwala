import React from 'react'

const testimonialData = [
    {
        name: "John Doe",
        image:"https://xsgames.co/randomusers/assets/avatars/male/8.jpg",
        rating:"⭐⭐⭐⭐⭐",
        review: "Affordable prices and a great selection of cars. The entire process was hassle-free.",
        aosDelay: "0",
    },
    {
        name: "Harry Potter",
        image:"https://xsgames.co/randomusers/assets/avatars/female/19.jpg",
        rating:"⭐⭐⭐",
        review: "Best car rental service I’ve used - transparent pricing and no hidden fees.",
        aosDelay: "300",
    },
    {
        name: "Ben Ten",
        image:"https://xsgames.co/randomusers/assets/avatars/female/45.jpg",
        rating:"⭐⭐⭐⭐",
        review: "Customer support was super helpful, and the car was ready on time. Highly recommend.",
        aosDelay: "600",
    },
]

const Testimonial = () => {
  return (
    <div className='dark:bg-black dark:text-white py-24 sm:pb-36 sm:grid sm:place-items-center'>
      <div className="container">

        {/* header */}
        <div className='space-y-4 pb-12'>
            <p 
            data-aos='fade-up'
            className='text-3xl font-semibold text-center sm:text-4xl font-serif'>Review of Our Clients
            </p>
            <p 
            data-aos='fade-up'
            className='text-center sm:px-44'>Have a look on your client's review.{""}
            </p>
        </div>

        {/* card section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-black dark:text-white ">
            {
                testimonialData.map((data) => {
                    return(
                        <div 
                        data-aos="fade-up"
                        data-aos-delay={data.aosDelay}
                        key={data.name} 
                        className='card text-center group space-y-3 sm:space-y-6 p-4 bg-dark text-white sm:py-12 duration-300 rounded-lg'>
                            <div className='grid place-items-center'>
                                <img src={data.image} alt="" 
                                    className='h-20 w-20 rounded-full'
                                />
                            </div>
                            <div className='text-2xl'>{data.rating}</div>
                            <p>{data.review}</p>
                            <p className='font-semibold text-center text-primary'>{data.name}</p>
                        </div>
                    )
                })
            }
        </div>
      </div>
    </div>
  )
}

export default Testimonial
