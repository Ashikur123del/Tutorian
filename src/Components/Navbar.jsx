import React, { useState, useEffect, useRef } from 'react'
import { FaSearch, FaChevronDown, FaBars, FaTimes, FaBook, FaLaptopCode, FaPenNib, FaBullhorn, FaGraduationCap, FaBlog, FaPhoneAlt } from 'react-icons/fa'
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
      icon: <FaBook className="text-pink-500" />,
      href: '/coure',
      links: [
        { name: 'ওয়েব ডিজাইন', href: '/course#web', icon: <FaLaptopCode /> },
        { name: 'গ্রাফিক্স ডিজাইন', href: '/course#graphics', icon: <FaPenNib /> },
        { name: 'ডিজিটাল মার্কেটিং', href: '/course#digital', icon: <FaBullhorn /> }
      ]
    },
    free: {
      label: 'ফ্রি ক্লাস',
      icon: <FaGraduationCap className="text-pink-500" />,
      links: [
        { name: 'লাইভ ক্লাস', href: '/free#live' },
        { name: 'ফ্রি গাইড', href: '/free#guide' }
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
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      <div className='container mx-auto px-4 lg:px-8' ref={navRef}>
        <div className='flex items-center justify-between h-20 gap-4'>
          
          <div className='flex-shrink-0'>
            <Link to="/"> <img src={Logo} alt='Logo' className='h-10 md:h-12 cursor-pointer' /></Link>
          </div>

          {/* Desktop Search */}
          <div className='hidden md:flex relative flex-grow max-w-sm'>
            <input
              type='text'
              placeholder='কোর্স সার্চ করুন'
              className='w-full pl-5 pr-12 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all'
            />
            <FaSearch className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-400' />
          </div>

          {/* Desktop Nav */}
          <nav className='hidden lg:flex items-center gap-2 xl:gap-4 font-medium text-[#333] h-full'>
            {Object.keys(menuItems).map(key => (
              <div
                key={key}
                className='relative h-20 flex items-center' 
                onMouseEnter={() => setActiveDropdown(key)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link 
                  to={menuItems[key].href || '#'}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-lg transition-colors ${
                    activeDropdown === key ? 'text-pink-600 bg-pink-50' : 'hover:text-pink-600'
                  }`}
                >
                  {menuItems[key].label}
                  {menuItems[key].links.length > 0 && (
                    <FaChevronDown className={`text-[10px] transition-transform duration-300 ${activeDropdown === key ? 'rotate-180' : ''}`} />
                  )}
                </Link>

                <AnimatePresence>
                  {activeDropdown === key && menuItems[key].links.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      className='absolute top-[75px] left-0 w-52 bg-white border border-gray-100 rounded-xl shadow-2xl py-3 z-[100]'
                    >
                      {menuItems[key].links.map((link, idx) => (
                        <Link key={idx} to={link.href} className='block px-5 py-2.5 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors'>
                          {link.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <Link to="/exam" className='px-4 py-2 hover:text-pink-600 transition-colors cursor-pointer'>পরীক্ষা</Link>
            <Link to="/addtocards" className='px-4 py-2 hover:text-pink-600 transition-colors cursor-pointer'>সকল বই</Link>
            <Link to="/blog" className='px-4 py-2 hover:text-pink-600 transition-colors cursor-pointer'>ব্লগ</Link>
            <Link to="/contact" className='px-4 py-2 hover:text-pink-600 transition-colors cursor-pointer'>যোগাযোগ</Link>
          </nav>

          <div className='flex items-center gap-3'>
            <Link to="/auth" className='hidden sm:block border bg-white border-gray-300 text-pink-600 px-6 py-2 rounded-lg font-semibold hover:bg-pink-600 duration-300 hover:text-white transition-all text-sm'>
               লগইন / সাইনআপ
            </Link>
            <button onClick={() => setMenuOpen(!menuOpen)} className='lg:hidden p-2 text-2xl text-gray-700 hover:bg-gray-100 rounded-full transition-all'>
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[55] lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className='fixed top-0 right-0 w-[300px] h-full bg-white z-[60] shadow-2xl overflow-y-auto flex flex-col'
            >
              <div className='p-6 border-b flex justify-between items-center bg-gray-50'>
                <img src={Logo} alt='Logo' className='h-8' />
                <button onClick={() => setMenuOpen(false)} className='p-2 bg-white rounded-full shadow-sm text-pink-600'><FaTimes /></button>
              </div>

              <div className='p-5 space-y-4'>
                {/* Mobile Search */}
                <div className='relative mb-6'>
                  <input
                    type='text'
                    placeholder='সার্চ করুন...'
                    className='w-full pl-4 pr-10 py-3 bg-gray-100 border-none rounded-xl text-sm focus:ring-2 focus:ring-pink-500 transition-all'
                  />
                  <FaSearch className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-400' />
                </div>

                <div className='flex flex-col gap-1'>
                  {Object.keys(menuItems).map((key, idx) => (
                    <div key={idx} className='border-b border-gray-50 last:border-none'>
                      <Link
                        to={menuItems[key].href || '#'}
                        className={`w-full flex justify-between items-center py-3 px-3 rounded-xl transition-all ${
                          activeDropdown === key ? 'bg-pink-50 text-pink-600' : 'text-gray-700 hover:bg-gray-50'
                        }`}
                        onClick={() => setActiveDropdown(activeDropdown === key ? null : key)}
                      >
                        <div className='flex items-center gap-3 font-semibold'>
                          {menuItems[key].icon}
                          {menuItems[key].label}
                        </div>
                        {menuItems[key].links.length > 0 && (
                          <FaChevronDown className={`text-xs transition-transform duration-300 ${activeDropdown === key ? 'rotate-180' : ''}`} />
                        )}
                      </Link>
                      
                      <AnimatePresence>
                        {activeDropdown === key && menuItems[key].links.length > 0 && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className='overflow-hidden bg-gray-50/50 rounded-b-xl'
                          >
                            {menuItems[key].links.map((link, lidx) => (
                              <Link key={lidx} to={link.href} className='flex items-center gap-3 py-3 pl-11 pr-4 text-sm text-gray-600 hover:text-pink-600 border-l-2 border-transparent hover:border-pink-500 transition-all'>
                                {link.icon && <span className="text-xs">{link.icon}</span>}
                                {link.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}

                  <Link to="/blog" className='flex items-center gap-3 py-3 px-3 font-semibold text-gray-700 hover:text-pink-600'><FaBlog className="text-pink-500" /> ব্লগ</Link>
                  <Link to="/contact" className='flex items-center gap-3 py-3 px-3 font-semibold text-gray-700 hover:text-pink-600'><FaPhoneAlt className="text-pink-500" /> যোগাযোগ</Link>
                </div>

                <div className='pt-6 mt-4 border-t'>
                  <Link to="/auth" className='w-full bg-gradient-to-r from-pink-600 to-rose-500 text-white py-3.5 px-4 rounded-xl font-bold shadow-lg shadow-pink-200 active:scale-95 transition-all'>
                    লগইন / সাইনআপ
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
