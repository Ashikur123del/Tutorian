import React from 'react'
import { FaTrashAlt, FaShoppingCart, FaUser, FaWallet } from 'react-icons/fa'
import Myimg from '../../../assets/images/my2.png'

const MyCardBody = () => {
  return (
    <div className='bg-[#F8F9FD] min-h-screen p-4 md:p-10 font-sans text-gray-700'>
      <div className='container mx-auto space-y-12'>
        <div className='flex '>
          <div className='flex items-center w-full max-w-2xl justify-between relative'>
            <div className='flex flex-col items-center z-10'>
              <div className='w-10 h-10 bg-[#FF2E63] rounded-full flex items-center justify-center text-white shadow-md'>
                <FaShoppingCart size={18} />
              </div>
              <span className='text-[#FF2E63] text-[13px] mt-2 font-bold whitespace-nowrap'>
                অর্ডার কনফার্মেশন
              </span>
            </div>

            <div className='flex-1 h-[2px] bg-gray-200 mx-2 -mt-6'></div>
            <div className='flex flex-col items-center z-10'>
              <div className='w-10 h-10 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center text-gray-400'>
                <FaUser size={18} />
              </div>
              <span className='text-gray-400 text-[13px] mt-2 whitespace-nowrap'>
                লগ ইন
              </span>
            </div>

            <div className='flex-1 h-[2px] bg-gray-200 mx-2 -mt-6'></div>

            <div className='flex flex-col items-center z-10'>
              <div className='w-10 h-10 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center text-gray-400'>
                <FaWallet size={18} />
              </div>
              <span className='text-gray-400 text-[13px] mt-2 whitespace-nowrap'>
                পেমেন্ট
              </span>
            </div>
          </div>
        </div>

        {/* Cart & Summary */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-6'>
          <div className='lg:col-span-8'>
            <div className='bg-[#F1F3F5] p-5 rounded-xl flex items-center justify-between max-w-2xl'>
              <div className='flex items-center gap-4'>
                <img
                  src={Myimg}
                  alt='Course'
                  className='w-24 h-16 rounded-lg object-cover bg-white'
                />
                <div>
                  <h3 className='text-[17px] font-bold text-gray-700'>
                    বিসিএস প্রিলি রেকর্ডেড কোর্স
                  </h3>
                  <div className='flex items-center gap-2 mt-1'>
                    <span className='text-[#FF2E63] font-bold text-lg'>
                      ৳ ২৫০০
                    </span>
                    <span className='text-gray-400 line-through text-sm'>
                      ৳ ৩০০০
                    </span>
                  </div>
                </div>
              </div>
              <button className='w-10 h-10 bg-white border border-red-100 rounded-full flex items-center justify-center text-red-400 hover:bg-red-50 transition-all'>
                <FaTrashAlt size={16} />
              </button>
            </div>
          </div>


          <div className='lg:col-span-4 relative top-0 md:-top-60'>
            <div className='bg-white p-6 rounded-[32px] py-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 sticky top-6'>
              <div className='space-y-6 mb-8'>
                <div className='flex justify-between items-center text-gray-700'>
                  <span className='text-[15px] font-semibold'>
                    বিসিএস প্রিলি রেকর্ডেড কোর্স
                  </span>
                  <span className='font-bold text-[#FF2E63] text-lg'>
                    ৳ ৩০০০
                  </span>
                </div>

                <div className='border-t border-gray-100'></div>

                <div className='flex justify-between items-center text-gray-700'>
                  <span className='text-[15px] font-semibold'>মোট</span>
                  <span className='font-bold text-[#FF2E63] text-lg'>
                    ৳ ৩০০০
                  </span>
                </div>

                <div className='border-t border-gray-100'></div>

                <div className='flex justify-between items-center'>
                  <span className='text-[15px] font-semibold text-gray-700'>
                    ডিসকাউন্ট
                  </span>
                  <span className='font-bold text-[#FF2E63] text-lg'>
                    ৳ ৫০০
                  </span>
                </div>
              </div>

              <div className='border-t border-gray-100 mb-8'></div>

              <div className='mb-8'>
                <p className='text-sm mb-3 font-semibold text-gray-700'>
                  প্রোমো কোড যোগ করুন
                </p>
                <div className='flex h-14 bg-[#F8F9FA] rounded-xl overflow-hidden p-1 border border-transparent focus-within:border-gray-200'>
                  <input
                    type='text'
                    placeholder='এন্টার প্রোমো কোড'
                    className='flex-1 px-4 text-sm bg-transparent outline-none text-gray-500 placeholder:text-gray-400'
                  />
                  <button className='bg-[#FF2E63] text-white px-6 rounded-lg text-sm font-semibold hover:bg-[#e02456] transition-all'>
                    এপ্লাই করুন
                  </button>
                </div>
              </div>

              {/* Total Section */}
              <div className='flex justify-between items-center mb-8'>
                <span className='font-semibold text-gray-800'>
                  সর্বমোট (ভ্যাট সহ)
                </span>
                <span className='font-black text-2xl text-gray-900'>
                  ৳ ২৫০০
                </span>
              </div>

              {/* Checkout Button */}
              <button className='w-full bg-[#FF2E63] text-white py-5 rounded-2xl font-semibold text-xl hover:shadow-lg hover:shadow-pink-200 transition-all active:scale-[0.98]'>
                এই কোর্সটি কিনুন
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyCardBody
