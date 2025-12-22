import React from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

import CardBg from '../../assets/images/Card-bg.png'
import CardOverlay from '../../assets/images/Card-6.svg'

import m1 from '../../assets/images/m1.svg'
import m2 from '../../assets/images/m2.svg'
import m3 from '../../assets/images/m3.svg'
import m4 from '../../assets/images/m4.svg'

const programData = [
  { icon: m1, title: 'চাকরির প্রস্তুতি' },
  { icon: m2, title: 'ভর্তি প্রস্তুতি' },
  { icon: m3, title: 'একাডেমিক প্রোগ্রাম' },
  { icon: m4, title: 'এক্সাম' }
]

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
}

const ProgramCard = ({ icon, title }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -6, scale: 1.02 }}
      className='relative flex flex-col items-center pt-10 sm:pt-12 w-full max-w-[320px] md:max-w-[400px] mx-auto group'
    >
      <div className='absolute top-0 z-20'>
        <div
          className='w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-white rounded-full flex items-center justify-center 
                        shadow-[0_12px_24px_rgba(0,0,0,0.1)] border-4 border-white transition-transform group-hover:scale-105'
        >
          <img
            src={icon}
            alt={title}
            className='w-8 h-8 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain'
          />
        </div>
      </div>

      {/* কার্ড বডি */}
      <div
        className='relative w-full h-[140px] sm:h-[220px] md:h-[300px] bg-transparent flex flex-col justify-end pb-4 sm:pb-8'
        style={{
          backgroundImage: `url(${CardOverlay})`,
          backgroundPosition: 'bottom center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%'
        }}
      >
        <h3
          className='relative z-10 text-center font-bold text-[#1a1a1a] 
                       text-sm sm:text-xl md:text-3xl px-2'
        >
          {title}
        </h3>
      </div>
    </motion.div>
  )
}

const ExamCart = () => {
  return (
    <section
      className='py-5 md:py-20 bg-no-repeat bg-cover bg-center min-h-[150px] md:min-h-[600px]'
      style={{ backgroundImage: `url(${CardBg})` }}
    >
      <div className='container mx-auto px-4'>
        <h2 className='text-xl md:text-4xl font-black text-center mb-5 md:mb-10 text-[#1a1a1a]'>
          আমাদের প্রোগ্রাম সমূহ
        </h2>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={10}
          slidesPerView={2}
          breakpoints={{
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
              autoplay: { delay: 3000 }
            }
          }}
          autoplay={false}
          loop={true}
          grabCursor={true}
        >
          {programData.map((item, index) => (
            <SwiperSlide key={index}>
              <ProgramCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default ExamCart
