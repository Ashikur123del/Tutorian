import React from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { IoEyeOutline } from 'react-icons/io5'
import { LiaRandomSolid } from 'react-icons/lia'
import { AiOutlineHeart } from 'react-icons/ai'
import { HiOutlineShoppingBag } from 'react-icons/hi2'
import { FaStar } from 'react-icons/fa'

import banner from '../assets/images/Books.png'
import book from '../assets/images/Book.svg'
import { Link } from 'react-router-dom'

const books = [
  { id: 1, bg: 'bg-[#F2FFF4]' },
  { id: 2, bg: 'bg-[#FFF8ED]' },
  { id: 3, bg: 'bg-[#F2FBFF]' },
  { id: 4, bg: 'bg-[#F4F1FF]' }
]

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  hover: { scale: 1.02, transition: { duration: 0.3 } }
}

const Icon = ({ children, active }) => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className={`w-8 h-8 rounded-lg border flex items-center justify-center transition
    ${
      active
        ? 'bg-gradient-to-r from-[#FF7844] to-[#FC1C69] text-white border-transparent'
        : 'bg-white text-gray-400 border-gray-200 hover:bg-gradient-to-r hover:from-[#FF7844] hover:to-[#FC1C69] hover:text-white'
    }`}
  >
    {children}
  </motion.button>
)

// Reusable Book Card Component
const BookCard = ({ item }) => (
  <motion.div
    variants={cardVariants}
    initial='hidden'
    whileInView='visible'
    whileHover='hover'
    viewport={{ once: true }}
    className={`${item.bg} rounded-2xl p-4 flex gap-4 items-center h-full border border-transparent hover:border-gray-100 shadow-sm`}
  >
    <div className='bg-white p-3 rounded-xl shadow-sm min-w-[100px] w-28 h-36 flex items-center justify-center'>
      <img src={book} alt='book' className='h-full object-contain' />
    </div>
    <div className='flex-1'>
      <p className='text-[12px] text-gray-500 mb-1'>পদার্থবিজ্ঞান</p>
      <h4 className='font-bold text-[#4A4A4A] text-sm md:text-base mb-2 leading-tight'>
        পদার্থবিজ্ঞানের জানা অজানা বিষয় গুলো
      </h4>

      <div className='flex items-center gap-1 mb-2'>
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className='text-orange-400 text-[10px]' />
        ))}
        <span className='text-[10px] text-gray-400'>(5.0)</span>
      </div>

      <div className='flex items-center gap-2 mb-3'>
        <span className='text-[#FC1C69] font-bold text-sm md:text-base'>
          ৳ ২৫০.০০
        </span>
        <span className='text-gray-400 line-through text-[12px]'>৳৩০০.০০</span>
      </div>

      <div className='flex gap-1.5'>
        <Icon>
          <IoEyeOutline size={16} />
        </Icon>
        <Icon>
          <LiaRandomSolid size={16} />
        </Icon>
        <Icon>
          <AiOutlineHeart size={16} />
        </Icon>
        <Icon active>
          <HiOutlineShoppingBag size={16} />
        </Icon>
      </div>
      <div className=''>
        <Link
          to='/educationprat'
          className='mt-6 inline-block items-center gap-3 bg-gradient-to-r from-[#FF7844] to-[#FC1C69] text-white px-5 md:px-9 py-2 rounded-lg font-bold text-sm md:text-lg shadow-xl'
        >
          Book Details
        </Link>
      </div>
    </div>
  </motion.div>
)

const ExamBooks = () => {
  return (
    <section className='container mx-auto px-4 py-10 md:py-20'>
      <h2 className='text-2xl md:text-4xl font-extrabold text-center mb-10 text-[#2D2D2D]'>
        আমাদের সবচেয়ে জনপ্রিয় বই
      </h2>

      <div className='flex flex-col lg:flex-row gap-6 items-stretch'>
        {/* LEFT BANNER */}
        <motion.div
          className='lg:w-[35%] relative rounded-3xl overflow-hidden min-h-[300px]'
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <img
            src={banner}
            alt='banner'
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 p-8 flex flex-col justify-start pt-12'>
            <p className='text-sm font-medium text-gray-700 mb-2'>
              জনপ্রিয় জানা অজানা বইগুলো
            </p>
            <h3 className='text-2xl md:text-3xl font-black leading-tight mb-8 text-[#1A1A1A]'>
              যে বইগুলো আপনার <br /> ক্যারিয়ারের জন্য
            </h3>
            <Link to="/addtocards" className='bg-[#FF2E63] text-white px-6 py-3 rounded-xl w-fit flex items-center gap-2 font-bold hover:shadow-lg transition-all active:scale-95'>
              <span className='text-lg'>📚</span> সব বইগুলো দেখুন
            </Link>
          </div>
        </motion.div>

        <div className='w-full'>
          <div className='block lg:hidden'>
            <Swiper spaceBetween={15} slidesPerView={1.2} grabCursor={true}>
              {books.map(item => (
                <SwiperSlide key={item.id}>
                  <BookCard item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Desktop Grid (Hidden on Mobile) */}
          <div className='hidden lg:grid grid-cols-2 gap-5 h-full'>
            {books.slice(0, 4).map(item => (
              <BookCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExamBooks
