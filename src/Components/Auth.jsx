import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaLock, FaUser, FaPhoneAlt, FaGoogle, FaArrowLeft, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Logo.svg';
import Bghero from '../assets/images/Bghero.png'

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-[#F3F4F6] flex items-center justify-center p-4"  style={{
            backgroundImage: `url(${Bghero})`,
            backgroundPosition: 'center right',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}>
      <Link to="/" className="fixed top-6 left-6 flex items-center gap-2 text-gray-500 hover:text-pink-600 transition-all font-medium bg-white px-4 py-2 rounded-full shadow-sm">
        <FaArrowLeft size={12} /> হোম
      </Link>

      <div className="max-w-5xl w-full bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col md:row-reverse md:flex-row min-h-[650px]">
        <div className="w-full md:w-1/2 bg-gradient-to-br from-pink-600 to-rose-500 p-10 md:p-16 text-white flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <img src={Logo} alt="Logo" className="h-12 brightness-0 invert mb-10" />
            <h2 className="text-4xl font-bold leading-tight mb-6">
              {isLogin ? "স্বাগতম আবার!" : "নতুন কিছু শেখার যাত্রা শুরু হোক"}
            </h2>
            <p className="text-pink-100 text-lg mb-8">
              {isLogin 
                ? "আপনার দক্ষতা বৃদ্ধি করতে লগইন করে ড্যাশবোর্ডে প্রবেশ করুন।" 
                : "আজই আমাদের কমিউনিটিতে যোগ দিন এবং সেরা মেন্টরদের থেকে শিখুন।"}
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 bg-white/10 p-4 rounded-2xl backdrop-blur-md border border-white/20">
                <FaCheckCircle className="text-white" />
                <span className="text-sm">৫০০+ প্রিমিয়াম ভিডিও টিউটোরিয়াল</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 p-4 rounded-2xl backdrop-blur-md border border-white/20">
                <FaCheckCircle className="text-white" />
                <span className="text-sm">লাইভ সাপোর্ট ও মেন্টরশিপ</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-8 md:p-14 bg-white self-center">
          <div className="flex bg-gray-100 p-1 rounded-2xl mb-10 relative">
            <motion.div 
              layout 
              className="absolute h-[calc(100%-8px)] w-[calc(50%-4px)] bg-white rounded-xl shadow-sm"
              animate={{ x: isLogin ? 0 : '100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
            <button 
              onClick={() => setIsLogin(true)}
              className={`relative z-10 w-1/2 py-2.5 text-sm font-bold transition-colors cursor-pointer ${isLogin ? 'text-pink-600' : 'text-gray-500'}`}
            >
              লগইন
            </button>
            <button 
              onClick={() => setIsLogin(false)}
              className={`relative z-10 w-1/2 py-2.5 text-sm font-bold transition-colors cursor-pointer ${!isLogin ? 'text-pink-600' : 'text-gray-500'}`}
            >
              রেজিস্ট্রেশন
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={isLogin ? "login" : "signup"}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
            >
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                {!isLogin && (
                  <div className="relative">
                    <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="text" placeholder="পূর্ণ নাম" className="auth-input" />
                  </div>
                )}

                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input type="email" placeholder="ইমেইল অ্যাড্রেস" className="auth-input" />
                </div>

                {!isLogin && (
                  <div className="relative">
                    <FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="tel" placeholder="ফোন নম্বর" className="auth-input" />
                  </div>
                )}

                <div className="relative">
                  <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input type="password" placeholder="পাসওয়ার্ড" className="auth-input" />
                </div>

                {isLogin && (
                  <div className="text-right">
                    <button className="text-xs cursor-pointer text-pink-600 font-semibold hover:underline">পাসওয়ার্ড ভুলে গেছেন?</button>
                  </div>
                )}

                <button className="w-full bg-pink-600 text-white py-4 cursor-pointer rounded-2xl font-bold shadow-lg shadow-pink-100 hover:bg-pink-700 active:scale-[0.98] transition-all">
                  {isLogin ? "লগইন করুন" : "একাউন্ট তৈরি করুন"}
                </button>
              </form>
            </motion.div>
          </AnimatePresence>

          <div className="relative my-8 text-center">
            <hr className="border-gray-100" />
            <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-white px-4 text-xs text-gray-400 uppercase">অথবা</span>
          </div>

          <button className="w-full cursor-pointer flex items-center justify-center gap-3 border border-gray-200 py-3.5 rounded-2xl hover:bg-gray-50 transition-all font-semibold text-gray-700">
            <FaGoogle className="text-red-500" /> গুগল দিয়ে ট্রাই করুন
          </button>
        </div>
      </div>

      <style jsx>{`
        .auth-input {
          width: 100%;
          padding: 14px 14px 14px 48px;
          background-color: #F9FAFB;
          border: 1px solid #E5E7EB;
          border-radius: 16px;
          outline: none;
          transition: all 0.3s;
          font-size: 14px;
        }
        .auth-input:focus {
          border-color: #db2777;
          background-color: white;
          box-shadow: 0 0 0 4px rgba(219, 39, 119, 0.1);
        }
      `}</style>
    </div>
  );
};

export default AuthPage;