import React from 'react'
import {
  FaRegBell,
  FaChevronDown,
  FaUserAlt,
  FaHome,
  FaSignOutAlt,
  FaBars
} from 'react-icons/fa'

const Header = ({ setIsSidebarOpen }) => {
  return (
    <nav className='flex justify-between items-center px-4 md:px-8 py-4 bg-white/80 backdrop-blur-xl border-b border-gray-200 sticky top-0 z-[40]'>
      {/* Left Section */}
      <div className='flex items-center gap-4'>
        <button
          className='lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors'
          onClick={() => setIsSidebarOpen(true)}
        >
          <FaBars size={20} />
        </button>

        <a
          href='/'
          className='hidden sm:flex px-6 py-2 rounded-full border border-gray-200 text-gray-700 font-medium items-center gap-2 hover:bg-gray-900 hover:text-white transition-all duration-300'
        >
          <FaHome /> Home
        </a>
      </div>

      {/* Right Section */}
      <div className='flex items-center gap-3 md:gap-6'>
        {/* Notification */}
        <div className='relative group'>
          <button className='relative p-2 rounded-full hover:bg-gray-100 transition-colors duration-300'>
            <FaRegBell size={22} />
            <span className='absolute -top-1 -right-1 flex items-center justify-center bg-pink-500 text-white text-[10px] font-semibold w-5 h-5 rounded-full'>
              15+
            </span>
          </button>

          <div className='absolute right-[-50px] sm:right-0 mt-3 w-72 sm:w-80 bg-white rounded-2xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-50'>
            <div className='p-4 font-bold bg-gray-50 rounded-t-2xl border-b border-gray-400'>
              Notifications
            </div>
            <div className='max-h-64 overflow-y-auto'>
              {[1, 2, 3].map(i => (
                <div
                  key={i}
                  className='p-4 border-b border-gray-100 hover:bg-blue-50 cursor-pointer text-sm'
                >
                  New course has been published
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* User Profile */}
        <div className='relative group'>
          <button className='flex items-center gap-2 outline-none'>
            <div className='w-9 h-9 md:w-10 md:h-10 rounded-full bg-gray-100 border-2 border-gray-300 flex items-center justify-center group-hover:ring-2 group-hover:ring-blue-400 transition'>
              <FaUserAlt className='text-gray-400 text-sm md:text-base' />
            </div>
            <FaChevronDown className='hidden sm:block text-xs text-gray-400 group-hover:rotate-180 transition-transform' />
          </button>

          <div className='absolute right-0 mt-3 w-48 sm:w-52 bg-white rounded-2xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-50'>
            <a
              href='/profile'
              className='flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-sm'
            >
              <FaUserAlt className='text-gray-400' /> Dashborad
            </a>
            <a
              href='/profile'
              className='flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-sm'
            >
              <FaUserAlt className='text-gray-400' /> Profile
            </a>
            <button className='flex items-center gap-3 px-4 py-3 w-full text-red-500 hover:bg-red-50 text-sm font-medium border-t'>
              <FaSignOutAlt /> Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
