import React from 'react'
import V1Img1 from '../assets/images/V1.svg'
import V1Img2 from '../assets/images/V2.svg'
import V1Img3 from '../assets/images/V3.svg'
import V1Img4 from '../assets/images/V4.svg'
import V1Img5 from '../assets/images/V5.svg'
import V1Img6 from '../assets/images/V6.svg'
import V1Img7 from '../assets/images/V7.svg'
import V7Bg from '../assets/images/V7bg.png'

const TutorianOverview = () => {
  const leftItems = [
    { id: 1, title: 'সকল সেবার লিস্ট', icon: V1Img1 },
    { id: 2, title: 'আমাদের শিক্ষকবৃন্দ', icon: V1Img2 },
    { id: 3, title: 'ব্লগ / আর্টিকেল', icon: V1Img3 }
  ]

  const rightItems = [
    { id: 4, title: 'টিম টিউটোরিয়ান', icon: V1Img4 },
    { id: 5, title: 'গ্যালারি', icon: V1Img5 },
    { id: 6, title: 'সোশ্যাল মিডিয়া', icon: V1Img6 }
  ]

  const Card = ({ title, icon }) => (
    <div
      className='group flex flex-col items-center justify-center p-4 md:p-6 border border-blue-100 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 w-full min-h-[140px] md:min-h-[160px] cursor-pointer'
      style={{
        backgroundImage: `url(${V7Bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className='w-16 h-16 md:w-20 md:h-20 mb-3 md:mb-4 flex items-center justify-center bg-white rounded-full shadow group-hover:scale-110 transition-transform duration-300'>
        <img
          src={icon}
          alt={title}
          className='w-10 h-10 md:w-12 md:h-12 object-contain'
        />
      </div>
      <h3 className='text-slate-700 font-bold text-center text-sm md:text-lg'>
        {title}
      </h3>
    </div>
  )

  return (
    <section className='py-4 md:py-20 px-4 bg-white'>
      <div className='w-full container mx-auto'>
        <h2 className='text-2xl md:text-4xl font-black text-center mb-8 md:mb-16 text-slate-900'>
          এক নজরে আমাদের টিউটোরিয়ান
        </h2>

        {/* Desktop layout */}
        <div className='hidden lg:flex items-start justify-between w-full gap-8 px-4'>
          {/* Left cards */}
          <div className='flex flex-col gap-6 w-1/4'>
            {leftItems.map(item => (
              <Card key={item.id} {...item} />
            ))}
          </div>

          {/* Central image */}
          <div className='flex justify-center items-center w-1/2'>
            <img
              src={V1Img7}
              alt='Central Visualization'
              className='w-full max-w-[500px] h-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-700 ease-in-out'
            />
          </div>

          {/* Right cards */}
          <div className='flex flex-col gap-6 w-1/4'>
            {rightItems.map(item => (
              <Card key={item.id} {...item} />
            ))}
          </div>
        </div>

        {/* Mobile & Tablet layout */}
        <div className='grid grid-cols-2 gap-4 lg:hidden w-full'>
          {leftItems.concat(rightItems).map(item => (
            <Card key={item.id} {...item} />
          ))}

          {/* Central image full width */}
          <div className='col-span-2 flex justify-center mt-4'>
            <img
              src={V1Img7}
              alt='Central Visualization'
              className='w-full max-w-[350px] h-auto drop-shadow-2xl'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TutorianOverview
