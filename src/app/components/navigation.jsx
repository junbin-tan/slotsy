import React from 'react'

const navigation = () => {
  return (
    <div className='flex items-center justify-between max-w-screen-2xl mb-10 p-10 mx-20' >
      <h1 className='text-5xl text-white'>Slotsy</h1>
      <div className='flex flex-row justify-end gap-10'>
        <a href='#home' className='cursor-pointer hover:scale-125 text-white'>Home</a>
        <a href='#about' className='cursor-pointer hover:scale-125 text-white'>About</a>
        <a href='#features' className='cursor-pointer hover:scale-125 text-white'>Features</a>
        <a href='#team' className='cursor-pointer hover:scale-125 text-white'>Our Team</a>
        <a href='#contact' className='cursor-pointer hover:scale-125 text-white'>Contact Us</a>
      </div>

    </div>
  )
}

export default navigation