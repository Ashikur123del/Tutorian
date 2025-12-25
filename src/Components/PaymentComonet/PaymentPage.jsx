import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // রিডাইরেক্ট করার জন্য
import Swal from 'sweetalert2'; // স্মার্ট অ্যালার্টের জন্য
import Asste from '../../assets/images/asste.svg';
import Nagad from '../../assets/images/nagad.svg';
import Bkask from '../../assets/images/bKash.svg';
import Rocket from '../../assets/images/rocket.svg';
import { FaShoppingCart, FaWallet, FaCheckCircle } from 'react-icons/fa';

const PaymentPage = () => {
  const [selectedMethod, setSelectedMethod] = useState('bkash');
  const navigate = useNavigate(); // এটি ব্যবহার করে পেজ চেঞ্জ করবো

  const paymentMethods = [
    { id: 'bkash', name: 'বিকাশ', img: Bkask },
    { id: 'nagad', name: 'নগদ', img: Nagad },
    { id: 'rocket', name: 'রকেট', img: Rocket },
    { id: 'others', name: 'অন্যান্য পেমেন্ট মাধ্যম', img: Asste }
  ];

  // পেমেন্ট হ্যান্ডলার ফাংশন
  const handlePayment = () => {
    Swal.fire({
      title: 'প্রসেসিং হচ্ছে...',
      text: 'দয়া করে কিছুক্ষণ অপেক্ষা করুন',
      icon: 'info',
      showConfirmButton: false,
      timer: 2000, // ২ সেকেন্ড লোডিং দেখাবে
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      }
    }).then(() => {
      // লোডিং শেষ হলে সাকসেস মেসেজ দিবে
      Swal.fire({
        title: 'অভিনন্দন!',
        text: 'আপনার পেমেন্ট রিকোয়েস্ট সফল হয়েছে।',
        icon: 'success',
        confirmButtonText: 'ঠিক আছে',
        confirmButtonColor: '#E91E63',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/paymentsucces'); // বাটনে ক্লিক করলে অন্য পেজে যাবে
        }
      });
    });
  };

  return (
    <div className='min-h-[70vh] bg-[#FDFDFD] flex items-center justify-center py-10 font-sans'>
      <div className='container mx-auto px-4'>
        {/* Progress Stepper (সেম থাকবে) */}
        <div className='flex items-center justify-center mb-16 relative'>
          <div className='flex flex-col items-center relative z-10'>
            <div className='bg-[#E91E63] p-3 rounded-full text-white'>
              <FaShoppingCart size={18} />
            </div>
            <span className='text-[10px] md:text-xs mt-2 font-semibold text-gray-600 absolute -bottom-6 w-max'>অর্ডার কনফার্মেশন</span>
          </div>
          <div className='h-[1px] w-32 md:w-64 border-t border-4 border-[#E91E63] mx-2'></div>
          <div className='flex flex-col items-center relative z-10'>
            <div className='bg-white border border-gray-300 p-3 rounded-full text-gray-400'>
              <FaWallet size={18} />
            </div>
            <span className='text-[10px] md:text-xs mt-2 font-semibold text-gray-400 absolute -bottom-6 w-max'>পেমেন্ট</span>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 mt-10'>
          {/* Left Side: Order Summary (সেম থাকবে) */}
          <div className='bg-white p-6 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 self-start max-w-xl'>
             {/* ... আপনার আগের সামারি কোড ... */}
             <h2 className='text-lg font-semibold mb-6 text-gray-800 tracking-tight'>
               অর্ডার আইডি: <span className='font-extrabold uppercase'>TMS50747453</span>
             </h2>
             {/* ... বাকি অংশ ... */}
          </div>

          {/* Right Side: Payment Selection */}
          <div className='flex flex-col items-center'>
            <h2 className='text-xl font-semibold mb-6 text-gray-800 self-center'>
              পেমেন্ট মেথড সিলেক্ট করুন
            </h2>

            <div className='w-full max-w-[400px] bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-gray-100 p-6 space-y-3'>
              {paymentMethods.map(method => (
                <div
                  key={method.id}
                  onClick={() => setSelectedMethod(method.id)}
                  className={`flex items-center justify-between p-3 border rounded-xl cursor-pointer transition-all ${
                    selectedMethod === method.id
                      ? 'border-[#E91E63] ring-1 ring-[#E91E63]'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className='flex items-center gap-3'>
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                      selectedMethod === method.id ? 'border-[#E91E63]' : 'border-gray-300'
                    }`}>
                      {selectedMethod === method.id && <div className='w-2 h-2 bg-[#E91E63] rounded-full'></div>}
                    </div>
                    <span className='text-sm font-semibold text-gray-700'>{method.name}</span>
                  </div>
                  <div className='border rounded p-1 h-8 w-20 flex items-center justify-center'>
                    <img src={method.img} alt={method.name} className='max-h-full object-contain' />
                  </div>
                </div>
              ))}

              {/* পেমেন্ট বাটন (এটাই এখন ফাংশন কল করবে) */}
              <button 
                onClick={handlePayment}
                className='w-full text-center bg-[#E91E63] hover:bg-[#D81B60] text-white font-semibold py-3.5 rounded-xl mt-6 transition-all shadow-md active:scale-95'
              >
                পেমেন্ট করুন
              </button>

              <div className='flex items-center justify-center gap-2 mt-4 text-gray-500'>
                <FaCheckCircle size={14} className='text-gray-400' />
                <span className='text-[11px] font-medium'>সম্পূর্ণ নিরাপদ পেমেন্ট</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;