import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { 
  FaFacebook, FaInstagram, FaTwitter, FaLinkedin, 
  FaYoutube, FaWhatsapp, FaTelegram, FaUsers 
} from 'react-icons/fa';

// Swiper styles
import 'swiper/css';

const SocialSlider = () => {
  const topRow = [
    { id: 1, name: 'ফেসবুক', icon: <FaFacebook className="text-[#1877F2]" /> },
    { id: 2, name: 'ইনস্টাগ্রাম', icon: <FaInstagram className="text-[#E4405F]" /> },
    { id: 3, name: 'টুইটার', icon: <FaTwitter className="text-black" /> },
    { id: 4, name: 'লিঙ্কডইন', icon: <FaLinkedin className="text-[#0A66C2]" /> },
  ];

  const bottomRow = [
    { id: 5, name: 'ফেসবুক গ্রুপ', icon: <FaUsers className="text-[#1877F2]" /> },
    { id: 6, name: 'ইউটিউব চ্যানেল', icon: <FaYoutube className="text-[#FF0000]" /> },
    { id: 7, name: 'হোয়াটসঅ্যাপ', icon: <FaWhatsapp className="text-[#25D366]" /> },
    { id: 8, name: 'হোয়াটসঅ্যাপ চ্যানেল', icon: <FaWhatsapp className="text-[#128C7E]" /> },
    { id: 9, name: 'টেলিগ্রাম গ্রুপ', icon: <FaTelegram className="text-[#24A1DE]" /> },
  ];

  const sliderStyles = "flex items-center justify-center gap-3 bg-[#f8faff] border border-blue-100 rounded-lg p-3 shadow-sm min-w-[180px] md:min-w-[210px]";

  return (
    <div className="py-12 bg-white">

      <div className="container mx-auto  px-4 ">
        
        <h2 className="text-center text-xl md:text-3xl font-bold mb-10 text-gray-800">
          সকল আপডেট পেতে আমাদের সাথে যুক্ত হউন
        </h2>

        {/* প্রথম লাইন: বাম দিকে যাবে */}
        <div className="mb-6 pointer-events-none">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={15}
            slidesPerView={'auto'}
            loop={true}
            speed={5000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            className="social-swiper-linear"
          >
            {[...topRow, ...topRow, ...topRow].map((item, index) => (
              <SwiperSlide key={index} style={{ width: 'auto' }}>
                <div className={sliderStyles}>
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-gray-700 font-medium whitespace-nowrap">{item.name}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* দ্বিতীয় লাইন: ডান দিকে আসবে */}
        <div className="pointer-events-none">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={15}
            slidesPerView={'auto'}
            loop={true}
            speed={5000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: true,
            }}
            className="social-swiper-linear"
          >
            {[...bottomRow, ...bottomRow, ...bottomRow].map((item, index) => (
              <SwiperSlide key={index} style={{ width: 'auto' }}>
                <div className={sliderStyles}>
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-gray-700 font-medium whitespace-nowrap">{item.name}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* লিনিয়ার মুভমেন্টের জন্য CSS */}
      <style jsx global>{`
        .social-swiper-linear .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </div>
  );
};

export default SocialSlider;