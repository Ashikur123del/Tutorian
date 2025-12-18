import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/Logo.svg'
import Fimg from '../assets/images/Fimg.svg'
import PalyCard from '../assets/images/PalyCard.svg'
import Flmsges from '../assets/images/FImsges.svg'
import {
  FaFacebookF,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt
} from 'react-icons/fa'

const Footer = () => {
  const footerStyle = {
    backgroundImage: `url(${Fimg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }

  return (
    <footer className='pt-16 pb-10 px-4 md:px-20 font-sans text-[#444]' style={footerStyle}>
      <div className="container mx-auto">
        <div className='grid grid-cols-1 md:grid-cols-4 gap-10 mb-12'>
          {/* Left Side: About */}
          <div>
            <img src={Logo} alt='Tutorian Logo' className='h-12 mb-5' />
            <p className='text-sm md:text-[15px] leading-relaxed text-left text-gray-600 font-semibold'>
              MSA, এমন একটি সফ্টওয়্যার যা একাডেমী বা শিক্ষা প্রতিষ্ঠানগুলোকে তাদের শিক্ষক, শিক্ষার্থী এবং প্রতিষ্ঠান পরিচালনা করতে সাহায্য করে। সর্বত্র শিক্ষার্থী ও স্কুলগুলোর চাহিদা পূরণ করার জন্য আমাদের কাছে বিস্তৃত পণ্য এবং পরিষেবা রয়েছে। ভর্তি কার্যক্রম থাকে শুরু করে শিক্ষার্থীদের উপস্থিতি নেয়া, ট্র্যাক রাখা, ক্লাস পরিচালনা করা, বাড়ির কাজ, পরীক্ষা পরিচালনা সহ প্রাতিষ্ঠানিক কার্যক্রম পরিচালনার সকল দিক, শিক্ষক ও কর্মচারীদের পর্যবেক্ষণ এবং রিপোর্ট তৈরী সহ আরও অনেক কিছু করা যায়।
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='font-bold text-[20px] mb-6 text-black'>কুইক লিঙ্ক</h3>
            <ul className='text-[15px] space-y-3 text-gray-600 font-semibold'>
              <li><Link to='/about' className='hover:text-blue-600'>MSA সম্পর্কে</Link></li>
              <li><Link to='/features' className='hover:text-blue-600'>বৈশিষ্ট্য</Link></li>
              <li><Link to='/blog' className='hover:text-blue-600'>ব্লগ/কেস স্টাডি</Link></li>
              <li><Link to='/contact' className='hover:text-blue-600'>যোগাযোগ করুন</Link></li>
              <li><Link to='/partners' className='hover:text-blue-600'>পার্টনার্স</Link></li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className='font-bold text-[20px] mb-6 text-black'>প্রতিষ্ঠান</h3>
            <ul className='text-[15px] space-y-3 text-gray-600 font-semibold'>
              <li><Link to='/company' className='hover:text-blue-600'>কোম্পানি সম্পর্কে</Link></li>
              <li><Link to='/products' className='hover:text-blue-600'>পণ্য</Link></li>
              <li><Link to='/services' className='hover:text-blue-600'>সেবা</Link></li>
              <li><Link to='/contact' className='hover:text-blue-600'>যোগাযোগ করুন</Link></li>
              <li><Link to='/partners' className='hover:text-blue-600'>পার্টনার্স</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className='font-bold text-[20px] mb-6 text-black'>আমাদের সাথে যোগাযোগ করুন</h3>
            <div className='flex items-center gap-3 mb-4'>
              <FaPhoneAlt className='text-gray-600 text-sm' />
              <span className='text-[15px] text-gray-600 font-semibold'>+880147258389</span>
            </div>
            <div className='flex items-start gap-3 mb-4'>
              <FaMapMarkerAlt className='text-gray-600 text-lg mt-1' />
              <span className='text-[14px] text-gray-600 font-semibold'>
                মোখলেস প্লাজা (২য় ও ৩য় তলা), সুপার মেডিকেল সংলগ্ন, সাভার, ঢাকা, বাংলাদেশ
              </span>
            </div>
            <div className='flex items-center gap-3'>
              <FaEnvelope className='text-gray-600 text-sm' />
              <span className='text-[15px] text-gray-600 font-semibold'>Yourmail@gmail.com</span>
            </div>
          </div>
        </div>

        {/* App Buttons */}
        <div className='flex gap-4 justify-center mb-6'>
          <a href='#' target='_blank' rel='noopener noreferrer'>
            <img src={PalyCard} alt='Google Play' className='h-12 md:h-15' />
          </a>
        </div>

        {/* Footer Bottom */}
        <div className='flex flex-col md:flex-row items-center justify-between gap-6 border-t border-gray-300 pt-8'>
          <div className='flex items-center gap-4'>
            <span className='font-bold text-gray-800'>Follow Us</span>
            <div className='flex gap-3'>
              <a href='#' className='text-gray-600 hover:text-blue-600 text-xl'><FaFacebookF /></a>
              <a href='#' className='text-gray-600 hover:text-green-600 text-xl'><FaWhatsapp /></a>
            </div>
          </div>
          <div className='text-[14px] text-gray-500 font-medium text-center md:text-left'>
            Copyright © MSA School 2024. All Rights Reserved
          </div>
          <div>
            <a href='#' target='_blank' rel='noopener noreferrer'>
              <img src={Flmsges} alt='App Store' className='h-10 md:h-12' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
