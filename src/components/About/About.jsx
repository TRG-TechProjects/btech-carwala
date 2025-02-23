import React from 'react'
import yellowCar from '../../assets/y2car.png'

const About = () => {
  return (
    <div className="py-24 bg-gray-200 dark:bg-dark dark:text-white duration-300 relative -z-20 sm:grid sm:place-items-center">
      <div className="container flex">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div
            data-aos="slide-right"
            data-aos-duration="1500"
            data-aos-once="false"
          >
            <img src={yellowCar} alt=""
              className='sm:scale-105 sm:-translate-x-11 max-h-[560px] drop-shadow=[2px_20px_6px_rgba(0,0,0,0.50)]'
            />
          </div>
          <div>
            <div className='space-y-5 sm:p-16 pb-6'>
              <h1
                data-aos="fade-up"
                className='pb-8 text-3xl sm:text-4xl font-bold font-serif'>About Us
              </h1>
              <p
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit debitis eos quas quos quasi amet praesentium illum, et nisi, magni minima atque est nulla!
              </p>
              <p
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sunt dolorem doloribus.
              </p>
              <button
                data-aos="fade-up"
                data-aos-duration="1500"
                className='button'>See more details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
