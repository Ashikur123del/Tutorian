import React from 'react'
import { motion } from 'framer-motion'
import Man1 from '../../assets/images/man1.png'
import Man2 from '../../assets/images/man2.png'
import Man3 from '../../assets/images/man3.png'
import BgHeroImg from '../../assets/images/BgHero.png'
import Bg1 from '../../assets/images/Bg-1.png'
import Bg2 from '../../assets/images/Bg-2.png'
import Bg3 from '../../assets/images/Bg-3.png'
import Folder from '../../assets/images/Folder.svg'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
}

const ImageCard = ({ bg, img, alt, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -10 }}
    className='rounded-2xl overflow-hidden bg-cover shadow-lg transform transition-all duration-500 hover:shadow-2xl'
    style={{ backgroundImage: `url(${bg})` }}
  >
    <img src={img} alt={alt} className='w-full h-auto object-cover' />
  </motion.div>
)

const imageCards = [
  { bg: Bg1, img: Man1, alt: 'Student 1', delay: 0.2 },
  { bg: Bg2, img: Man2, alt: 'Student 2', delay: 0.4 },
  { bg: Bg3, img: Man3, alt: 'Student 3', delay: 0.6 }
]

const Hero = () => (
  <section
    className='relative min-h-[90vh] flex items-center py-16 bg-cover bg-no-repeat z-0'
    style={{
      backgroundImage: `url(${BgHeroImg})`,
      backgroundPosition: 'center right'
    }}
  >
    <div className='container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        animate='visible'
        className='space-y-7'
      >
        <motion.div variants={fadeInUp} className='flex items-center gap-3'>
          <p className='text-xl font-medium text-gray-800'>শিখবো এখন লাইভে</p>
          <span className='relative flex h-3 w-3'>
            <span className='animate-ping absolute h-full w-full rounded-full bg-pink-400 opacity-75' />
            <span className='relative h-3 w-3 rounded-full bg-pink-500' />
          </span>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className='text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight'
        >
          সরকারি চাকরির সর্বোচ্চ <br /> প্রস্তুতি টিউটোরিয়ান
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className='text-gray-600 text-lg max-w-xl leading-relaxed'
        >
          সরকারি চাকরি হোক বা ইংরেজিতে দক্ষতা — সব প্রস্তুতি এখন ঘরে বসেই লাইভ
          ক্লাসে। প্রাইমারি, নিবন্ধন, গ্রেড ১০–২০, জব ইংলিশ ও স্পোকেন ইংলিশ এক
          প্ল্যাটফর্মে।
        </motion.p>

        <motion.button
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='inline-flex items-center gap-2 bg-[#FF006E] text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-pink-600 hover:shadow-pink-300 shadow-lg'
        >
          <img src={Folder} alt='folder' className='w-5' />
          সব কোর্স দেখুন
        </motion.button>
      </motion.div>

      <div className='flex gap-4 justify-center flex-nowrap'>
        <div className='flex flex-col gap-4'>
          {imageCards.slice(0, 2).map((card, idx) => (
            <ImageCard key={idx} {...card} />
          ))}
        </div>
        <div className='flex items-end'>
          <ImageCard {...imageCards[2]} />
        </div>
      </div>
    </div>
  </section>
)

export default Hero
