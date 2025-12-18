import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Images
import Man1 from '../assets/images/Man1.svg';
import Man1bg from '../assets/images/Man1bg.svg';

const TestimonialCard = ({ text, name, role, org, img, bg }) => (
  <div className="relative group h-full rounded-[32px] overflow-hidden p-[2px]">
    {/* Animated Border */}
    <div className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] 
                    bg-[conic-gradient(from_90deg_at_50%_50%,#E2E8F0_0%,#E2E8F0_40%,#6366f1_45%,#a855f7_50%,#6366f1_55%,#E2E8F0_60%,#E2E8F0_100%)] 
                    group-hover:bg-[conic-gradient(from_90deg_at_50%_50%,#6366f1_0%,#a855f7_25%,#6366f1_50%,#a855f7_75%,#6366f1_100%)] 
                    transition-all duration-500" />

    {/* Inner Card */}
    <div className="relative z-10 h-full w-full bg-white rounded-[30px] overflow-hidden flex flex-col
                    transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl">
      
      {/* Background Image with overlay */}
      <div 
        className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110 bg-black/20"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: '0.6'
        }}
      />

      {/* Content */}
      <div className="relative z-20 p-8 md:p-10 flex flex-col h-full 
                      bg-gradient-to-b from-white/70 to-white/30 backdrop-blur-sm">
        {/* Quote Icon */}
        <div className="text-indigo-600 mb-6 opacity-30">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.017 21L14.017 18C14.017 14.686 16.634 12 19.948 12L19.948 10C16.634 10 14.017 7.314 14.017 4L11.017 4L11.017 21L14.017 21ZM4 21L4 18C4 14.686 6.617 12 9.931 12L9.931 10C6.617 10 4 7.314 4 4L1 4L1 21L4 21Z" />
          </svg>
        </div>

        
        <p className="text-[#374151] text-[16px] md:text-[17px] leading-6 mb-8 font-medium">
          {text}
        </p>
        <div className="mt-auto flex items-center gap-4 pt-6 border-t border-gray-200/50">
          <img 
            src={img} 
            alt={name} 
            className="w-14 h-14 rounded-full object-cover border-2 border-indigo-500 shadow-md 
                       transition-transform duration-500 group-hover:scale-110 group-hover:ring-2 group-hover:ring-indigo-300" 
          />
          <div>
            <h4 className="font-bold text-[#111827] text-[18px]">{name}</h4>
            <p className="text-indigo-600 text-[13px] font-bold">{role}, {org}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ClientSense = () => {
  const testimonials = Array(6).fill({
    text: "এম এস এ - র সাথে প্রত্যেকটি প্রতিষ্ঠানের নিজস্ব নামে থাকছে অ্যান্ড্রয়েড অ্যাপ যেটি গুগল প্লে-স্টোরে থাকবে ।অভিভাবক ,শিক্ষক এবং এডমিন এটি ডাউনলোড করে ব্যবহার করতে পারবেন।ফলে এখন মোবাইলের মাধ্যমে যেমন প্রতিষ্ঠান পরিচালনা করা যাবে সহজে পাশাপাশি অভিভাবকরা ঘরে বসেই বাচ্চার যাবতীয় আপডেট পেয়ে যাবেন প্রতিষ্ঠানে না এসেই।",
    name: "সুজন আহমেদ",
    role: "পরিচালক",
    org: "এম এস এ স্কুল",
    img: Man1,
    bg: Man1bg,
  });

  return (
    <section className="py-10 md:py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-6 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-black text-[#111827] mb-4">
            গ্রাহকদের <span className="text-indigo-600">অভিজ্ঞতা</span>
          </h2>
          <div className="w-24 h-1.5 bg-indigo-600 mx-auto rounded-full"></div>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-16 !px-2"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index} className="h-auto">
              <TestimonialCard {...t} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .swiper-pagination-bullet {
          background: #6366f1 !important;
          opacity: 0.4;
          width: 12px;
          height: 12px;
          margin: 0 4px;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          width: 28px !important;
          border-radius: 12px !important;
        }
      `}</style>
    </section>
  );
};

export default ClientSense;
