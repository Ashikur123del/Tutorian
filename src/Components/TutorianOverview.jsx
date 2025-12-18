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
    { id: 3, title: 'ব্লগ / আর্টিকেল', icon: V1Img3 },
  ]

  const rightItems = [
    { id: 4, title: 'টিম টিউটোরিয়ান', icon: V1Img4 },
    { id: 5, title: 'গ্যালারি', icon: V1Img5 },
    { id: 6, title: 'সোশ্যাল মিডিয়া', icon: V1Img6 },
  ]

  const Card = ({ title, icon }) => (
    <div
      className="group flex flex-col items-center justify-center p-6 border border-blue-100 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 w-full min-h-[140px] md:min-h-[160px] cursor-pointer"
      style={{
        backgroundImage: `url(${V7Bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-20 h-20 md:w-24 md:h-24 mb-4 flex items-center justify-center bg-white rounded-full shadow group-hover:scale-110 transition-transform duration-300">
        <img src={icon} alt={title} className="w-10 h-10 md:w-12 md:h-12 object-contain" />
      </div>
      <h3 className="text-slate-700 font-bold text-center text-sm md:text-lg">{title}</h3>
    </div>
  )

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-16 text-slate-900">
          এক নজরে আমাদের টিউটোরিয়ান
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8 lg:gap-12">
          {/* Left Cards */}
          <div className="md:col-span-3 flex flex-col gap-6">
            {leftItems.map(item => (
              <Card key={item.id} {...item} />
            ))}
          </div>

          {/* Central Image */}
          <div
            className="md:col-span-6 flex justify-center items-center relative rounded-2xl"
            style={{
              backgroundImage: `url(${V7Bg})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <img
              src={V1Img7}
              alt="Central Visualization"
              className="relative z-10 w-full max-w-[400px] md:max-w-[500px] h-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-700 ease-in-out"
            />
          </div>

          {/* Right Cards */}
          <div className="md:col-span-3 flex flex-col gap-6">
            {rightItems.map(item => (
              <Card key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TutorianOverview
