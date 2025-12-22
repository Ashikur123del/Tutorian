import React from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

import Man1 from '../../assets/images/man1.png'
import Man2 from '../../assets/images/man2.png'
import Man3 from '../../assets/images/man3.png'
import Man4 from '../../assets/images/hero4.svg'
import Man5 from '../../assets/images/hero5.svg'

import bpsvg from '../../assets/images/bpsvg.svg'
import Bg1 from '../../assets/images/bg-1.png'
import Bg2 from '../../assets/images/Bg-2.png'
import Bg3 from '../../assets/images/Bg-3.png'
import Folder from '../../assets/images/Folder.svg'

// Animation
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
}

// Image Card
const ImageCard = ({ bg, img, alt }) => (
  <motion.div
    whileHover={{ y: -10 }}
    className='relative w-full h-[320px] sm:h-[380px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl bg-cover bg-center'
    style={{ backgroundImage: `url(${bg})` }}
  >
    <img
      src={img}
      alt={alt}
      className='w-full h-auto object-cover transition-transform duration-500 hover:scale-105'
    />
  </motion.div>
)

// Right Side Slider Cards
const cards = [
  { bg: Bg1, img: Man1, alt: 'Student 1' },
  { bg: Bg2, img: Man2, alt: 'Student 2' },
  { bg: Bg3, img: Man3, alt: 'Student 3' },
  { bg: Bg1, img: Man4, alt: 'Student 4' }, // new
  { bg: Bg2, img: Man5, alt: 'Student 5' }  // new
]

const Hero = () => {
  return (
    <section
      className='relative w-full min-h-[70vh] md:min-h-[90vh] flex items-center overflow-hidden'
      style={{
        backgroundImage: `url(${bpsvg})`,
        backgroundPosition: 'right center',
        backgroundSize: 'cover'
      }}
    >
      <div className='container mx-auto px-5 py-6'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-center'>

          {/* LEFT CONTENT */}
          <motion.div
            variants={stagger}
            initial='hidden'
            animate='visible'
            className='lg:col-span-7 space-y-3 md:space-y-6 text-center lg:text-left'
          >
            <motion.div variants={fadeUp} className='flex justify-center lg:justify-start items-center gap-3'>
              <p className='text-lg font-medium text-gray-800'>
                শিখবো এখন লাইভে
              </p>
              <span className='relative flex h-5 w-5'>
                <span className='animate-ping absolute h-full w-full rounded-full bg-gradient-to-r from-[#d65826] to-[#ee0d5c] opacity-75' />
                <span className='relative h-4 w-4 rounded-full bg-gradient-to-r from-[#FF7844] to-[#FC1C69]' />
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className='text-3xl md:text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight'
            >
              সরকারি চাকরির সর্বোচ্চ <br className='hidden md:block' />
              প্রস্তুতি{' '}
              <span className='bg-gradient-to-r from-[#FF7844] to-[#FC1C69] bg-clip-text text-transparent'>
                টিউটোরিয়ান
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className='text-gray-600 max-w-xl mx-auto lg:mx-0'
            >
              সরকারি চাকরি হোক বা ইংরেজিতে দক্ষতা — সব প্রস্তুতি এখন ঘরে বসেই লাইভ ক্লাসে।
            </motion.p>

            <motion.div variants={fadeUp}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='inline-flex items-center gap-3 bg-gradient-to-r from-[#FF7844] to-[#FC1C69] text-white px-8 py-4 rounded-xl font-bold shadow-lg'
              >
                <img src={Folder} alt='folder' className='w-5' />
                সব কোর্স দেখুন
              </motion.button>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE SLIDER */}
          <div className='lg:col-span-5 w-full max-w-[260px] sm:max-w-md lg:max-w-full mx-auto'>
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop
              speed={900}
              slidesPerView={1}
            >
              {cards.map((card, index) => (
                <SwiperSlide key={index}>
                  <ImageCard {...card} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
