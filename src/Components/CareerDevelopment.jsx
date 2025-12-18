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
      <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-3xl overflow-hidden">
        <div
          className="w-full lg:w-1/2 flex justify-center items-center p-6"
          style={{
            backgroundImage: `url(${K4bg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <img src={K4} alt="Career Illustration" className="max-w-[480px] w-full" />
        </div>

        <div className="w-full lg:w-1/2">
          <div className="h-[420px] overflow-y-auto pr-4 custom-red-scrollbar space-y-10 py-2">
            {items.map((item, index) => (
              <div key={index} className="flex gap-5">
                <img src={item.icon} alt="icon" className="w-14 h-14 flex-shrink-0" />

                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    {item.title}
                  </h3>

                  {item.desc && (
                    <p className="text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  )}

                  {item.list && (
                    <ul className="space-y-3 text-slate-600">
                      {item.list.map((li, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="mt-2 w-2 h-2 bg-slate-400 rounded-full"></span>
                          {li}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .custom-red-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-red-scrollbar::-webkit-scrollbar-thumb {
          background: #ef4444;
          border-radius: 10px;
        }
      `}</style>
    </section>
  )
}

export default CareerDevelopment
