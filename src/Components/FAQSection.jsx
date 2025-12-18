import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const AccordionItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className={`border transition-all duration-300 rounded-xl mb-4 overflow-hidden ${
      isOpen ? 'border-blue-400 shadow-md bg-white' : 'border-gray-200 bg-[#DCE5ED]'
    }`}>
      <button
        className="w-full flex justify-between items-center p-5 text-left transition-colors"
        onClick={onToggle}
      >
        <span className={`font-semibold text-sm md:text-base ${isOpen ? 'text-blue-600' : 'text-gray-700'}`}>
          {question}
        </span>
        <span className={`${isOpen ? 'text-blue-500' : 'text-gray-400'}`}>
          {isOpen ? <FaMinus size={14} /> : <FaPlus size={14} />}
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100 p-5 pt-0' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden text-gray-600 text-sm leading-relaxed">
          {answer || "এই প্রশ্নের বিস্তারিত উত্তরটি এখানে থাকবে। আমরা আমাদের শিক্ষার্থীদের সর্বোচ্চ সহযোগিতা নিশ্চিত করি।"}
        </div>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const faqData = [
    { id: 1, question: "কোর্সটি কীভাবে কিনবো?", answer: "প্রথমে 'Buy Now' বাটনে ক্লিক করুন এবং আপনার প্রোফাইল তৈরি করুন।" },
    { id: 2, question: "বিকাশের মাধ্যমে কীভাবে পেমেন্ট করবো?", answer: "পেমেন্ট গেটওয়েতে বিকাশ সিলেক্ট করে আপনার নাম্বার দিন ও OTP ভেরিফাই করুন।" },
    { id: 3, question: "কোর্সের ভর্তি বাতিল করা কি সম্ভব?", answer: "ভর্তির ৭ দিনের মধ্যে রিফান্ড পলিসি অনুযায়ী আবেদন করা যাবে।" },
    { id: 4, question: "কোনো টেকনিক্যাল সমস্যা কীভাবে রিপোর্ট করব?", answer: "আমাদের সাপোর্ট প্যানেলে টিকিট ওপেন করুন অথবা হটলাইনে কল দিন।" },
    { id: 5, question: "কেনার পর কোর্সটি কীভাবে শুরু করব?", answer: "ড্যাশবোর্ড থেকে 'My Courses' সেকশনে গেলে আপনার কোর্সটি দেখতে পাবেন।" },
    { id: 6, question: "কোর্সটি কি মোবাইল থেকে করা যাবে?", answer: "হ্যাঁ, আমাদের মোবাইল অ্যাপ বা যেকোনো ব্রাউজার থেকে কোর্সটি করা যাবে।" },
    { id: 7, question: "ভিডিওগুলো কি ডাউনলোড করা যাবে?", answer: "ভিডিওগুলো অফলাইনে দেখার জন্য অ্যাপের ভেতরে ডাউনলোড অপশন পাবেন।" },
    { id: 8, question: "কোর্স শেষে কি সার্টিফিকেট পাওয়া যাবে?", answer: "সবগুলো মডিউল এবং কুইজ শেষ করার পর আপনি সার্টিফিকেট পাবেন।" },
    { id: 9, question: "মেন্টরের সাপোর্ট কীভাবে পাবো?", answer: "আমাদের ডেডিকেটেড ডিসকর্ড সার্ভার বা ফেসবুক গ্রুপে প্রশ্ন করতে পারবেন।" },
    { id: 10, question: "কোর্সের মেয়াদ কতদিন থাকবে?", answer: "একবার এনরোল করলে আপনি লাইফটাইম অ্যাক্সেস পাবেন।" },
  ];

  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="container mx-auto px-4 py-10 md:py-16">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-0 md:mb-4">
          কোর্সটি সম্পর্কে জিজ্ঞাসা
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8">
        <div>
          {faqData.slice(0, 5).map((item) => (
            <AccordionItem
              key={item.id}
              {...item}
              isOpen={openId === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
        </div>
        <div>
          {faqData.slice(5, 10).map((item) => (
            <AccordionItem
              key={item.id}
              {...item}
              isOpen={openId === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;