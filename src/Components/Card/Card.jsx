import React from 'react'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'

// Assets
import Card3 from '../../assets/images/Card-3.svg'
import Card4 from '../../assets/images/Card-4.svg'
import Card5 from '../../assets/images/Card-5.svg'
import Card6 from '../../assets/images/Card-6.svg'
import CardImg from '../../assets/images/CardImg.svg'
import CardImg1 from '../../assets/images/CardImg1.svg'
import CardImg2 from '../../assets/images/CardImg2.svg'
import CardImg4 from '../../assets/images/CardImg4.png'

const containerVariants = {
  offscreen: { opacity: 0 },
  onscreen: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const cardVariants = {
  offscreen: { opacity: 0, y: 30, scale: 0.95 },
  onscreen: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', bounce: 0.4, duration: 0.8 }
  }
}

const convertToEn = str => {
  const banglaDigits = {
    '০': '0',
    '১': '1',
    '২': '2',
    '৩': '3',
    '৪': '4',
    '৫': '5',
    '৬': '6',
    '৭': '7',
    '৮': '8',
    '৯': '9',
    o: '0'
  }
  return str.replace(/[০-৯o]/g, w => banglaDigits[w])
}

const StatCard = ({ count, label, bgImage, icon, color }) => {
  const numericPart = count.replace(/[^\d০-৯o]/g, '')
  const enNumber = parseInt(convertToEn(numericPart))
  const suffix = count.replace(/[\d০-৯o]/g, '')

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -10 }}
      className='group relative flex items-center p-4 sm:p-5 md:p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-300'
    >
      {/* Background Image */}
      <div
        className='absolute inset-0 rounded-xl '
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      {/* Content */}
      <div className='relative z-10 flex flex-row items-center w-full'>
        {/* Icon */}
        <div className='w-1/3 flex justify-center'>
          <motion.img
            src={icon}
            alt={label}
            className='w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20'
            whileHover={{ scale: 1.15, rotate: 5 }}
          />
        </div>

        {/* Text */}
        <div className='w-2/3 pl-3 sm:pl-4 md:pl-6'>
          <h2 className={`text-xl sm:text-2xl md:text-4xl font-black ${color}`}>
            <CountUp
              start={0}
              end={enNumber}
              duration={5}
              enableScrollSpy
              scrollSpyOnce
              formattingFn={value => value.toLocaleString('bn-BD') + suffix}
            />
          </h2>
          <p className='text-gray-500 text-xs sm:text-sm md:text-lg font-bold'>
            {label}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

const Card = () => {
  const stats = [
    {
      id: 1,
      count: '২৫০০০+',
      label: 'মোট শিক্ষার্থী',
      bgImage: Card3,
      icon: CardImg,
      color: 'text-pink-600'
    },
    {
      id: 2,
      count: '২৪০+',
      label: 'ভিডিও লেসন',
      bgImage: Card4,
      icon: CardImg1,
      color: 'text-blue-600'
    },
    {
      id: 3,
      count: '৫০+',
      label: 'অভিজ্ঞ টিচার',
      bgImage: Card5,
      icon: CardImg2,
      color: 'text-orange-600'
    },
    {
      id: 4,
      count: '৩৫০০+',
      label: 'লার্নিং রিসোর্স',
      bgImage: Card6,
      icon: CardImg4,
      color: 'text-emerald-600'
    }
  ]

  return (
    <section className='py-5 md:py-20 px-4 md:px-8 bg-slate-50'>
      <motion.div
        className='container mx-auto'
        variants={containerVariants}
        initial='offscreen'
        whileInView='onscreen'
        viewport={{ once: true }}
      >
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-8'>
          {stats.map(stat => (
            <StatCard key={stat.id} {...stat} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Card
