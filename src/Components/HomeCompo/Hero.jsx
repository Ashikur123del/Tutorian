import React from 'react'
import { Link } from 'react-router-dom'

// Assets
import Man1 from '../../assets/images/man1.png'
import Man2 from '../../assets/images/man2.png'
import Man3 from '../../assets/images/man3.png'
import bpsvg from '../../assets/images/bpsvg.svg'
import Bg1 from '../../assets/images/bg-1.png'
import Bg2 from '../../assets/images/bg-2.png'
import Bg3 from '../../assets/images/Bg-3.png'
import Folder from '../../assets/images/Folder.svg'

const Hero = () => {
  // যেহেতু ইমেজ পরিবর্তন হবে না, তাই স্লাইডস এর দরকার নেই, সরাসরি প্রথম সেটের ডেটা ব্যবহার করছি।
  const staticImages = {
    leftTop: { bg: Bg1, img: Man1 },
    leftBottom: { bg: Bg2, img: Man2 },
    rightLarge: { bg: Bg3, img: Man3 }
  };

  return (
    <section
      className='relative overflow-hidden w-full min-h-[400px] lg:min-h-[620px] flex items-center bg-[#F8FAFF] bg-bottom-left'
      style={{
        backgroundImage: `url(${bpsvg})`,
        backgroundSize: 'cover'
      }}
    >
      <div className='container mx-auto px-4'>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10'>
          
          {/* LEFT CONTENT */}
          <div className='w-full lg:w-[45%] space-y-5 text-center lg:text-left order-2 lg:order-1'>
            <div className='flex justify-center lg:justify-start'>
              <div className='flex items-center gap-3 mt-6 md:mt-0'>
                <p className='font-bold text-gray-800 text-base sm:text-lg'>
                  শিখবো এখন লাইভে
                </p>
                <span className='relative flex h-6 w-6 items-center'>
                  <span className='animate-ping absolute h-full w-full rounded-full bg-pink-500 opacity-75' />
                  <span className='relative h-3 w-3 rounded-full bg-[#FC1C69]' />
                </span>
              </div>
            </div>

            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1a1a1a] leading-[1.3]'>
              সরকারি চাকরির সর্বোচ্চ <br className='hidden sm:block' />
              <span className='text-[#333]'>
                প্রস্তুতি <span className='text-[#FC1C69]'>টিউটোরিয়ান</span>
              </span>
            </h1>

            <div>
              <p className='text-gray-600 text-sm font-semibold sm:text-lg lg:text-xl font-medium max-w-xl mx-auto lg:mx-0'>
                সরকারি চাকরি হোক বা ইংরেজিতে দক্ষতা, সব প্রস্তুতি এখন ঘরে বসেই
                লাইভ ক্লাসে! প্রাইমারি, নিবন্ধন সব একসাথে।
              </p>
            </div>

            <div className='pt-2'>
              <button className='inline-flex items-center gap-3 bg-[#FC1C69] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-sm sm:text-lg'>
                <img
                  src={Folder}
                  alt=''
                  className='w-4 h-4 sm:w-5 sm:h-5 invert brightness-0'
                />
                <Link to='/coure'>সব কোর্স দেখুন</Link>
              </button>
            </div>
          </div>

          {/* RIGHT IMAGES - এখন এগুলো স্থির (Static) */}
          <div className='w-full lg:w-[55%] h-auto relative order-2'>
            <div className='grid grid-cols-2 gap-x-4 max-w-[400px] sm:max-w-[400px] lg:max-w-none mx-auto'>
              
              {/* Left Column */}
              <div className='flex flex-col gap-y-2 md:gap-y-6'>
                {/* Top Box */}
                <div className='h-[150px] sm:h-[220px] lg:h-[300px] relative rounded-b-xl overflow-hidden shadow-md bg-white/50'>
                  <img
                    src={staticImages.leftTop.bg}
                    className='absolute inset-0 w-full h-full object-cover'
                    alt=""
                  />
                  <img
                    src={staticImages.leftTop.img}
                    className='relative z-10 w-full h-full object-contain pt-2'
                    alt=""
                  />
                </div>
                
                {/* Bottom Box */}
                <div className='h-[160px] sm:h-[220px] lg:h-[300px] relative rounded-t-xl overflow-hidden shadow-md bg-white/50'>
                  <img
                    src={staticImages.leftBottom.bg}
                    className='absolute inset-0 w-full h-full object-cover'
                    alt=""
                  />
                  <img
                    src={staticImages.leftBottom.img}
                    className='relative z-10 w-full h-full object-contain pt-2'
                    alt=""
                  />
                </div>
              </div>

              {/* Right Column (Large Box) */}
              <div className='h-[250px] sm:h-[456px] lg:h-[500px] relative rounded-t-xl overflow-hidden shadow-lg mt-17 md:mt-30 bg-white/50'>
                <img
                  src={staticImages.rightLarge.bg}
                  className='absolute inset-0 w-full h-full object-cover'
                  alt=""
                />
                <img
                  src={staticImages.rightLarge.img}
                  className='relative z-10 w-full h-full object-contain pt-4 sm:pt-10'
                  alt=""
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero