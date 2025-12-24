import React from 'react'
import BgExam from '../assets/images/BgExam.png'
import ExamImg from '../assets/images/Bg-5.svg'
import img1 from '../assets/images/img-1.svg'
import img2 from '../assets/images/img-2.svg'
import img3 from '../assets/images/img-3.svg'
import img4 from '../assets/images/img-4.svg'

const ExamCorner = () => {
  const categories = [
    { id: 1, title: 'বিসিএস প্রস্তুতি', icon: img1 },
    { id: 2, title: 'ব্যাঙ্ক জব প্রস্তুতি', icon: img2 },
    { id: 3, title: 'মিলিটারি প্রস্তুতি', icon: img3 },
    { id: 4, title: 'শিক্ষক নিয়োগ', icon: img4 }
  ]

  const tags = ["স্কিলড মেন্টর", "লাইভ ক্লাস", "মডেল টেস্ট", "পিডিএফ নোটস", "সাপোর্ট গ্রুপ"]

  return (
    <div
      className='py-10 md:py-20 px-4 relative overflow-hidden'
      style={{
        backgroundImage: `url(${ExamImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className='container mx-auto text-center relative z-10'>
        <h2 className='text-white text-3xl md:text-5xl font-extrabold mb-6 tracking-tight'>
          এক প্ল্যাটফর্মে <span className="text-blue-400">সকল ধরনের</span> প্রস্তুতি
        </h2>

        {/* Tags Section */}
        <div className='flex flex-wrap justify-center gap-2 mb-8 md:mb-16'>
          {tags.map((tag, index) => (
            <span
              key={index}
              className='bg-white/10 backdrop-blur-md text-blue-200 px-5 py-2 rounded-full text-xs md:text-sm font-medium border border-white/20 hover:bg-white/20 transition-all cursor-default'
            >
              ✦ {tag}
            </span>
          ))}
        </div>

        {/* Categories Grid */}
        <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8'>
          {categories.map(cat => (
            <div
              key={cat.id}
              className='group relative rounded-3xl p-4 sm:p-6 flex flex-col items-center justify-center shadow-lg sm:shadow-2xl transition-all duration-300 cursor-pointer h-52 sm:h-64 md:h-72 overflow-hidden border border-white/10'
            >
              <div className='absolute inset-0 z-0'>
                <img
                  src={BgExam}
                  alt='bg'
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-[#102244] via-[#102244]/40 to-transparent"></div> */}
              </div>

              {/* Icon Container */}
              <div className='mb-4 sm:mb-6 relative z-10 transform transition-transform duration-300 group-hover:rotate-3'>
                <img
                  src={cat.icon}
                  alt={cat.title}
                  className='w-24 h-24 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain drop-shadow-xl'
                />
              </div>

              {/* Card Text */}
              <h3 className='text-black text-base sm:text-xl md:text-2xl font-bold relative z-10 group-hover:text-blue-300 transition-colors text-center'>
                {cat.title}
              </h3>

              {/* Decorative Bottom Line */}
              <div className="absolute bottom-0 left-0 h-1.5 bg-blue-500 w-0 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ExamCorner
