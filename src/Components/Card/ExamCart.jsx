import React from 'react'
import { motion } from 'framer-motion'

// Assets
import CardBg from '../../assets/images/Card-bg.png'
import CardOverlay from '../../assets/images/imgmy.svg'
import m1 from '../../assets/images/m1.svg'
import m2 from '../../assets/images/m2.svg'
import m3 from '../../assets/images/m3.svg'
import m4 from '../../assets/images/m4.svg'

const ExamCart = () => {
  const programs = [
    { id: 1, title: 'জব কোর্স', icon: m1 },
    { id: 2, title: 'এক্সাম', icon: m2 },
    { id: 3, title: 'চাকরির প্রস্তুতি', icon: m3 },
    { id: 4, title: 'আইটি ক্যারিয়ার', icon: m4 }
  ]

  return (
    <section
      className='py-6 md:py-10 bg-[#F8FAFC] bg-cover bg-center overflow-hidden'
      style={{ backgroundImage: `url(${CardBg})` }}
    >
      <div className='container mx-auto px-2 md:px-4'>
        <h2 className='text-2xl md:text-4xl font-bold text-center mb-15 md:mb-20 text-[#1a1a1a] px-4'>
          আমাদের কোর্স ক্যাটাগরি সমূহ
        </h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-y-10 md:gap-y-24 gap-x-3 md:gap-2'>
          {programs.map(item => (
            <motion.div
              key={item.id}
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='relative flex flex-col items-center group'
            >
              <div className='absolute -top-10 md:-top-16 z-30'>
                <div className='w-20 h-20 md:w-30 md:h-30 bg-white rounded-full flex items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.08)] border-[3px] md:border-[6px] border-white transition-transform group-hover:scale-105'>
                  <img
                    src={item.icon}
                    alt={item.title}
                    className='w-20 h-20 md:w-40 md:h-40 object-contain'
                  />
                </div>
              </div>

              <div className='relative w-full h-32 md:h-60 flex items-end justify-center pb-5 md:pb-12'>
                <img
                  src={CardOverlay}
                  alt=''
                  className='absolute inset-0 w-full h-full object-fill'
                />
                <h3 className='relative z-10 font-bold text-sm md:text-2xl text-[#1a1a1a] text-center px-2 leading-tight'>
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExamCart
