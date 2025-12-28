import React from 'react'
import StatCard from './StatCard'
import {
  FaWallet,
  FaIdCard,
  FaFileAlt,
  FaSync,
  FaBookmark,
  FaGraduationCap,
  FaWhatsapp
} from 'react-icons/fa'

const Dashboard = () => {
  const stats = [
    {
      id: 1,
      title: 'আমার কোর্স',
      count: '1',
      icon: FaWallet,
      colorClass: 'bg-[#2f73ff]',
      link: '/dashboard/mycoures'
    },
    {
      id: 2,
      title: 'আমার পরীক্ষা',
      count: '3',
      icon: FaIdCard,
      colorClass: 'bg-[#cc1919]',
      link: '/dashboard/exams'
    },
    {
      id: 3,
      title: 'সার্টিফিকেট',
      count: '0',
      icon: FaFileAlt,
      colorClass: 'bg-[#45dd9b]',
      link: '/dashboard/certificates'
    },
    {
      id: 4,
      title: 'কোর্স প্রগ্রেস',
      count: '0',
      icon: FaSync,
      colorClass: 'bg-[#965eff]',
      link: '/dashboard/progress'
    },
    {
      id: 5,
      title: 'মোট নোটস',
      count: '0',
      icon: FaBookmark,
      colorClass: 'bg-[#ffb21c]',
      link: '/dashboard/notes'
    },
    {
      id: 6,
      title: 'সম্পূর্ণ কোর্স',
      count: '0',
      icon: FaGraduationCap,
      colorClass: 'bg-[#2580ed]',
      link: '/dashboard/completed'
    }
  ]

  return (
    <div className='p-3 md:p-10 bg-[#fbfbfb] min-h-screen'>
      {/* Top Header */}
      <div className='mb-8'>
        <h2 className='text-xl md:text-3xl font-bold text-[#2d3436]'>
          Good Afternoon,{' '}
          <span className='text-[#e91e63]'>Arifuzzaman Sobuj</span>
        </h2>
        <p className='text-sm text-gray-500 mt-1'>
          27th December 2025, Saturday
        </p>
        <hr className='mt-6 border-gray-100' />
      </div>

      {/* Main Layout Grid */}
      <div className='flex flex-col lg:flex-row gap-2 md:gap-8'>
        {/* Left: Stats Grid (6 cards) */}
        <div className='grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6 w-full lg:w-[70%]'>
          {stats.map(item => (
            <StatCard key={item.id} {...item} />
          ))}             
        </div>

        {/* Right: Course Status Sidebar Area */}
        <div className='w-full lg:w-[30%]'>
          <h3 className='text-xl md:text-2xl mt-6  text-center font-bold text-[#1a1c2e] md:mt-2'>
            কোর্স স্ট্যাটাস
          </h3>
        </div>
      </div>
      <a
        href='https://wa.me/your-number'
        target='_blank'
        rel='noopener noreferrer'
        className='fixed bottom-6 right-6 z-50 bg-[#000066] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center'
      >
        <FaWhatsapp size={35} />
      </a>
    </div>
  )
}

export default Dashboard
