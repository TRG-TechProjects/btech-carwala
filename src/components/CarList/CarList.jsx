import React, { useState } from 'react'
import car1 from '../../assets/car1.png'
import car2 from '../../assets/car2.png'
import car3 from '../../assets/car3.png'
import car4 from '../../assets/car4.png'; // Add more cars if needed
import car5 from '../../assets/car5.png';
import car6 from '../../assets/car6.png';

const AllCarListData = [
    {
        name: "BMW M4",
        price: 1200,
        image: car1,
        distance: 240,
        aosDelay: "0"
    },
    {
        name: "PORSCHE 911",
        price: 1600,
        image: car2,
        distance: 160,
        aosDelay: "500"
    },
    {
        name: "BUGATTI CHIRON",
        price: 2400,
        image: car3,
        distance: 80,
        aosDelay: "1000"
    },
    { name: "LAMBORGHINI HURACÁN", 
        price: 1800, 
        image: car4, 
        distance: 150, 
        aosDelay: "0" 
    },
    { name: "FERRARI 488", 
        price: 1900, 
        image: car5, 
        distance: 100, 
        aosDelay: "500"
    },
    { name: "AUDI R8", 
        price: 1300, 
        image: car6, 
        distance: 200, 
        aosDelay: "1000" 
    },
]

const CarList = () => {

        const [showAllCars, setShowAllCars] = useState(false);
    
        // Initially show only 3 cars
        const visibleCars = showAllCars ? AllCarListData : AllCarListData.slice(0, 3);

    return (
        <div className='py-24 bg-gray-200 dark:bg-dark dark:text-white sm:grid sm:place-items-center'>
            <div className="container ">

                {/* heading */}
                <h1
                    data-aos="fade-up"
                    className='text-3xl sm:text-4xl font-semibold font-serif mb-3'>Your Suitable Cars
                </h1>
                <p data-aos="fade-up" className='text-base pb-16'>Find the perfect car for every journey - comfort, style, and performance guaranteed.
                </p>

                {/* car listing cards */}
                <div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pb-8'>
                        {/* {
                            // car data
                            CarListData.map((data) => {
                                return (
                                    <div
                                        data-aos="fade-up"
                                        data-aos-delay={data.aosDelay}
                                        className='space-y-3 border-2 border-gray-400 hover:dark:border-primary hover:bg-primary dark:hover:text-black p-3 rounded-xl relative group'
                                    >
                                        <div className='w-full h-[100px]'>
                                            <img
                                                className='w-full h-[120px] object-contain hover:sm:scale-125 duration-700'
                                                src={data.image} alt="" />
                                        </div>
                                        <div className='space-y-2'>
                                            <h1 className='dark:text-primary  font-semibold'>{data.name}</h1>
                                            <div className='flex justify-between items-centertext-xl font-semibold'>
                                                <p>Price: ${data.price}/Day</p>
                                                <a href="#">Details</a><br />
                                                <p className='text-xl font-semibold absolute top-1 left-3'>{data.distance}km</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        } */}

                        {visibleCars.map((data, index) => (
                            <div key={index}
                                data-aos="fade-up"
                                data-aos-delay={data.aosDelay}
                                className='space-y-3 border-2 border-gray-400 hover:dark:border-primary hover:bg-primary dark:hover:text-black p-3 rounded-xl relative group'
                            >
                                <div className='w-full h-[100px]'>
                                    <img className='w-full h-[120px] object-contain hover:sm:scale-125 duration-700' 
                                         src={data.image} alt={data.name} />
                                </div>
                                <div className='space-y-2'>
                                    <h1 className='dark:text-primary font-semibold'>{data.name}</h1>
                                    <div className='flex justify-between items-center text-xl font-semibold'>
                                        <p>Price: ${data.price}/Day</p>
                                        <a href="#">Details</a>
                                        <p className='text-xl font-semibold absolute top-1 left-3'>{data.distance}km</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* end of car listing cards
                <div className='grid place-content-center mt-8'>
                    <button
                        data-aos="fade-up"
                        className='button'>Explore more</button>
                </div> */}

                {/* Show More / Show Less Button */}
                <div className='grid place-content-center mt-8'>
                    <button 
                        data-aos="fade-up"
                        className='button'
                        onClick={() => setShowAllCars(!showAllCars)}
                    >
                        {showAllCars ? "Show less" : "Explore more"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CarList;
