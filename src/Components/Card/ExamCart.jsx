import React from 'react';
import CardBg from '../../assets/images/Card-bg.png';
import CardOverlay from '../../assets/images/Card-6.svg';
import m1 from '../../assets/images/m1.svg';
import m2 from '../../assets/images/m2.svg';
import m3 from '../../assets/images/m3.svg';
import m4 from '../../assets/images/m4.svg';
import m5 from '../../assets/images/m5.svg';
import m6 from '../../assets/images/m6.svg';

const programData = [
  { icon: m1, title: 'চাকরির প্রস্তুতি' },
  { icon: m2, title: 'ভর্তি প্রস্তুতি' },
  { icon: m3, title: 'একাডেমিক প্রোগ্রাম' },
  { icon: m4, title: 'এক্সাম' },
  { icon: m5, title: 'ফ্রিল্যান্সিং' },
  { icon: m6, title: 'পাবলিকেশনস' },
];

// Reusable Program Card
const ProgramCard = ({ icon, title }) => (
  <div className="relative group cursor-pointer">
    {/* Circular Icon */}
    <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-10">
      <div className="w-24 h-24 bg-white rounded-full p-2 shadow-xl flex items-center justify-center border-4 border-white">
        <img src={icon} alt={title} className="h-20 w-20 object-contain" />
      </div>
    </div>

    {/* Card with overlay */}
    <div
      className="relative h-48 w-full bg-no-repeat bg-bottom bg-contain flex flex-col justify-end pb-6 rounded-2xl transition-transform duration-300 group-hover:-translate-y-2"
      style={{ backgroundImage: `url(${CardOverlay})` }}
    >
      <p className="text-center font-bold text-[#1e1e1e] text-lg px-2 leading-tight">
        {title}
      </p>
    </div>
  </div>
);

const ExamCart = () => (
  <section
    className="bg-no-repeat bg-center bg-cover py-16"
    style={{ backgroundImage: `url(${CardBg})` }}
  >
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#1a1a1a]">
        আমাদের প্রোগ্রাম সমূহ
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-end">
        {programData.map((item, index) => (
          <ProgramCard key={index} {...item} />
        ))}
      </div>
    </div>
  </section>
);

export default ExamCart;
