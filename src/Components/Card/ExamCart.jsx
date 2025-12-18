import React from 'react';
import { motion } from 'framer-motion';

// Background Images
import CardBg from '../../assets/images/Card-bg.png';
import CardOverlay from '../../assets/images/Card-6.svg';

// Icons
import m1 from '../../assets/images/m1.svg';
import m2 from '../../assets/images/m2.svg';
import m3 from '../../assets/images/m3.svg';
import m4 from '../../assets/images/m4.svg';

/* ================= DATA ================= */
const programData = [
  { icon: m1, title: 'চাকরির প্রস্তুতি' },
  { icon: m2, title: 'ভর্তি প্রস্তুতি' },
  { icon: m3, title: 'একাডেমিক প্রোগ্রাম' },
  { icon: m4, title: 'এক্সাম' },
];

/* ================= ANIMATION ================= */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
};

const iconVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: 'spring', stiffness: 140, damping: 12 },
  },
};

/* ================= CARD ================= */
const ProgramCard = ({ icon, title }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -6, scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="relative cursor-pointer select-none 
                 max-w-[520px] w-full mx-auto"
    >
      {/* Icon */}
      <motion.div
        variants={iconVariants}
        className="absolute top-0 md:-top-12 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-24 h-24 bg-white rounded-full shadow-xl
                        flex items-center justify-center border-4 border-white">
          <img
            src={icon}
            alt={title}
            className="w-16 h-16 object-contain"
          />
        </div>
      </motion.div>

      {/* Card Body */}
      <div
        className="relative h-52 sm:h-56 w-full bg-no-repeat bg-bottom bg-contain
                   flex flex-col justify-end pt-16 pb-6 rounded-3xl"
        style={{ backgroundImage: `url(${CardOverlay})` }}
      >
        <p className="text-center font-semibold text-[#1e1e1e]
                      text-base sm:text-lg md:text-xl px-4">
          {title}
        </p>
      </div>
    </motion.div>
  );
};

/* ================= MAIN ================= */
const ExamCart = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="bg-no-repeat bg-center bg-cover py-5 sm:py-16"
      style={{ backgroundImage: `url(${CardBg})` }}
    >
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold
                     text-center mb-6 md:mb-12 text-[#1a1a1a]"
        >
          আমাদের প্রোগ্রাম সমূহ
        </motion.h2>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4
                     gap-4 sm:gap-3 md:gap-4 items-end"
        >
          {programData.map((item, index) => (
            <ProgramCard key={index} {...item} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ExamCart;
