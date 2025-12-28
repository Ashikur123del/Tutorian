import React from 'react'
import { Link } from 'react-router-dom'

const StatCard = ({ icon: Icon, title, count, colorClass, link }) => (
  <Link to={link} className='block h-full'>
    <div className='bg-white backdrop-blur-4xl md:p-8 p-2 rounded-xl flex flex-col items-center justify-center shadow-sm hover:shadow-xl transition-all duration-300 h-full border border-gray-50/50'>
      <div
        className={`w-20 h-20 flex items-center justify-center mb-3 rounded-full ${colorClass} text-white shadow-sm`}
      >
        <Icon size={40} />
      </div>

      <div className='text-center'>
        <h3 className='text-base font-medium text-gray-700 mb-1'>{title}</h3>
        <div className='text-xl font-bold text-gray-700'>{count}</div>
      </div>
    </div>
  </Link>
)

export default StatCard
