import React from 'react'
import carPng from '../../assets/darkCar.png';
import whiteCarPng from '../../assets/ycar.png';

const Hero = ({ theme }) => {
  return (
    <div className='dark:bg-black dark:text-white duration-300 relative -z-20'>
      <div className="container min-h-screen flex">
        <div className="grid place-items-center grid-cols-1 sm:grid-cols-2">
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="order-1 sm:order-2">
            <img src={theme === "dark" ? carPng : whiteCarPng} alt="" className='relative -z-10 max-h-[440px] sm:scale-125 drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]' />
          </div>
          <div className="order-2 sm:order-1 space-y-5 sm:pr-24">
            <p
              data-aos="fade-up"
              data-aos-duration="400"
              className='text-primary text-2xl font-serif'>Effortless</p>
            <h1
              data-aos="fade-up"
              data-aos-duration="800"
              className='text-5xl lg:text-7xl font-semibold font-serif'>Car Rental</h1>
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque minima quas facilis!</p>
            <button
              data-aos="fade-up"
              data-aos-duration="1500"
              className="button">Book now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero