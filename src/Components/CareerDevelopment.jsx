import React from 'react'
import K1 from '../assets/images/K1.svg'
import K2 from '../assets/images/K2.svg'
import K3 from '../assets/images/K3.svg'
import K4 from '../assets/images/K4.svg'
import K4bg from '../assets/images/K4bg.svg'

const items = [
  {
    icon: K1,
    title: 'স্বপ্নের চাকরির প্রস্তুতি যেখানে খুশি, যখন খুশি!',
    desc: 'দেশের লাখো তরুণ-তরুণীর স্বপ্ন, একটা ভালো চাকরি। কিন্তু সঠিক প্রস্তুতির অভাবে অনেকেই কাঙ্ক্ষিত লক্ষ্যে পৌঁছাতে পারে না।',
  },
  {
    icon: K2,
    title: 'চাকরির প্রস্তুতিতে সবচেয়ে বড় বাধা কী?',
    list: [
      'ভালো কোচিং সেন্টার সাধারণত শহরকেন্দ্রিক হওয়ায় গ্রামাঞ্চলের শিক্ষার্থীরা পিছিয়ে পড়ে।',
      'উচ্চ ফি ও সঠিক গাইডলাইনের অভাবে অনেক সময় পরিশ্রম বৃথা যায়।',
    ],
  },
  {
    icon: K3,
    title: 'পরিবর্তনের পথে টিউটোরিয়ানের সাথে',
    desc: '২০২৩ সালে এম আই প্রধান মুকুল স্যার প্রতিষ্ঠা করেন টিউটোরিয়ান — একটি সহজ, সাশ্রয়ী ও মানসম্মত অনলাইন কোচিং প্ল্যাটফর্ম।',
  },
  {
    icon: K1,
    title: 'এক প্ল্যাটফর্মে সম্পূর্ণ প্রস্তুতি',
    desc: 'লাইভ ক্লাস, রেকর্ডেড ভিডিও, মডেল টেস্ট ও গাইডলাইন—সব এক জায়গায়।',
  },
  {
    icon: K2,
    title: 'সময় ও খরচ দুটোই সাশ্রয়',
    desc: 'ঘরে বসেই মানসম্মত প্রস্তুতির সুযোগ, অতিরিক্ত খরচ ছাড়াই।',
  },
]

const CareerDevelopment = () => {
  return (
    <section className="container mx-auto px-4 py-16 font-sans">
      <div className="flex flex-col lg:flex-row gap-8 bg-white rounded-3xl overflow-hidden shadow-lg">
        {/* Left Image */}
        <div
          className="w-full lg:w-1/2 flex justify-center items-center p-4 lg:p-6"
          style={{
            backgroundImage: `url(${K4bg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <img
            src={K4}
            alt="Career Illustration"
            className="max-w-[400px] md:max-w-[480px] w-full"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col gap-6 md:gap-8 overflow-y-auto max-h-[500px] pr-2 md:pr-4 custom-scrollbar">
            {items.map((item, index) => (
              <div key={index} className="flex gap-4 md:gap-5 bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-white shadow-md">
                  <img src={item.icon} alt={item.title} className="w-10 h-10 md:w-12 md:h-12" />
                </div>

                <div>
                  <h3 className="text-sm md:text-lg font-bold text-slate-800 mb-1 md:mb-2">
                    {item.title}
                  </h3>
                  {item.desc && (
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  )}
                  {item.list && (
                    <ul className="list-disc list-inside text-xs md:text-sm text-slate-600 mt-1 md:mt-2">
                      {item.list.map((li, i) => (
                        <li key={i}>{li}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Scrollbar */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #ef4444;
          border-radius: 10px;
        }
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #ef4444 transparent;
        }
      `}</style>
    </section>
  )
}

export default CareerDevelopment
