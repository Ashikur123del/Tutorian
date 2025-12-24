import React, { useState } from 'react'
import AuthorSelect from '../SherdComponents/AuthorSelect'
import { HiOutlineCheckCircle } from 'react-icons/hi'
import { IoIosArrowDown, IoMdCart } from "react-icons/io"
import { AiOutlinePlayCircle } from "react-icons/ai"
import { BsLayers, BsJournalText, BsPerson } from "react-icons/bs"
import Cardr from "../../assets/images/Cardr.svg"
import ClientSense from '../ClientSense'

/* ---------- FAQ ITEM ---------- */
const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-gray-200 rounded-xl bg-[#DCE5ED] overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-5 py-4 text-left"
      >
        <span className="font-semibold text-gray-800">
          {question}
        </span>
        <IoIosArrowDown
          className={`text-gray-400 transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>

      <div
        className={`px-5 text-sm text-gray-600 transition-all duration-300 overflow-hidden ${
          open ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {answer}
      </div>
    </div>
  )
}

/* ---------- MAIN SECTION ---------- */
const EducationParts = () => {
  return (
    <section className="py-4 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-12 items-start">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-8 space-y-14 max-w-2xl">

            {/* Description */}
            <div>
              <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-6">
                এই বইয়ের বিবরণ
              </h2>
              <p className="text-gray-700 leading-7 text-justify font-semibold text-sm">
               একটা গ্রন্থ গোটা একটা সভ্যতাকে বদলে দিয়েছে— এমন ঘটনা দুনিয়ায় আর একটাও নেই। কী আছে সেই কুরআনে যার স্পর্শে এলে মানুষেরা পাগলপারা হয়ে যায়? কী তার শক্তি যা আমূল বদলে দেয় মানুষের চিন্তাধারা, জীবনপদ্ধতিকে? কী আশ্চর্য তার ক্ষমতা যা শুনবার জন্যে চরম শত্রুরাও রাতের অন্ধকারে কান পেতে রাখতো? জীবনের যে উদ্দেশ্য আর রহস্যের সন্ধানে একদা হেরা গুহায় দিন কেটেছিলো নবিজী সাল্লাললাহু আলাইহি ওয়াসাল্লামের, সেই উদ্দেশ্যের স্বরূপ উপস্থাপনা এই কুরআন। আগাগোড়া পাপে জর্জরিত একটা সভ্যতা এই কুরআনের সংস্পর্শে হয়ে উঠেছে অজেয়, অপ্রতিরোধ্য। ব্যক্তিক, সামাজিক এবং রাষ্ট্রীয়— সবখানে এই কুরআন ছিলো নিউক্লিয়াসের ভূমিকায়। অন্ধকারে ডুবে থাকা একটা সমাজকে এই কুরআন বানিয়েছে আলোর উৎস। পৃথিবীর প্রান্তে প্রান্তে, দিগন্ত থেকে দিগন্তে ছড়িয়ে গেছে এই আলোর ঝলকানি।
              </p>

              <div className="mt-8">
                <AuthorSelect />
              </div>
            </div>

            {/* Target Audience */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                এই বই কার জন্য ভালো
              </h2>

              <div className="space-y-4">
                {[
                  "কুরআনের গভীর অর্থ বুঝতে আগ্রহীদের জন্য",
                  "ইসলামিক আত্মউন্নয়ন খুঁজছেন যারা",
                  "সহজ কিন্তু প্রভাবশালী চিন্তা ভালোবাসেন যারা",
                  "কুরআনভিত্তিক জীবন গড়তে চান"
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-4 rounded-xl bg-green-50/60 hover:bg-green-100/60 transition"
                  >
                    <HiOutlineCheckCircle className="text-green-600 text-2xl mt-1" />
                    <span className="font-medium text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-2xl font-bold mb-6">
                প্রায়শই জিজ্ঞাসিত প্রশ্ন
              </h2>

              <div className="space-y-4 max-w-2xl">
                <FAQItem
                  question="কোর্সটি কীভাবে কিনবো?"
                  answer="এই বইটি কিনুন বাটনে ক্লিক করে প্রয়োজনীয় তথ্য দিয়ে অর্ডার সম্পন্ন করুন।"
                />
                <FAQItem
                  question="বিকাশের মাধ্যমে কীভাবে পেমেন্ট করবো?"
                  answer="পেমেন্ট অপশনে বিকাশ সিলেক্ট করে আপনার পিন দিয়ে পেমেন্ট নিশ্চিত করুন।"
                />
                <FAQItem
                  question="সমস্যা হলে কোথায় যোগাযোগ করবো?"
                  answer="আমাদের হেল্পলাইন অথবা ফেসবুক মেসেঞ্জারে যোগাযোগ করুন।"
                />
                <FAQItem
                  question="কোনো টেকনিকাল সমস্যা কীভাবে রিপোর্ট করব?"
                  answer="আমাদের হেল্পলাইন অথবা ফেসবুক মেসেঞ্জারে যোগাযোগ করুন।"
                />
                <FAQItem
                  question="কেনার পর কোর্সটি কীভাবে শুরু করব?"
                  answer="আমাদের হেল্পলাইন অথবা ফেসবুক মেসেঞ্জারে যোগাযোগ করুন।"
                />
              </div>
            </div>

          </div>

          {/* RIGHT CARD */}
          <div className="lg:col-span-4 sticky top-10 flex justify-end">
            <div className="w-full max-w-[340px]">

              <div className="bg-white border border-gray-200 rounded-3xl p-4 shadow-xl overflow-hidden relative top-0 md:-top-60">

                {/* Image */}
                <div className="relative">
                  <img src={Cardr} alt="Book" className="w-full" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <AiOutlinePlayCircle className="text-white text-6xl opacity-90" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl font-extrabold text-gray-900">
                      ৳২৬৪
                    </span>
                    <span className="line-through text-gray-400">
                      ৳৩৩০
                    </span>
                  </div>

                  <p className="text-gray-600 mb-5">
                    কুরআন থেকে নেওয়া জীবনের পাঠ
                  </p>

                  <button className="w-full bg-[#FF1E67] hover:bg-[#e61a5c] text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition">
                    <IoMdCart size={20} />
                   এই বইটি কিনুন
                  </button>

                  <div className="mt-6 pt-4  space-y-3 text-sm text-gray-700">
                    <div className="flex items-center gap-2">
                      <BsPerson /> লেখক: আরিফ আজাদ
                    </div>
                    <div className="flex items-center gap-2">
                      <BsLayers /> প্রকাশনী: সমকালীন প্রকাশন
                    </div>
                    <div className="flex items-center gap-2">
                      <BsJournalText /> মোট পৃষ্ঠা: ১৭৪
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
        <ClientSense />
      </div>
    </section>
  )
}

export default EducationParts
