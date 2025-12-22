import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import Course1 from '../assets/images/Course1.png'
import Course2 from '../assets/images/Coures2.png'
import Course3 from '../assets/images/Coures3.png'
import Course4 from '../assets/images/Coures4.png'
import { Link } from 'react-router-dom'

const courses = [
  {
    id: 1,
    title: '১০-২০তম গ্রেড প্রিলি+লিখিত ফুল কোর্স',
    description: 'বিশেষজ্ঞদের পরামর্শে ভবিষ্যৎ গড়ুন বুদ্ধিমত্তার সাথে শিখুন।',
    image: Course1,
    category: 'ডিজাইন',
    batches: ['সকালের ব্যাচ', 'বিকালের ব্যাচ', 'রাতের ব্যাচ']
  },
  {
    id: 2,
    title: '১০-২০তম গ্রেড প্রিলি+লিখিত ফুল কোর্স',
    description: 'বিশেষজ্ঞদের পরামর্শে ভবিষ্যৎ গড়ুন বুদ্ধিমত্তার সাথে শিখুন।',
    image: Course2,
    category: 'ফ্রিল্যান্সিং',
    batches: ['সকালের ব্যাচ', 'বিকালের ব্যাচ', 'রাতের ব্যাচ']
  },
  {
    id: 3,
    title: '১০-২০তম গ্রেড প্রিলি+লিখিত ফুল কোর্স',
    description: 'বিশেষজ্ঞদের পরামর্শে ভবিষ্যৎ গড়ুন বুদ্ধিমত্তার সাথে শিখুন।',
    image: Course3,
    category: 'প্রোগ্রামিং',
    batches: ['সকালের ব্যাচ', 'বিকালের ব্যাচ', 'রাতের ব্যাচ']
  },
  {
    id: 4,
    title: '১০-২০তম গ্রেড প্রিলি+লিখিত ফুল কোর্স',
    description: 'বিশেষজ্ঞদের পরামর্শে ভবিষ্যৎ গড়ুন বুদ্ধিমত্তার সাথে শিখুন।',
    image: Course4,
    category: 'মার্কেটিং',
    batches: ['সকালের ব্যাচ', 'বিকালের ব্যাচ', 'রাতের ব্যাচ']
  }
]

const LiveCourse = ({ course }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className='bg-white rounded-3xl shadow-lg border border-gray-100 flex flex-col p-2 md:p-6 hover:shadow-2xl transition-all duration-300 h-full min-h-[480px] md:min-h-[520px]'
    >
      {/* Image Section */}
      <div className='relative rounded-2xl overflow-hidden h-56 md:h-64 mb-5'>
        <img
          src={course.image}
          alt={course.title}
          className='w-full h-full object-cover'
        />
        <div className='absolute bottom-3 left-0 right-0 flex flex-wrap justify-center gap-1.5 px-2'>
          {course.batches.map((batch, index) => (
            <span
              key={index}
              className='bg-white/90 backdrop-blur-sm text-[10px] md:text-xs px-2 py-1.5 rounded-lg border border-gray-200 text-gray-800 font-bold shadow-sm'
            >
              {batch}
            </span>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className='flex-grow text-left'>
        <h3 className='text-[20px] md:text-[24px] font-extrabold text-[#1a1a1a] mb-3 leading-tight'>
          {course.title}
        </h3>
        <p className='text-[14px] md:text-[16px] text-gray-500 font-medium leading-relaxed mb-6'>
          {course.description}
        </p>
      </div>

      {/* Action Button */}
      <Link
        to="/coure"
        className='w-full text-center bg-gradient-to-r from-[#FF7844] to-[#FC1C69] text-white font-bold py-4 rounded-2xl text-[16px] active:scale-95 transition-transform duration-200 shadow-lg shadow-orange-200'
      >
        Course Details
      </Link>
    </motion.div>
  )
}

export default function CourseSelection() {
  const [activeCategory, setActiveCategory] = useState('সকল')
  const categories = ['সকল', 'ডিজাইন', 'ফ্রিল্যান্সিং', 'প্রোগ্রামিং', 'মার্কেটিং', 'ব্যবসা']

  const filteredCourses =
    activeCategory === 'সকল'
      ? courses
      : courses.filter(course => course.category === activeCategory)

  return (
    <div className='bg-[#fcfcfc] min-h-screen py-8 md:py-16 px-4 font-sans overflow-hidden'>
      <div className='container mx-auto'>
        {/* Header & Tabs */}
        <div className='flex flex-col xl:flex-row xl:items-center justify-between gap-6 mb-12'>
          <h1 className='text-3xl md:text-4xl font-black text-[#1a1a1a] tracking-tight text-center md:text-left'>
            আমাদের লাইভ কোর্স সমূহ
          </h1>

          <div className='flex overflow-x-auto gap-2 pb-4 no-scrollbar -mx-4 px-2 md:mx-0 md:px-0'>
            {categories.map((cat, index) => {
              const count =
                cat === 'সকল'
                  ? courses.length
                  : courses.filter(c => c.category === cat).length
              const isActive = activeCategory === cat
              return (
                <button
                  key={index}
                  type="button" // prevents default form behavior
                  onClick={() => setActiveCategory(cat)}
                  className={`flex-shrink-0 flex flex-col items-center justify-center min-w-[100px] py-3 px-5 rounded-2xl border transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-br from-[#FF7844] to-[#FC1C69] text-white border-transparent shadow-xl'
                      : 'bg-white border-gray-200 text-gray-600 hover:border-orange-300'
                  }`}
                >
                  <span className='text-[14px] font-bold'>{cat}</span>
                  <span
                    className={`text-[11px] mt-0.5 ${
                      isActive ? 'text-white/80' : 'text-gray-400'
                    }`}
                  >
                    {count} কোর্স
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Courses Swiper */}
        <div className='relative'>
          {filteredCourses.length > 0 ? (
            <Swiper
              spaceBetween={20}
              slidesPerView={1.2}
              grabCursor={true}
              loop={filteredCourses.length > 1}
              breakpoints={{
                640: { slidesPerView: 1.3, spaceBetween: 15 },
                768: { slidesPerView: 2.2, spaceBetween: 20 },
                1024: { slidesPerView: 4, spaceBetween: 30 }
              }}
              className='course-swiper pb-16'
            >
              <AnimatePresence>
                {filteredCourses.map(course => (
                  <SwiperSlide key={course.id}>
                    <LiveCourse course={course} />
                  </SwiperSlide>
                ))}
              </AnimatePresence>
            </Swiper>
          ) : (
            <div className='text-center py-20'>
              <p className='text-gray-400 text-lg'>
                এই ক্যাটাগরিতে কোনো কোর্স পাওয়া যায়নি।
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
