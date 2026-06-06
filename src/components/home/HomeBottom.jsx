

import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottom = () => {
  return (
    <div className='font-[font-2] flex flex-col sm:flex-row items-center justify-center gap-4'>
      <div className='border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] flex items-center justify-center px-8 border-white rounded-full uppercase'>
        <Link className='text-[8vw] md:text-[6vw] sm:text-[10vw] leading-none flex items-center justify-center' to="/projects">
          Projects
        </Link>
      </div>

      <div className='border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] flex items-center justify-center px-8 border-white rounded-full uppercase'>
        <Link className='text-[8vw] md:text-[6vw] sm:text-[10vw] leading-none flex items-center justify-center' to="/agence">
          Agence
        </Link>
      </div>
    </div>
  )
}

export default HomeBottom;