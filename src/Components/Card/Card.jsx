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

// Motion Variants
const cardVariants = {
  offscreen: { opacity: 0, y: 20 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', bounce: 0.3, duration: 0.4 }
  }
}

const convertToEn = str => {
  const banglaDigits = {
    o: '0',
    '১': '1',
    '২': '2',
    '৩': '3',
    '৪': '4',
    '৫': '5',
    '৬': '6',
    '৭': '7',
    '৮': '8',
    '৯': '9'
  }
  return str.replace(/[o-৯]/g, w => banglaDigits[w])
}

const StatCard = ({ count, label, bgImage, icon, color }) => {
  const numericPart = count.replace(/[^\do-৯]/g, '')
  const enNumber = parseInt(convertToEn(numericPart))
  const suffix = count.replace(/[\d০-৯]/g, '')

  return (
    <motion.div
      className='group relative flex items-center py-10 px-4 rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 '
      variants={cardVariants}
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ scale: 1.05 }}
    >
      {/* Background Image */}
      <div
        className='absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500'
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      <div className='relative z-10 flex items-center w-full'>
        <div className='w-2/5 flex justify-center items-center'>
          <motion.img
            src={icon}
            alt={label}
            className='w-16 h-16 md:w-20 md:h-20 object-contain'
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <div className='w-3/5 pl-4'>
          <h2
            className={`text-2xl md:text-3xl font-extrabold ${color} leading-none mb-2`}
          >
            <CountUp
              start={0}
              end={enNumber}
              duration={2.5}
              enableScrollSpy={true}
              scrollSpyOnce={true}
              formattingFn={value => value.toLocaleString('bn-BD') + suffix}
            />
          </h2>
          <p className='text-sm md:text-base font-medium text-gray-600 group-hover:text-gray-900 transition-colors'>
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
    <section className='py-16 px-4 bg-gray-50'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {stats.map(stat => (
            <StatCard key={stat.id} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Card
