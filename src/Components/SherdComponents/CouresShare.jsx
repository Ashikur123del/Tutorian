import React, { useState } from 'react'
import mansImg from "../../assets/images/ffff.svg"
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

const CouresShare = () => {
  const subjects = [
    { id: 'Bangla', label: 'বাংলা' },
    { id: 'English', label: 'ইংরেজি' },
    { id: 'Math', label: 'গণিত' },
    { id: 'GK', label: 'সাধারণ জ্ঞান' },
    { id: 'Science', label: 'সাধারণ বিজ্ঞান' }
  ]

  // শুরুতে প্রথম ২টি (বাংলা ও ইংরেজি) ওপেন রাখার জন্য তাদের ID দেওয়া হয়েছে
  const [openSections, setOpenSections] = useState(['Bangla', 'English'])

  const instructors = {
    Bangla: { name: 'Md Kamrul Hasan', university: 'DU', exp: '10+ Years Exp' },
    English: { name: 'Md Kamrul Hasan', university: 'DU', exp: '10+ Years Exp' },
    Math: { name: 'Md Kamrul Hasan', university: 'DU', exp: '10+ Years Exp' },
    GK: { name: 'Md Kamrul Hasan', university: 'DU', exp: '10+ Years Exp' },
    Science: { name: 'Md Kamrul Hasan', university: 'DU', exp: '10+ Years Exp' }
  }

  const toggleSection = (id) => {
    setOpenSections(prev => 
      prev.includes(id) ? prev.filter(sec => sec !== id) : [...prev, id]
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white font-sans text-[#1A1A1A]">
      <section className="mb-12">
        <h2 className="text-[32px] font-bold mb-5">এই কোর্সের বিবরণ</h2>
        <p className="text-[#4B5563] leading-[1.6]  text-justify font-semibold text-sm ">
         এই কোর্সটি প্রাথমিক বিদ্যালয়ের সহকারী শিক্ষক নিয়োগ পরীক্ষার জন্য সম্পূর্ণ প্রস্তুতি নেওয়ার একটি সমন্বিত প্রশিক্ষণ কোর্স। এখানে পরীক্ষায় প্রয়োজনীয় সকল বিষয় যেমন বাংলা, গণিত, ইংরেজি, সাধারণ জ্ঞান, প্যাডাগজি (শিক্ষাদর্শন), তথ্য-প্রযুক্তি ও শিক্ষাবিষয়ক নীতিমালা সহজভাবে উপস্থাপন করা হয়
          কোর্সটিতে থাকবে—ভিডিও লেকচার, চ্যাপ্টারভিত্তিক নোট, গুরুত্বপূর্ণ প্রশ্নব্যাংক, মডেল টেস্ট এবং পরীক্ষামুখী টিপস, যা পরীক্ষার্থীর প্রস্তুতিকে আরও শক্তিশালী ও নির্ভুল করবে।
        </p>
      </section>
      <section className="mb-12">
        <h2 className="text-[32px] font-bold mb-6">চলমান ব্যাচের সময়</h2>
        <div className="inline-flex gap-3 p-3 bg-[#F8FAFC] border border-[#E5E7EB] rounded-[14px]">
          {['সকাল ১০টা', 'বিকাল ৩টা', 'রাত ৯টা'].map((time) => (
            <div key={time} className="bg-white border border-[#E5E7EB] rounded-lg px-6 py-2.5 text-[15px] font-semibold text-[#374151] shadow-sm">
              {time}
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-[32px] font-bold mb-6">কোর্স ইন্সট্রাক্টর</h2>
        
        <div className="border border-[#E5E7EB] bg-[#F9FAFB] rounded-[20px] p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {subjects.map((subject, index) => {
              const isOpen = openSections.includes(subject.id);
              const isLast = index === subjects.length - 1;

              return (
                <div 
                  key={subject.id} 
                  className={`bg-white border border-[#E5E7EB] rounded-[12px] transition-all duration-300 shadow-sm h-fit ${isLast ? 'md:col-span-2' : ''}`}
                >
                  <button 
                    onClick={() => toggleSection(subject.id)}
                    className="w-full flex items-center justify-between p-4 px-5 text-left"
                  >
                    <span className="text-[17px] font-bold text-[#111827]">{subject.label}</span>
                    <div className="text-[#6B7280]">
                      {isOpen ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
                    </div>
                  </button>

                  <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40' : 'max-h-0'}`}>
                    <div className="px-4 pb-4">
                      <div className="flex items-center gap-3 p-3 border border-[#F3F4F6] rounded-xl bg-white shadow-[0_2px_10px_rgba(0,0,0,0.04)]">
                        <img src={mansImg} alt="Instructor" className="w-[44px] h-[44px] rounded-full object-cover border border-[#E5E7EB]" />
                        <div>
                          <p className="text-[15px] font-bold text-[#111827] leading-none">{instructors[subject.id].name}</p>
                          <p className="text-[13px] text-[#6B7280] mt-1.5">{instructors[subject.id].university} ({instructors[subject.id].exp})</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>


      <div className="inline-flex flex-wrap gap-3 p-3 bg-[#F8FAFC] border border-[#E5E7EB] rounded-[14px]">
        {['কোর্সের সূচিপত্র', 'কোর্সের বিষয়বস্তু', 'কোর্স উপকরণ', 'এক্সাম'].map((label) => (
          <button key={label} className="bg-white border border-[#E5E7EB] rounded-lg px-5 py-2.5 text-[15px] font-bold text-[#374151] hover:bg-gray-50 transition-all shadow-sm">
            {label}
          </button>
        ))}
      </div>

    </div>
  )
}

export default CouresShare