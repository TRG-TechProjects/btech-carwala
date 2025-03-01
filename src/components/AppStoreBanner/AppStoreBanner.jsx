import React from 'react'
import banner from "../../assets/appStoreBanner.jpg"
import playStoreImg from "../../assets/playstore.png"
import appStoreImg from "../../assets/appstore.png"


const bannerImg = {
    backgroundImage: `url(${banner})`,
    backgroundRepeat: "no-repeate",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "50%",
    width: "100%",
}

const AppStoreBanner = () => {
  return (
  <div className='pt-16 pb-8 bg-gray-200 dark:bg-dark dark:text-white grid place-items-center'>
    <div className='container'>
      <div 
      data-aos="fade-up"
      className="text-black p-8 sm:min-h-[375px] sm:grid sm:place-items-center rounded-xl"
      style={bannerImg}
      >
        <div>
            <div className='space-y-6 max-w-xl mx-auto'>
                <h1
                 data-aos="fade-up"
                 className='text-2xl text-center sm:text-4xl font-semibold font-serif'>Get Started with Our App</h1>
                <p
                 data-aos="fade-up"
                 className='text-center sm:px-20'>Download our app now and hit the road with ease, enjoying seamless bookings, exclusive deals, and a wide range of vehicles at your fingertips.</p>
                 <div 
                  data-aos="fade-up"
                 className='flex justify-center items-center ml-5'>
                    <a href="#">
                        <img src={playStoreImg} alt="" 
                            className='max-w-[160px] ]'
                        />
                    </a>
                    <a href="#">
                        <img src={appStoreImg} alt="" 
                            className='max-w-[160px]'
                        />
                    </a>
                 </div>
            </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AppStoreBanner
