import React from 'react'
import { motion } from 'framer-motion'

import CardBg from '../../assets/images/Card-bg.png'
import CardOverlay from '../../assets/images/Card-6.svg'

import m1 from '../../assets/images/m1.svg'
import m2 from '../../assets/images/m2.svg'
import m3 from '../../assets/images/m3.svg'
import m4 from '../../assets/images/m4.svg'

const programData = [
  { icon: m1, title: 'চাকরির প্রস্তুতি' },
  { icon: m2, title: 'ভর্তি প্রস্তুতি' },
  { icon: m3, title: 'একাডেমিক প্রোগ্রাম' },
  { icon: m4, title: 'এক্সাম' }
]

const ExamCart = () => {
  return (
    <section
      className="py-4 md:py-24 bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${CardBg})` }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-5xl font-black text-center mb-4 md:mb-20 text-[#1a1a1a]">
          আমাদের প্রোগ্রাম সমূহ
        </h2>

        {/* Responsive Grid with More Width */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-2 ">
          {programData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative flex flex-col items-center w-full group cursor-pointer"
            >
              {/* Icon - Smart Positioning */}
              <div className="relative z-20 -mb-8 md:-mb-12">
                <div className="w-20 h-20 md:w-30 md:h-30 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-white transition-transform group-hover:scale-110">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-20 h-20 md:w-25 md:h-25 object-contain"
                  />
                </div>
              </div>

              {/* Card Body - Increased Width */}
              <div
                className="w-full h-36 md:h-80 flex items-end justify-center pb-6 md:pb-10 rounded-[20px] md:rounded-[32px]"
                style={{
                  backgroundImage: `url(${CardOverlay})`,
                  backgroundPosition: 'center bottom',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '100% 100%'
                }}
              >
                <h3 className="text-center font-bold text-[#1a1a1a] text-sm sm:text-lg md:text-2xl px-2 leading-tight">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExamCart