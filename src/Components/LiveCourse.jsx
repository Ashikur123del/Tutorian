import React, { useState } from 'react'
import Course1 from '../assets/images/Course1.png'
import Course2 from '../assets/images/Coures2.png'
import Course3 from '../assets/images/Coures3.png'
import Course4 from '../assets/images/Coures4.png'

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
    <div className='bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col p-4 transition-all hover:shadow-md'>
      <div className='relative rounded-xl overflow-hidden h-48 mb-5'>
        <img
          src={course.image}
          alt={course.title}
          className='w-full h-full object-cover'
        />
        <div className='absolute bottom-2 left-0 right-0 flex justify-center gap-1.5 px-2'>
          {course.batches.map((batch, index) => (
            <span
              key={index}
              className='bg-white/95 text-xs px-2.5 py-2 rounded-md border border-gray-300 text-gray-700 font-semibold shadow-sm'
            >
              {batch}
            </span>
          ))}
        </div>
      </div>
      <div className='flex-grow text-left mb-6'>
        <h3 className='text-[20px] font-extrabold text-[#1a1a1a] mb-2 leading-[1.3]'>
          {course.title}
        </h3>
        <p className='text-[14px] text-gray-500 font-medium leading-relaxed'>
          {course.description}
        </p>
      </div>
      <div className='mt-auto'>
        <button className='w-full bg-[#f42a6b] hover:bg-[#d61f5c] text-white font-bold py-3.5 rounded-xl transition-colors text-[15px]'>
          Course Details
        </button>
      </div>
    </div>
  )
}

export default function CourseSelection () {
  const [activeCategory, setActiveCategory] = useState('সকল')

  // ৬টি ক্যাটেগরি
  const categories = [
    'সকল',
    'ডিজাইন',
    'ফ্রিল্যান্সিং',
    'প্রোগ্রামিং',
    'মার্কেটিং',
    'ব্যবসা'
  ]

  const filteredCourses =
    activeCategory === 'সকল'
      ? courses
      : courses.filter(course => course.category === activeCategory)

  return (
    <div className='bg-[#fcfcfc] min-h-[80vh] py-16 px-6 font-sans'>
      <div className='container mx-auto'>
        <div className='flex flex-col md:flex-row md:items-center justify-between gap-8 mb-14'>
          <h1 className='text-3xl md:text-4xl font-black text-[#1a1a1a] tracking-tight'>
            আমাদের লাইভ কোর্স সমূহ
          </h1>

          <div className='flex flex-wrap gap-3'>
            {categories.map((cat, index) => {
              const count =
                cat === 'সকল'
                  ? courses.length
                  : courses.filter(c => c.category === cat).length

              return (
                <button
                  key={index}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex flex-col items-center justify-center min-w-[95px] py-2.5 px-4 rounded-xl border transition-all ${
                    activeCategory === cat
                      ? 'bg-white border-gray-400 shadow-md ring-1 ring-gray-400'
                      : 'bg-[#f8fafc] border-gray-200 hover:border-gray-300 text-gray-600'
                  }`}
                >
                  <span className='text-[14px] font-bold text-gray-800'>
                    {cat}
                  </span>
                  <span className='text-[11px] text-gray-400 mt-0.5'>
                    {count} কোর্স
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {filteredCourses.length > 0 ? (
            filteredCourses.map(course => (
              <LiveCourse key={course.id} course={course} />
            ))
          ) : (
            <p className='col-span-full text-center py-20 text-gray-400 '>
              কোনো কোর্স পাওয়া যায়নি।
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
