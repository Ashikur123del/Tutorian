import React from 'react'
import E1 from '../assets/images/E1.svg'
import E2 from '../assets/images/E2.svg'
import E3 from '../assets/images/E3.svg'
import E4 from '../assets/images/E4.svg'
import Ebg1 from '../assets/images/Ebg1.png'
import Ebg2 from '../assets/images/Ebg2.png'

const advantages = [
  {
    id: 1,
    icon: E1,
    title: 'সর্বদা আপডেট থাকুন',
    desc: 'নতুন লাইভ ব্যাচ, মডেল টেস্ট ও স্টাডি রিসোর্সের নোটিশ সরাসরি পান।',
    bg: Ebg1
  },
  {
    id: 2,
    icon: E2,
    title: 'এক্সপার্টদের নির্দেশনা',
    desc: 'শীর্ষ শিক্ষকদের কাছ থেকে সরাসরি শিখুন এবং সফলতার কৌশল জানুন।',
    bg: Ebg2
  },
  {
    id: 3,
    icon: E3,
    title: 'ক্যারিয়ার সুযোগ',
    desc: 'চাকরির বিজ্ঞপ্তি, পরীক্ষা নোটিশ এবং প্রস্তুতির টিপস আগে পান।',
    bg: Ebg1
  },
  {
    id: 4,
    icon: E4,
    title: 'এক্সক্লুসিভ সুবিধা',
    desc: 'ডিসকাউন্ট, ফ্রি রিসোর্স ও প্রিমিয়াম কনটেন্ট অ্যাক্সেস করুন।',
    bg: Ebg2
  }
]

const TutorionAdvantage = () => {
  return (
    <section className='py-16 bg-white'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>
            টিউটরিয়ানের সাথে এগিয়ে থাকুন!
          </h2>
          <p className='mt-4 text-gray-600 text-base font-semibold max-w-2xl mx-auto'>
            আমাদের ডিজিটাল প্ল্যাটফর্মে সাইন আপ করুন এবং টিউটরিয়ানের নতুন
            কোর্স,
            <br /> পরীক্ষা প্রস্তুতি ও ক্যারিয়ার টিপস সম্পর্কে সর্বশেষ আপডেট
            পান।
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {advantages.map(item => (
            <div
              key={item.id}
              className='relative rounded-xl p-4 text-center bg-cover bg-no-repeat 
                 shadow-md hover:shadow-xl transition'
              style={{
                backgroundImage: `url(${item.bg})`
              }}
            >
              <div
                className='w-30 h-30 mx-auto rounded-full  bg-white
                flex items-center justify-center
                shadow-md hover:scale-105 transition duration-300 mb-10'
              >
                <div
                  className='w-24 h-24 rounded-full bg-white 
                  flex items-center justify-center shadow-2xl'
                >
                  <img src={item.icon} alt={item.title} className='w-14 h-14' />
                </div>
              </div>

              <h3 className='text-xl md:text-2xl font-semibold text-gray-900 mb-3'>
                {item.title}
              </h3>
              <p className='text-base font-semibold text-gray-600 leading-relaxed'>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TutorionAdvantage
