import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../assets/images/Logo.svg'
import Fimg from '../assets/images/Fimg.svg'
import PlayCard from '../assets/images/PalyCard.svg'
import AppStore from '../assets/images/FImsges.svg'

import {
  FaFacebookF,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt
} from 'react-icons/fa'

// 🔹 Reusable Footer Column
const FooterColumn = ({ title, links }) => (
  <div>
    <h3 className="font-bold text-[20px] mb-6 text-black">{title}</h3>

    <ul className="space-y-3 text-[15px] text-gray-600 font-semibold">
      {links.map((link, i) => (
        <li key={i}>
          {link.url.startsWith('http') ? (
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FC1C69] transition-colors"
            >
              {link.label}
            </a>
          ) : (
            <Link
              to={link.url}
              className="hover:text-[#FC1C69] transition-colors"
            >
              {link.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  </div>
)

const Footer = () => {
  const footerStyle = {
    backgroundImage: `url(${Fimg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  const quickLinks = [
    { label: 'MSA সম্পর্কে', url: '/about' },
    { label: 'বৈশিষ্ট্য', url: '/features' },
    { label: 'ব্লগ / কেস স্টাডি', url: '/blog' },
    { label: 'যোগাযোগ করুন', url: '/contact' },
    { label: 'পার্টনার্স', url: '/partners' }
  ]

  const companyLinks = [
    { label: 'কোম্পানি সম্পর্কে', url: '/company' },
    { label: 'পণ্য', url: '/products' },
    { label: 'সেবা', url: '/services' },
    { label: 'যোগাযোগ করুন', url: '/contact' }
  ]

  return (
    <footer
      className="pt-16 pb-10 px-6 md:px-20 font-sans" 
      style={footerStyle}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div>
            <img src={Logo} alt="MSA Logo" className="h-12 mb-5" />
            <p className="text-[15px] text-gray-700 leading-relaxed font-medium">
              MSA এমন একটি সফ্টওয়্যার যা শিক্ষা প্রতিষ্ঠানকে শিক্ষক,
              শিক্ষার্থী এবং একাডেমিক কার্যক্রম সহজভাবে পরিচালনা করতে সাহায্য করে।
            </p>
          </div>
          <FooterColumn title="কুইক লিঙ্ক" links={quickLinks} />
          <FooterColumn title="প্রতিষ্ঠান" links={companyLinks} />
          <div>
            <h3 className="font-bold text-[20px] mb-6 text-black">
              আমাদের সাথে যোগাযোগ করুন
            </h3>

            <div className="flex items-center gap-3 mb-4">
              <FaPhoneAlt className="text-[#FC1C69] text-sm" />
              <span className="text-[15px] text-gray-700 font-semibold">
                +880147258389
              </span>
            </div>

            <div className="flex items-start gap-3 mb-4">
              <FaMapMarkerAlt className="text-[#FC1C69] text-lg mt-1" />
              <span className="text-[14px] text-gray-700 font-semibold">
                মোখলেস প্লাজা (২য় ও ৩য় তলা), সাভার, ঢাকা
              </span>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#FC1C69] text-sm" />
              <span className="text-[15px] text-gray-700 font-semibold">
                yourmail@gmail.com
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <img
            src={PlayCard}
            alt="Google Play"
            className="cursor-pointer hover:scale-105 transition-transform"
          />
          <img
            src={AppStore}
            alt="App Store"
            className="cursor-pointer hover:scale-105 transition-transform"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t pt-6">
          <div className="flex items-center gap-4">
            <span className="font-bold text-gray-800">Follow Us</span>

            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-[#3b5998] hover:text-white transition">
                <FaFacebookF />
              </a>

              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-[#25D366] hover:text-white transition">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          <p className="text-[14px] text-gray-500 font-medium text-center md:text-right">
            © 2024 MSA School. All Rights Reserved
          </p>

        </div>
      </div>
    </footer>
  )
}

export default Footer