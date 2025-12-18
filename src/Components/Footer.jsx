import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/Logo.svg'
import Fimg from '../assets/images/Fimg.svg'
import PalyCard from '../assets/images/PalyCard.svg'
import Flmsges from '../assets/images/FImsges.svg'
import { FaFacebookF, FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const FooterColumn = ({ title, links }) => (
  <div>
    <h3 className='font-bold text-[20px] mb-6 text-black'>{title}</h3>
    <ul className='text-[15px] space-y-3 text-gray-600 font-semibold'>
      {links.map((link, i) =>
        link.url.startsWith('http') ? (
          <li key={i}>
            <a href={link.url} target='_blank' rel='noopener noreferrer' className='hover:text-[#FC1C69] transition-colors'>
              {link.label}
            </a>
          </li>
        ) : (
          <li key={i}>
            <Link to={link.url} className='hover:text-[#FC1C69] transition-colors'>{link.label}</Link>
          </li>
        )
      )}
    </ul>
  </div>
)

const Footer = () => {
  const footerStyle = {
    backgroundImage: `url(${Fimg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }

  const quickLinks = [
    { label: 'MSA সম্পর্কে', url: '/about' },
    { label: 'বৈশিষ্ট্য', url: '/features' },
    { label: 'ব্লগ/কেস স্টাডি', url: '/blog' },
    { label: 'যোগাযোগ করুন', url: '/contact' },
    { label: 'পার্টনার্স', url: '/partners' },
  ]

  const companyLinks = [
    { label: 'কোম্পানি সম্পর্কে', url: '/company' },
    { label: 'পণ্য', url: '/products' },
    { label: 'সেবা', url: '/services' },
    { label: 'যোগাযোগ করুন', url: '/contact' },
    { label: 'পার্টনার্স', url: '/partners' },
  ]

  return (
    <footer className='pt-16 pb-10 px-4 md:px-20 font-sans text-[#444]' style={footerStyle}>
      <div className='container mx-auto'>
        {/* Grid Sections */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-10 mb-12'>
          {/* About */}
          <div>
            <img src={Logo} alt='Tutorian Logo' className='h-12 mb-5' />
            <p className='text-sm md:text-[15px] leading-relaxed text-gray-700 font-medium'>
              MSA, এমন একটি সফ্টওয়্যার যা একাডেমী বা শিক্ষা প্রতিষ্ঠানগুলোকে তাদের শিক্ষক, শিক্ষার্থী এবং প্রতিষ্ঠান পরিচালনা করতে সাহায্য করে। ভর্তি কার্যক্রম থেকে ক্লাস পরিচালনা, হোমওয়ার্ক, পরীক্ষা, রিপোর্টিং সবকিছুই সহজে করা যায়।
            </p>
          </div>

          {/* Quick Links */}
          <FooterColumn title='কুইক লিঙ্ক' links={quickLinks} />

          {/* Company */}
          <FooterColumn title='প্রতিষ্ঠান' links={companyLinks} />

          {/* Contact */}
          <div>
            <h3 className='font-bold text-[20px] mb-6 text-black'>আমাদের সাথে যোগাযোগ করুন</h3>
            <div className='flex items-center gap-3 mb-4'>
              <FaPhoneAlt className='text-[#FC1C69] text-sm' />
              <span className='text-[15px] text-gray-700 font-semibold'>+880147258389</span>
            </div>
            <div className='flex items-start gap-3 mb-4'>
              <FaMapMarkerAlt className='text-[#FC1C69] text-lg mt-1' />
              <span className='text-[14px] text-gray-700 font-semibold'>
                মোখলেস প্লাজা (২য় ও ৩য় তলা), সুপার মেডিকেল সংলগ্ন, সাভার, ঢাকা, বাংলাদেশ
              </span>
            </div>
            <div className='flex items-center gap-3'>
              <FaEnvelope className='text-[#FC1C69] text-sm' />
              <span className='text-[15px] text-gray-700 font-semibold'>Yourmail@gmail.com</span>
            </div>
          </div>
        </div>

        {/* App Buttons */}
        <div className='flex flex-wrap justify-center gap-4 mb-6'>
          <a href='#' target='_blank' rel='noopener noreferrer'>
            <img src={PalyCard} alt='Google Play' className='h-12 md:h-15 rounded-lg shadow-md hover:scale-105 transition-transform duration-300' />
          </a>
          <a href='#' target='_blank' rel='noopener noreferrer'>
            <img src={Flmsges} alt='App Store' className='h-10 md:h-12 rounded-lg shadow-md hover:scale-105 transition-transform duration-300' />
          </a>
        </div>

        {/* Footer Bottom */}
        <div className='flex flex-col md:flex-row items-center justify-between gap-6 border-t border-gray-300 pt-8'>
          <div className='flex items-center gap-4'>
            <span className='font-bold text-gray-800'>Follow Us</span>
            <div className='flex gap-3'>
              <a href='#' className='text-gray-600 hover:text-[#3b5998] text-xl transition-colors'><FaFacebookF /></a>
              <a href='#' className='text-gray-600 hover:text-[#25D366] text-xl transition-colors'><FaWhatsapp /></a>
            </div>
          </div>
          <div className='text-[14px] text-gray-500 font-medium text-center md:text-left'>
            Copyright © MSA School 2024. All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
