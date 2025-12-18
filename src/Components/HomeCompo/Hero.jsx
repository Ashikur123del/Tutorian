import React from 'react'
import { motion } from 'framer-motion'

// Assets
import Man1 from '../../assets/images/man1.png'
import Man2 from '../../assets/images/man2.png'
import Man3 from '../../assets/images/man3.png'
import bpsvg from '../../assets/images/bpsvg.svg'
import Bg1 from '../../assets/images/bg-1.png'
import Bg2 from '../../assets/images/Bg-2.png'
import Bg3 from '../../assets/images/Bg-3.png'
import Folder from '../../assets/images/Folder.svg'

/* ================= Animations ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
}

/* ================= Image Card ================= */
const ImageCard = ({ bg, img, alt, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -10 }}
    className='relative w-full h-full rounded-2xl md:rounded-3xl overflow-hidden shadow-lg bg-cover bg-center'
    style={{ backgroundImage: `url(${bg})` }}
  >
    <img
      src={img}
      alt={alt}
      className='w-full h-full object-cover transition-transform duration-500 hover:scale-105'
    />
  </motion.div>
)

/* ================= Data ================= */
const cards = [
  { bg: Bg1, img: Man1, alt: 'Student 1', delay: 0.2 },
  { bg: Bg2, img: Man2, alt: 'Student 2', delay: 0.4 },
  { bg: Bg3, img: Man3, alt: 'Student 3', delay: 0.6 }
]

/* ================= Hero ================= */
const Hero = () => {
  return (
    <section
      className='relative w-full min-h-[90vh] flex items-center bg-no-repeat overflow-hidden'
      style={{
        backgroundImage: `url(${bpsvg})`,
        backgroundPosition: 'right center',
        backgroundSize: 'cover'
      }}
    >
      <div className='container mx-auto px-5 py-10 lg:py-0'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center'>
          {/* ================= Left Content ================= */}
          <motion.div
            variants={stagger}
            initial='hidden'
            animate='visible'
            className='lg:col-span-7 space-y-5 md:space-y-7 text-center lg:text-left'
          >
            <motion.div
              variants={fadeUp}
              className='flex items-center justify-center lg:justify-start gap-3'
            >
              <p className='text-base md:text-lg lg:text-xl font-medium text-gray-800'>
                শিখবো এখন লাইভে
              </p>
              <span className='relative flex h-3 w-3'>
                <span className='animate-ping absolute h-full w-full rounded-full bg-pink-400 opacity-75' />
                <span className='relative h-3 w-3 rounded-full bg-pink-500' />
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.2] md:leading-tight'
            >
              সরকারি চাকরির সর্বোচ্চ <br className='hidden md:block' />
              প্রস্তুতি <span className='text-[#FF006E]'>টিউটোরিয়ান</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className='text-gray-600 text-base md:text-lg lg:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed'
            >
              সরকারি চাকরি হোক বা ইংরেজিতে দক্ষতা — সব প্রস্তুতি এখন ঘরে বসেই
              লাইভ ক্লাসে। প্রাইমারি, নিবন্ধন, গ্রেড ১০–২০, জব ইংলিশ ও স্পোকেন
              ইংলিশ এক প্ল্যাটফর্মে।
            </motion.p>

            <motion.div
              variants={fadeUp}
              className='flex justify-center lg:justify-start'
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='inline-flex items-center gap-3 bg-[#FF006E] text-white px-7 md:px-9 py-3 md:py-4 rounded-xl md:rounded-2xl font-bold text-base md:text-lg shadow-xl hover:bg-pink-600 transition'
              >
                <img src={Folder} alt='folder' className='w-5 md:w-6' />
                সব কোর্স দেখুন
              </motion.button>
            </motion.div>
          </motion.div>

          {/* ================= Right Images ================= */}
          <div className='lg:col-span-5 w-full max-w-[320px] sm:max-w-md lg:max-w-full mx-auto'>
            <div className='grid grid-cols-2 gap-3 md:gap-4'>
              {/* Left Column of Images */}
              <div className='flex flex-col gap-3 md:gap-4'>
                <div className='aspect-[3/4]'>
                  <ImageCard {...cards[0]} />
                </div>
                <div className='aspect-[3/4]'>
                  <ImageCard {...cards[1]} />
                </div>
              </div>

              {/* Right Column of Image (The Tall One) */}
              <div className='flex items-center'>
                <div className='aspect-[3/5] w-full'>
                  <ImageCard {...cards[2]} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
