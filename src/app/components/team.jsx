import React from 'react'
import Image from "next/image";
import v1 from 'public/v1.jpeg';
import j1 from 'public/j1.jpeg';
import jw1 from 'public/jw1.jpeg';


const team = () => {
  return (
    <div className=" rounded-4x py-24">
      <div className="p-10 mx-20 flex flex-col items-center">
        <div className="max-w-2xl">
          <h2 className="block font-display tracking-tight [text-wrap:balance] text-4xl font-medium sm:text-4xl text-orange-500">
            Team
          </h2>
        </div>
        <div className="lg:col-span-3 mt-10">
          <ul className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8'>
            <li>
              <div className='opacity-95'>
                <div className='group relative overflow-hidden rounded-3xl bg-neutral-100'>
                  <Image src={v1} className='h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105'></Image>
                  <div className='absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6'>
                    <p className='font-display text-base/6 font-semibold tracking-wide text-white'>Varrene</p>
                    <p className='mt-2 text-sm text-white'>Co-founder</p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className='opacity-95'>
                <div className='group relative overflow-hidden rounded-3xl bg-neutral-100'>
                  <Image src={j1} className='h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105'></Image>
                  <div className='absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6'>
                    <p className='font-display text-base/6 font-semibold tracking-wide text-white'>Jun Bin</p>
                    <p className='mt-2 text-sm text-white'>Co-founder</p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className='opacity-95'>
                <div className='group relative overflow-hidden rounded-3xl bg-neutral-100'>
                  <Image src={jw1} className='h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105'></Image>
                  <div className='absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6'>
                    <p className='font-display text-base/6 font-semibold tracking-wide text-white'>Jasmine</p>
                    <p className='mt-2 text-sm text-white'>Co-founder</p>
                  </div>
                </div>
              </div>
            </li>




          </ul>

          
          
        </div>
        
      </div>      
    </div>
  )
}

export default team