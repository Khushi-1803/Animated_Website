

import React from 'react'
import Video from '../components/home/Video.jsx'
import HomeTop from '../components/home/HomeTop.jsx'
import HomeBottom from '../components/home/HomeBottom.jsx'

const Home = () => {
  return (
    <div className='text-white'>
      <div className='h-screen w-screen fixed'>
        <Video />
      </div>

      <div className='min-h-screen w-screen relative pb-5 flex flex-col justify-between'>
        <HomeTop />
        <HomeBottom />
      </div>
    </div>
  )
}

export default Home