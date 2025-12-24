import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Assets
import Man1 from '../../assets/images/man1.png'
import Man2 from '../../assets/images/man2.png'
import Man3 from '../../assets/images/man3.png'
import bpsvg from '../../assets/images/bpsvg.svg'
import Bg1 from '../../assets/images/bg-1.png'
import Bg2 from '../../assets/images/Bg-2.png'
import Bg3 from '../../assets/images/Bg-3.png'
import Folder from '../../assets/images/Folder.svg'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
}

const slides = [
  {
    leftTop: { bg: Bg1, img: Man1 },
    leftBottom: { bg: Bg2, img: Man2 },
    rightLarge: { bg: Bg3, img: Man3 }
  },
  {
    leftTop: { bg: Bg2, img: Man2 },
    leftBottom: { bg: Bg3, img: Man3 },
    rightLarge: { bg: Bg1, img: Man1 }
  },
  {
    leftTop: { bg: Bg3, img: Man3 },
    leftBottom: { bg: Bg1, img: Man1 },
    rightLarge: { bg: Bg2, img: Man2 }
  }
]

const Hero = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      className='relative w-full min-h-[80vh] lg:min-h-[85vh] flex items-center overflow-hidden bg-[#F8FAFF]'
      style={{
        backgroundImage: `url(${bpsvg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
    >
      <div className='container mx-auto px-4 sm:px-6 py-4 md:py-8 lg:py-0'>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10'>
          
          {/* LEFT CONTENT */}
          <motion.div
            variants={stagger}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='w-full lg:w-[45%] space-y-5 text-center lg:text-left order-2 lg:order-1'
          >
            <motion.div variants={fadeUp} className='flex justify-center lg:justify-start'>
              <div className='px-4 py-1.5 bg-white rounded-full flex items-center gap-2 shadow-sm border border-gray-100'>
                <p className='font-bold text-gray-800 text-xs sm:text-base'>
                  শিখবো এখন লাইভে
                </p>
                <span className='relative flex h-2 w-2'>
                  <span className='animate-ping absolute h-full w-full rounded-full bg-pink-500 opacity-75' />
                  <span className='relative h-2 w-2 rounded-full bg-[#FC1C69]' />
                </span>
              </div>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1a1a1a] leading-[1.3]'
            >
              সরকারি চাকরির সর্বোচ্চ <br className='hidden sm:block' />
              <span className='text-[#333]'>প্রস্তুতি <span className='text-[#FC1C69]'>টিউটোরিয়ান</span></span>
            </motion.h1>

            <motion.div variants={fadeUp}>
              <p className='text-gray-600 text-sm font-semibold sm:text-lg lg:text-xl font-medium max-w-xl mx-auto lg:mx-0'>
                সরকারি চাকরি হোক বা ইংরেজিতে দক্ষতা, সব প্রস্তুতি এখন ঘরে বসেই
                লাইভ ক্লাসে! প্রাইমারি, নিবন্ধন সব একসাথে।
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className='pt-2'>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='inline-flex items-center gap-3 bg-[#FC1C69] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-sm sm:text-lg'
              >
                <img src={Folder} alt='' className='w-4 h-4 sm:w-5 sm:h-5 invert brightness-0' />
                সব কোর্স দেখুন
              </motion.button>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGES - Mobile Optimized Size */}
          <div className='w-full lg:w-[55%] h-auto relative order-2'>
            <AnimatePresence mode='wait'>
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.6 }}
                className='grid grid-cols-2 gap-3 sm:gap-4 max-w-[400px] sm:max-w-[500px] lg:max-w-none mx-auto'
              >
                {/* Left Column */}
                <div className='flex flex-col gap-3 sm:gap-4'>
                  <div className='h-[140px] sm:h-[220px] lg:h-[280px] relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-md bg-white/50'>
                    <img src={slides[index].leftTop.bg} className='absolute inset-0 w-full h-full object-cover' />
                    <img src={slides[index].leftTop.img} className='relative z-10 w-full h-full object-contain pt-2' />
                  </div>
                  <div className='h-[140px] sm:h-[220px] lg:h-[280px] relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-md bg-white/50'>
                    <img src={slides[index].leftBottom.bg} className='absolute inset-0 w-full h-full object-cover' />
                    <img src={slides[index].leftBottom.img} className='relative z-10 w-full h-full object-contain pt-2' />
                  </div>
                </div>

                {/* Right Column (Large Box) */}
                <div className='h-[292px] sm:h-[456px] lg:h-[576px] relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg bg-white/50'>
                  <img src={slides[index].rightLarge.bg} className='absolute inset-0 w-full h-full object-cover' />
                  <img src={slides[index].rightLarge.img} className='relative z-10 w-full h-full object-contain pt-4 sm:pt-10' />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero