import React, { useState } from 'react'
import { HiOutlineVideoCamera, HiOutlineDownload } from 'react-icons/hi'
import { IoIosArrowDown } from 'react-icons/io'
import { FaPhoneAlt, FaPlayCircle, FaRegFilePdf } from 'react-icons/fa'
import { BsPlayCircleFill } from 'react-icons/bs'
import { motion, AnimatePresence } from 'framer-motion'
import { MdOutlinePlayCircleFilled } from "react-icons/md";

const CourseDashboard = () => {
  const [activeTab, setActiveTab] = useState('মডিউলসমূহ')
  const [openModule, setOpenModule] = useState(0)

  const tabs = ['মডিউলসমূহ', 'রেকর্ডিং', 'রিসোর্স', 'সার্টিফিকেট', 'এক্সাম', 'রেজাল্ট', 'প্রশিক্ষক']

  // মডিউল ডেটা (Screenshot 10 & 11 অনুযায়ী)
  const modules = [
    {
      id: 0,
      title: 'বেসিক টু এডভান্স ৭০ টি রেকর্ড ক্লাস',
      subtitle: '৬৪ টি ক্লাস রেকর্ডিং',
      classes: ['Class-01: Parts of speech Noun & its Details [Part-01]', 'Class-02: Noun & its Details [Part-02]']
    },
    {
      id: 1,
      title: 'm1',
      subtitle: 'No Class Found',
      classes: []
    }
  ]

  // রেকর্ডিং ডেটা (Screenshot 7 অনুযায়ী)
  const recordings = [
    { id: '01', title: 'Class-01: Lecture- 01 Parts of speech Noun & its Details [Part- 01]', duration: '০২:২৯:০৪' },
    { id: '02', title: 'Class-02: Lecture- 01 Noun & its Details [Part- 02]', duration: '০২:০৫:৪২' },
    { id: '03', title: 'Class-03: Lecture- 02 Pronoun [Part- 01]', duration: '০০:০০' },
    { id: '04', title: 'Class-04: Lecture- 02 Pronoun [Part- 02]', duration: '০৮:৩৭:৫৫' },
  ]

  const renderTabContent = () => {
    switch (activeTab) {
      case 'মডিউলসমূহ':
        return (
          <div className='space-y-3'>
            {modules.map(module => (
              <div key={module.id} className='border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm'>
                <div 
                  onClick={() => setOpenModule(openModule === module.id ? null : module.id)} 
                  className='flex items-center cursor-pointer hover:bg-gray-50'
                >
                  {/* Left Green Module Box (Screenshot 10) */}
                  <div className='bg-[#10b981] text-white p-3 flex flex-col items-center justify-center min-w-[75px] self-stretch'>
                    <span className='text-[10px] font-bold'>মডিউল</span>
                    <span className='text-lg font-black'>{module.id}</span>
                  </div>
                  
                  {/* Content (Screenshot 10 & 11) */}
                  <div className='flex-1 p-4 flex justify-between items-center'>
                    <div>
                      <h3 className='font-bold text-[#1e293b] text-sm md:text-base'>{module.title}</h3>
                      <div className='flex items-center gap-2 text-[11px] text-blue-600 mt-1 font-semibold'>
                        <HiOutlineVideoCamera /> <span>{module.subtitle}</span>
                      </div>
                    </div>
                    <motion.div animate={{ rotate: openModule === module.id ? 180 : 0 }}>
                      <IoIosArrowDown className='text-gray-400' />
                    </motion.div>
                  </div>
                </div>

                <AnimatePresence>
                  {openModule === module.id && module.classes.length > 0 && (
                    <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className='overflow-hidden border-t border-gray-400  bg-gray-50/50'>
                      {module.classes.map((cls, i) => (
                        <div key={i} className='p-4 border-b border-gray-100 last:border-none flex justify-between items-center'>
                          <div className='flex items-center gap-3'>
                            <MdOutlinePlayCircleFilled  className='text-[#ff507d] text-2xl shadow-2xl ' />
                            <span className='text-[13px] text-gray-700 font-medium'>{cls}</span>
                          </div>
                          <button className='text-[10px] flex gap-1 items-center font-bold border text-gray-600 border-gray-400 px-2 py-1 rounded-sm bg-[#eaecf0] hover:bg-slate-800 hover:text-white transition-all'>
                             <MdOutlinePlayCircleFilled  className='text-[#ff507d] text-sm shadow-2xl ' /> ক্লাস রেকর্ডিং
                          </button>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        )

      case 'রেকর্ডিং':
        return (
          <div className='border border-gray-200 rounded-xl overflow-hidden shadow-sm'>
            <table className='w-full text-left'>
              <thead>
                {/* Dark Header (Screenshot 7 & 8) */}
                <tr className='bg-[#1e293b] text-white'>
                  <th className='p-4 text-[13px] font-bold'>শিরোনাম</th>
                  <th className='p-4 text-[13px] font-bold text-center'>সময়কাল</th>
                  <th className='p-4 text-[13px] font-bold text-right'>দেখুন</th>
                </tr>
              </thead>
              <tbody>
                {recordings.map((rec, index) => (
                  <tr key={index} className='border-b border-gray-100 last:border-none hover:bg-blue-50/30 transition-colors'>
                    <td className='p-4 flex items-center gap-3'>
                      <BsPlayCircleFill className='text-blue-600 shrink-0' size={18} />
                      <span className='text-[13px] font-medium text-slate-700'>{rec.title}</span>
                    </td>
                    <td className='p-4 text-[13px] text-center font-mono text-gray-600'>{rec.duration}</td>
                    <td className='p-4 text-right'>
                      <button className='bg-gray-100 border border-gray-300 hover:bg-blue-600 hover:text-white px-4 py-1.5 rounded-lg text-xs font-bold transition-all inline-flex items-center gap-2'>
                         <MdOutlinePlayCircleFilled  /> দেখুন
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )

      case 'রিসোর্স':
        return (
          <div className='border border-gray-200 rounded-xl overflow-hidden'>
            {/* Header (Screenshot 8) */}
            <div className='bg-[#1e293b] p-4 flex justify-between text-white text-[13px] font-bold'>
              <span>শিরোনাম</span>
              <span>অ্যাকশন</span>
            </div>
            <div className='p-10 text-center flex flex-col items-center gap-2'>
              <FaRegFilePdf className='text-gray-300 text-4xl' />
              <p className='text-gray-400 font-bold'>রিসোর্স শীঘ্রই যুক্ত করা হবে</p>
            </div>
          </div>
        )

      case 'সার্টিফিকেট':
        return (
          /* Purple Banner (Screenshot 9) */
          <div className='bg-[#6366f1] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-lg border border-indigo-400'>
            <div className='flex items-center gap-4 z-10'>
              <div className='bg-white/20 p-3 rounded-lg border border-white/30'>
                <img src="https://cdn-icons-png.flaticon.com/512/2490/2490354.png" alt="cert" className='w-14 h-14' />
              </div>
              <div className='text-white'>
                <h2 className='text-xl md:text-2xl font-bold flex items-center gap-2'>
                  কমপ্লিশন সার্টিফিকেট 🥳
                </h2>
                <p className='text-white/80 text-[13px]'>সোশ্যাল মিডিয়াতে আপনার সাক্সেস শেয়ার করুন</p>
              </div>
            </div>
            <div className='flex flex-col gap-2 w-full md:w-auto z-10'>
              <button className='bg-white text-slate-800 px-8 py-2.5 rounded-lg font-extrabold text-xs hover:bg-gray-100 shadow-md transition-all'>ডাউনলোড</button>
              <button className='bg-[#ffb300] text-slate-900 px-8 py-2.5 rounded-lg font-extrabold text-xs hover:bg-[#ffa000] shadow-md transition-all'>শেয়ার</button>
            </div>
          </div>
        )

      default:
        return <div className='p-20 text-center text-gray-400 font-bold'>শীঘ্রই আসছে...</div>
    }
  }

  return (
    <div className='min-h-screen bg-gray-50/30 py-10'>
      <div className='container'>
        <div className='flex flex-col lg:flex-row gap-8'>
          
          {/* Main Content Area (Screenshot 10, 11) */}
          <div className='w-full lg:flex-1 bg-white rounded-[2rem] shadow-xl border border-gray-100 p-4 md:p-8'>
            
            {/* Tab Navigation (Screenshot 10 & 11) */}
            <div className='mb-8 overflow-x-auto pb-2'>
              <div className='flex gap-2 min-w-max'>
                {tabs.map(tab => (
                  <button 
                    key={tab} 
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-2.5 rounded-xl text-[13px] font-bold transition-all duration-300 ${
                      activeTab === tab 
                      ? 'bg-[#1e293b] text-white shadow-lg' 
                      : 'bg-gray-200/60 text-gray-500 hover:bg-gray-300'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Content Display */}
            <div className='min-h-[400px]'>
              {renderTabContent()}
            </div>
          </div>

          {/* Sidebar (Screenshot 11) */}
          <div className='w-full lg:w-80 shrink-0'>
            <div className='bg-white p-6 rounded-3xl border border-gray-100 shadow-sm sticky top-10'>
              <h2 className='text-lg font-bold text-slate-800 border-b-4 border-blue-900 inline-block mb-4'>প্রাইভেট গ্রুপে যোগ দিন</h2>
              <p className='text-sm text-gray-600 mb-6 leading-relaxed'>কোর্সের সকল আপডেট এবং লাইভ ক্লাসের লিংক পেতে যুক্ত হন।</p>
              <button className='w-full bg-blue-600 text-white font-bold py-3.5 rounded-2xl hover:bg-blue-700 shadow-md transition-all'>গ্রুপে জয়েন করুন</button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button (Screenshot 11) */}
      <div className='fixed bottom-8 right-8 z-50'>
        <motion.button 
          whileHover={{ scale: 1.1 }} 
          className='bg-[#000066] text-white p-5 rounded-[1.5rem] shadow-2xl flex items-center justify-center'
        >
          <FaPhoneAlt size={22} />
        </motion.button>
      </div>
    </div>
  )
}

export default CourseDashboard