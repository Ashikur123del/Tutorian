import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Cardr from '../../assets/images/Cardr.svg' // আপনার ইমেজের পাথ অনুযায়ী ঠিক করে নিন

import {
  HiOutlineCheckCircle,
  HiChevronDown,
  HiLockClosed,
  HiOutlineUsers,
  HiOutlineVideoCamera,
  HiOutlineDocumentText,
  HiSparkles
} from 'react-icons/hi'

import {
  MdOutlineQuiz,
  MdOutlineMenuBook,
  MdOutlineTranslate,
  MdCalculate,
  MdOutlinePublic,
  MdOutlineScience,
  MdArrowForward
} from 'react-icons/md'

import { IoMdCart } from 'react-icons/io'
import { AiOutlinePlayCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import CouresShare from '../SherdComponents/CouresShare'

/* ===================== DATA ===================== */

const learnList = [
  'বাংলা, ইংলিশ, সাধারণ জ্ঞান, সাধারণ বিজ্ঞান ও গণিতের তথ্যবহুল ক্লাসের সাহায্যে নিজের সমস্যাগুলোর সঠিক সমাধান',
  'শিক্ষক নিয়োগ সংক্রান্ত সকল পরীক্ষায় সফল হবার বাস্তবিক কৌশল',
  'পড়ার ক্ষেত্রে গুরুত্বপূর্ণ টপিক বাছাই প্রক্রিয়া এবং স্বল্প সময়ে অধিক প্রস্তুতির টিপস এন্ড ট্রিক্স',
  'विषয়ভিত্তিক জ্ঞানের স্বল্পতা দূরীকরণের উপায়সমূহ'
]

const syllabusData = [
  {
    title: 'বাংলা',
    icon: <MdOutlineMenuBook />,
    color: 'bg-gradient-to-br from-orange-400 to-orange-500',
    open: true,
    subModules: [
      {
        subTitle: 'বাংলা ব্যাকরণের ইতিহাস',
        isLocked: false,
        lessons: [
          {
            title: 'বাংলা ব্যাকরণের ইতিহাসের প্রাথমিক দিক সমূহ',
            type: 'video',
            isFree: true
          },
          {
            title: 'বাংলা ব্যাকরণের ইতিহাসের কুইজ',
            type: 'quiz',
            isFree: true
          },
          { title: 'ব্যাকরণের প্রাথমিক দিক সমূহ', type: 'video', isFree: true },
          {
            title: 'ব্যাকরণের প্রাথমিক দিক সমূহ কুইজ',
            type: 'quiz',
            isFree: true
          },
          { title: 'ইতিহাসের প্রাথমিক দিক সমূহ', type: 'video', isFree: true },
          {
            title: 'ইতিহাসের প্রাথমিক দিক সমূহ কুইজ',
            type: 'quiz',
            isFree: true
          }
        ]
      },
      {
        subTitle: 'বাংলা ব্যাকরণের ইতিহাস',
        isLocked: true,
        lessons: [
          {
            title: 'বাংলা ব্যাকরণের ইতিহাসের প্রাথমিক দিক সমূহ',
            type: 'video',
            isFree: false
          },
          {
            title: 'বাংলা ব্যাকরণের ইতিহাসের কুইজ',
            type: 'quiz',
            isFree: false
          },
          {
            title: 'ব্যাকরণের প্রাথমিক দিক সমূহ',
            type: 'video',
            isFree: false
          },
          {
            title: 'ব্যাকরণের প্রাথমিক দিক সমূহ কুইজ',
            type: 'quiz',
            isFree: false
          },
          { title: 'ইতিহাসের প্রাথমিক দিক সমূহ', type: 'video', isFree: false },
          {
            title: 'ইতিহাসের প্রাথমিক দিক সমূহ কুইজ',
            type: 'quiz',
            isFree: false
          }
        ]
      }
    ]
  },
  {
    title: 'ইংরেজি',
    icon: <MdOutlineTranslate />,
    color: 'bg-gradient-to-br from-purple-500 to-purple-600',
    subModules: []
  },
  {
    title: 'গণিত',
    icon: <MdCalculate />,
    color: 'bg-gradient-to-br from-blue-500 to-blue-600',
    subModules: []
  },
  {
    title: 'সাধারণ জ্ঞান',
    icon: <MdOutlinePublic />,
    color: 'bg-gradient-to-br from-sky-400 to-sky-500',
    subModules: []
  },
  {
    title: 'সাধারণ বিজ্ঞান',
    icon: <MdOutlineScience />,
    color: 'bg-gradient-to-br from-pink-500 to-pink-600',
    subModules: []
  }
]

const faqCourse = [
  {
    q: "প্রাথমিক সহকারী শিক্ষক নিয়োগ পরীক্ষা ২০২৫' কোর্সটি যাদের জন্য",
    a: 'প্রাথমিক সহকারী শিক্ষক নিয়োগ সংক্রান্ত সরকারি-বেসরকারি যাবতীয় পরীক্ষাসমূহে সফল হতে চান যারা।'
  },
  {
    q: "প্রাথমিক সহকারী শিক্ষক নিয়োগ পরীক্ষা ২০২৫' কোর্স সম্পর্কে বিস্তারিত",
    a: 'এই কোর্সে আপনি পাবেন সম্পূর্ণ সিলেবাস ভিত্তিক প্রস্তুতি যা আপনাকে প্রতিযোগিতামূলক পরীক্ষায় এগিয়ে রাখবে।'
  }
]

const faqGeneral = [
  {
    q: 'কোর্সটি কীভাবে কিনবো?',
    a: "কোর্সটি কিনতে 'কোর্সটি কিনুন' বাটনে ক্লিক করুন এবং পেমেন্ট সম্পন্ন করুন।"
  },
  {
    q: 'বিকাশের মাধ্যমে কীভাবে পেমেন্ট করব?',
    a: 'বিকাশ পেমেন্ট গেটওয়ের মাধ্যমে খুব সহজেই টাকা পেমেন্ট করতে পারবেন।'
  },
  {
    q: 'কোর্সের ভর্তি বাতিল করা কি সম্ভব?',
    a: 'বিকাশ পেমেন্ট গেটওয়ের মাধ্যমে খুব সহজেই টাকা পেমেন্ট করতে পারবেন।'
  },
  {
    q: 'কোনো টেকনিকাল সমস্যা কীভাবে রিপোর্ট করব?',
    a: 'বিকাশ পেমেন্ট গেটওয়ের মাধ্যমে খুব সহজেই টাকা পেমেন্ট করতে পারবেন।'
  },
  {
    q: 'কেনার পর কোর্সটি কীভাবে শুরু করব?',
    a: 'বিকাশ পেমেন্ট গেটওয়ের মাধ্যমে খুব সহজেই টাকা পেমেন্ট করতে পারবেন।'
  }
]

/* ===================== COMPONENTS ===================== */

const LessonItem = ({ title, type, isFree }) => (
  <div className='flex justify-between items-center py-2 group cursor-pointer'>
    <div className='flex items-center gap-3'>
      <div
        className={`p-1 rounded text-lg ${
          type === 'video'
            ? 'text-green-500 bg-green-50'
            : 'text-orange-400 bg-orange-50'
        }`}
      >
        {type === 'video' ? <AiOutlinePlayCircle /> : <MdOutlineQuiz />}
      </div>
      <span className='text-[14px] text-slate-600 group-hover:text-blue-600 transition-colors font-medium'>
        {title}
      </span>
    </div>
    {!isFree && <HiLockClosed className='text-slate-300 text-lg' />}
  </div>
)

const AccordionItem = ({ title, icon, color, subModules, isOpenDefault }) => {
  const [isOpen, setIsOpen] = useState(isOpenDefault)

  return (
    <div className='border-b border-gray-100 last:border-0'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='w-full flex justify-between items-center p-5 hover:bg-slate-50/50 transition-all'
      >
        <div className='flex items-center gap-4'>
          <div
            className={`p-2.5 rounded-2xl text-white text-2xl shadow-sm ${color}`}
          >
            {icon}
          </div>
          <span className='font-bold text-slate-800 text-lg md:text-xl'>
            {title}
          </span>
        </div>
        <HiChevronDown
          className={`text-2xl text-slate-400 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className='overflow-hidden bg-white'
          >
            <div className='px-8 pb-6 space-y-6'>
              {subModules && subModules.length > 0 ? (
                subModules.map((sub, idx) => (
                  <div key={idx} className='space-y-3'>
                    {/* Sub-Module Header */}
                    <div className='flex items-center justify-between group cursor-pointer'>
                      <div className='flex items-center gap-2'>
                        <HiOutlineDocumentText className='text-slate-400 text-lg' />
                        <span className='text-slate-700 font-bold text-[15px]'>
                          {sub.subTitle}
                        </span>
                        <HiChevronDown className='text-slate-400 text-sm' />
                      </div>
                      {sub.isLocked && (
                        <HiLockClosed className='text-slate-400 text-lg' />
                      )}
                    </div>

                    {/* Lessons List */}
                    <div className='ml-2 pl-6 space-y-1 border-l border-slate-100'>
                      {sub.lessons.map((lesson, lIdx) => (
                        <LessonItem key={lIdx} {...lesson} />
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <div className='text-slate-400 italic text-center py-4'>
                  শীঘ্রই আসছে...
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false)
  return (
    <div
      className={`border-2 rounded-2xl transition-all ${
        open ? 'border-pink-100 bg-pink-50/10' : 'border-slate-100 bg-white'
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className='w-full flex justify-between p-5 text-left'
      >
        <span
          className={`font-bold ${open ? 'text-pink-600' : 'text-slate-700'}`}
        >
          {question}
        </span>
        <span
          className={`text-2xl transition-transform ${
            open ? 'rotate-45 text-pink-500' : 'text-slate-400'
          }`}
        >
          +
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className='px-5 pb-5 text-slate-600 text-sm overflow-hidden'
          >
            <div className='pt-3 border-t border-pink-50'>{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ===================== MAIN COMPONENT ===================== */

const CourseDetails = () => {
  return (
    <section className='py-12 md:py-20 bg-[#F8FAFF]'>
      <div className='container mx-auto px-4 '>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>
          <div className='lg:col-span-7 space-y-12'>
            <CouresShare />
            <div className='bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm'>
              <div className='flex items-center gap-3 mb-8'>
                <div className='h-8 w-1.5 bg-pink-500 rounded-full' />
                <h2 className='text-2xl md:text-3xl font-black text-slate-800'>
                  কোর্সটি থেকে যা শিখবেন
                </h2>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {learnList.map((item, i) => (
                  <div
                    key={i}
                    className='flex gap-4 p-4 rounded-2xl bg-slate-50/50 hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-slate-100'
                  >
                    <HiOutlineCheckCircle className='text-2xl text-green-500 flex-shrink-0' />
                    <p className='font-semibold text-slate-600 text-sm leading-relaxed'>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Syllabus Section */}
            <div>
              <div className='flex items-center justify-between mb-8'>
                <h2 className='text-2xl md:text-3xl font-black text-slate-800 tracking-tight'>
                  কোর্স সিলেবাস
                </h2>
                <span className='px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-bold border border-blue-100'>
                  ৫টি মডিউল
                </span>
              </div>
              <div className='bg-white rounded-[32px] border border-slate-100 shadow-xl shadow-slate-200/40 overflow-hidden'>
                {syllabusData.map((item, i) => (
                  <AccordionItem key={i} {...item} isOpenDefault={item.open} />
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className='space-y-4'>
              <div className='space-y-2'>
                <h2 className='text-2xl md:text-3xl font-black text-slate-800'>
                  বিস্তারিত জানুন
                </h2>
                <div className='space-y-2'>
                  {faqCourse.map((item, i) => (
                    <FAQItem key={i} question={item.q} answer={item.a} />
                  ))}
                </div>
              </div>
              <div className='space-y-6'>
                <h2 className='text-2xl md:text-3xl font-black text-slate-800'>
                  জিজ্ঞাসা ও উত্তর
                </h2>
                <div className='space-y-4'>
                  {faqGeneral.map((item, i) => (
                    <FAQItem key={i} question={item.q} answer={item.a} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className='lg:col-span-5 mx-auto relative top-0 md:-top-60 max-w-[420px] w-full'>
            <div className='lg:sticky lg:top-10'>
              <div className='bg-white rounded-[18px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden'>
                <div className='p-4 pb-0'>
                  <div className='relative aspect-[16/10] w-full rounded-[18px] overflow-hidden group cursor-pointer bg-slate-100'>
                    <img
                      src={Cardr}
                      alt='course'
                      className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                    />

                    {/* Overlay */}
                    <div className='absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/40 transition-all'>
                      <div className='relative flex items-center justify-center'>
                        <span className='absolute w-16 h-16 rounded-full bg-white/30 animate-ping'></span>
                        <div className='w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl'>
                          <AiOutlinePlayCircle
                            size={32}
                            className='text-[#FF1E67]'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='p-6 md:p-8 space-y-6'>
                  <div className='space-y-1'>
                    <div className='flex items-center gap-2'>
                      <span className='bg-pink-100 text-pink-600 px-2 py-0.5 rounded-md text-[12px] font-bold'>
                        ৩০% ছাড়
                      </span>
                      <span className='line-through text-slate-400 text-sm'>
                        ৳৩৫০০
                      </span>
                    </div>
                    <div className='text-4xl font-black text-slate-800'>
                      ৳২৫৫০
                    </div>
                  </div>

                  {/* TITLE */}
                  <h3 className='font-bold text-xl text-slate-700 leading-tight min-h-[56px]'>
                    প্রাথমিক সহকারী শিক্ষক নিয়োগ পরীক্ষা স্পেশাল কোর্স
                  </h3>

                  {/* BUY BUTTON */}
                  <Link
                    to='/mycards'
                    className='w-full bg-[#FF1E67] hover:bg-[#D91656] text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 shadow-lg shadow-pink-200 transition-all active:scale-[0.98]'
                  >
                    <IoMdCart size={22} />
                    কোর্সটি কিনুন
                    <MdArrowForward />
                  </Link>

                  {/* FEATURES - Optimized Spacing */}
                  <div className='grid grid-cols-1 gap-3.5 pt-2'>
                    {[
                      {
                        icon: <HiOutlineUsers />,
                        text: '৬৫,০০৩ জন এনরোল করেছেন',
                        color: 'text-blue-500'
                      },
                      {
                        icon: <HiOutlineVideoCamera />,
                        text: '৯৪ টি প্রিমিয়াম ভিডিও',
                        color: 'text-purple-500'
                      },
                      {
                        icon: <HiOutlineDocumentText />,
                        text: '৯৪ টি লেকচার শিট',
                        color: 'text-orange-500'
                      },
                      {
                        icon: <MdOutlineQuiz />,
                        text: '৯৪ টি স্পেশাল কুইজ',
                        color: 'text-green-500'
                      }
                    ].map((feat, i) => (
                      <div
                        key={i}
                        className='flex gap-3 items-center text-slate-600 font-medium text-sm'
                      >
                        <span
                          className={`${feat.color} text-xl bg-slate-50 p-1.5 rounded-lg`}
                        >
                          {feat.icon}
                        </span>
                        {feat.text}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CourseDetails
