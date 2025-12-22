import React, { useState, useEffect, useRef } from 'react'
import { FaSearch, FaChevronDown, FaBars, FaTimes } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from '../assets/images/Logo.svg'
import Bghero from '../assets/images/Bghero.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const navRef = useRef(null)

  const menuItems = {
    course: {
      label: 'সব কোর্স',
      links: [
        { name: 'ওয়েব ডিজাইন', href: '#' },
        { name: 'গ্রাফিক্স ডিজাইন', href: '#' },
        { name: 'ডিজিটাল মার্কেটিং', href: '#' }
      ]
    },
    free: {
      label: 'ফ্রি ক্লাস',
      links: [
        { name: 'লাইভ ক্লাস', href: '#' },
        { name: 'ফ্রি গাইড', href: '#' }
      ]
    }
  }

  useEffect(() => {
    const handleClickOutside = e => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false)
        setActiveDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header
      className='w-full bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm'
      style={{
        backgroundImage: `url(${Bghero})`,
        backgroundPosition: 'center right',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className='container mx-auto px-4 lg:px-8' ref={navRef}>
        <div className='flex items-center justify-between h-20 gap-4'>
          
          <div className='flex-shrink-0'>
           <Link to="/"> <img src={Logo} alt='Logo' className='h-10 md:h-12 cursor-pointer' /></Link>
          </div>

          <div className='hidden md:flex relative flex-grow max-w-sm'>
            <input
              type='text'
              placeholder='কোর্স সার্চ করুন'
              className='w-full pl-5 pr-12 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all'
            />
            <FaSearch className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-400' />
          </div>
          <nav className='hidden lg:flex items-center gap-2 xl:gap-4 font-medium text-[#333] h-full'>
            {Object.keys(menuItems).map(key => (
              <div
                key={key}
                className='relative h-20 flex items-center' 
                onMouseEnter={() => setActiveDropdown(key)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button 
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-lg transition-colors ${
                    activeDropdown === key ? 'text-pink-600' : 'hover:text-pink-600'
                  }`}
                >
                  {menuItems[key].label}
                  <FaChevronDown
                    className={`text-[10px] transition-transform duration-300 ${
                      activeDropdown === key ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {activeDropdown === key && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ duration: 0.2 }}
                      className='absolute top-[75px] left-0 w-52 bg-white border border-gray-100 rounded-xl shadow-2xl py-3 z-[100]'
                    >
                      <div className="absolute -top-[15px] left-0 w-full h-[15px] bg-transparent" />
                      
                      {menuItems[key].links.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.href}
                          className='block px-5 py-2.5 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors'
                        >
                          {link.name}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            
            <a className='px-4 py-2 hover:text-pink-600 transition-colors cursor-pointer'>পরীক্ষা</a>
            <a className='px-4 py-2 hover:text-pink-600 transition-colors cursor-pointer'>ব্লগ</a>
            <a className='px-4 py-2 hover:text-pink-600 transition-colors cursor-pointer'>যোগাযোগ</a>
          </nav>

          {/* Right Actions */}
          <div className='flex items-center gap-3'>
            <button className='hidden sm:block border border-gray-300 bg-white px-6 py-2 rounded-lg font-semibold hover:bg-pink-50 transition-all text-sm'>
              লগইন/সাইনআপ
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className='lg:hidden p-2 text-2xl text-gray-700'
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Same as before but improved) */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-[55] lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className='fixed top-0 right-0 w-[280px] h-full bg-white z-[60] p-6 lg:hidden shadow-2xl'
            >
              <div className='flex justify-between items-center mb-8'>
                <img src={Logo} alt='Logo' className='h-8' />
                <button onClick={() => setMenuOpen(false)} className='text-2xl'><FaTimes /></button>
              </div>
              <div className='flex flex-col gap-4 text-gray-800 font-medium'>
                <div className='py-2 border-b border-gray-50 hover:text-pink-600'>সব কোর্স</div>
                <div className='py-2 border-b border-gray-50 hover:text-pink-600'>ফ্রি ক্লাস</div>
                <div className='py-2 border-b border-gray-50 hover:text-pink-600'>পরীক্ষা</div>
                <div className='py-2 border-b border-gray-50 hover:text-pink-600'>ব্লগ</div>
                <button className='w-full mt-4 bg-pink-600 text-white py-3 rounded-xl font-bold'>লগইন / সাইনআপ</button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar