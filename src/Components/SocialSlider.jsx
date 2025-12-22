import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaWhatsapp,
  FaTelegram,
  FaUsers
} from 'react-icons/fa'

import 'swiper/css'

const SocialSlider = () => {
  const allSocials = [
    { id: 1, name: 'ফেসবুক', icon: <FaFacebook className='text-[#1877F2]' /> },
    {
      id: 2,
      name: 'ইনস্টাগ্রাম',
      icon: <FaInstagram className='text-[#E4405F]' />
    },
    { id: 3, name: 'টুইটার', icon: <FaTwitter className='text-black' /> },
    {
      id: 4,
      name: 'লিঙ্কডইন',
      icon: <FaLinkedin className='text-[#0A66C2]' />
    },
    {
      id: 5,
      name: 'ফেসবুক গ্রুপ',
      icon: <FaUsers className='text-[#1877F2]' />
    },
    {
      id: 9,
      name: 'টেলিগ্রাম গ্রুপ',
      icon: <FaTelegram className='text-[#24A1DE]' />
    },
    {
      id: 6,
      name: 'ইউটিউব চ্যানেল',
      icon: <FaYoutube className='text-[#FF0000]' />
    },
    {
      id: 7,
      name: 'হোয়াটসঅ্যাপ',
      icon: <FaWhatsapp className='text-[#25D366]' />
    },
    {
      id: 8,
      name: 'হোয়াটসঅ্যাপ চ্যানেল',
      icon: <FaWhatsapp className='text-[#128C7E]' />
    }
  ]

  const topRow = allSocials.slice(0, 4)
  const bottomRow = allSocials.slice(4)

  // Balanced Styles
  const cardStyles =
    'flex items-center justify-center gap-2 bg-[#f8faff] border border-blue-100 rounded-lg p-3 shadow-sm'
  const textStyles =
    'text-gray-700 font-semibold text-base md:text-lg whitespace-nowrap' // স্লাইটলি ছোট করা হয়েছে
  const iconStyles = 'text-2xl md:text-3xl' // আইকন সাইজ ব্যালেন্স করা হয়েছে

  return (
    <div className='py-10 bg-white'>
      <div className='container mx-auto px-4 '>
        <h2 className='text-center text-[18px] md:text-2xl font-bold mb-8 text-gray-800'>
          সকল আপডেট পেতে আমাদের সাথে যুক্ত হউন
        </h2>

        {/* --- Mobile View: Static Grid --- */}
        <div className='grid grid-cols-2 gap-3 md:hidden'>
          {allSocials.map(item => (
            <div
              key={item.id}
              className={`${cardStyles} ${item.id === 8 ? 'col-span-2' : ''}`}
            >
              <span className={iconStyles}>{item.icon}</span>
              <span className={textStyles}>{item.name}</span>
            </div>
          ))}
        </div>

        {/* --- Desktop View: Swiper Slider --- */}
        <div className='hidden md:block'>
          <div className='mb-6 pointer-events-none'>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={15}
              slidesPerView={'auto'}
              loop={true}
              speed={5000}
              autoplay={{ delay: 0, disableOnInteraction: false }}
              className='social-swiper-linear'
            >
              {[...topRow, ...topRow].map((item, index) => (
                <SwiperSlide key={index} style={{ width: 'auto' }}>
                  <div className={`${cardStyles} min-w-[200px]`}>
                    <span className={iconStyles}>{item.icon}</span>
                    <span className={textStyles}>{item.name}</span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className='pointer-events-none'>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={15}
              slidesPerView={'auto'}
              loop={true}
              speed={5000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                reverseDirection: true
              }}
              className='social-swiper-linear'
            >
              {[...bottomRow, ...bottomRow].map((item, index) => (
                <SwiperSlide key={index} style={{ width: 'auto' }}>
                  <div className={`${cardStyles} min-w-[200px]`}>
                    <span className={iconStyles}>{item.icon}</span>
                    <span className={textStyles}>{item.name}</span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .social-swiper-linear .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </div>
  )
}

export default SocialSlider
