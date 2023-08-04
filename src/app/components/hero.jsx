import React from 'react'
import Image from "next/image";
import image1 from 'public/Pixel1.png';

const hero = () => {
  return (
    <div className='p-10 mx-20 flex flex-row items-center'>
        <div>
            <h3 className='text-white'>REGISTER YOUR INTEREST NOW</h3>
            <h1 className='text-white text-4xl'>SLOTSY</h1>
            <h2 className='text-white text-xl'>Ultimate Service-Based Marketplace</h2>

            <hr className='my-5'/>
            <p className='text-white'>
                Discover a new way to access services. Slotsy revolutionizes how you connect with services. Simplifying your search and access top-notch solutions with Slotsy.
            </p>
          
        </div>
        <div>
            <Image src={image1} className='rounded-lg object-cover'></Image>
        </div>



    </div>
  )
}

export default hero