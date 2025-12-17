import React from "react";
import VideoIcon from "../assets/images/Video.svg";
import VideoBg from "../assets/images/BgPaly.png";
import VideoBg1 from "../assets/images/VideoIcon.svg";

const InstructionalVideo = () => {
  const videoList = [
    "প্রতিষ্ঠানের সাথে অভিভাবকদের দূরত্ব কমিয়ে এনে অভিভাবক নিজের বাচ্চার যাবতীয় শিক্ষা কার্যক্রম যেন ঘরে বসেই মনিটর করতে পারে",
    "প্রতিষ্ঠানের সাথে অভিভাবকদের দূরত্ব কমিয়ে এনে অভিভাবক নিজের বাচ্চার যাবতীয় শিক্ষা কার্যক্রম যেন ঘরে বসেই মনিটর করতে পারে",
    "প্রতিষ্ঠানের সাথে অভিভাবকদের দূরত্ব কমিয়ে এনে অভিভাবক নিজের বাচ্চার যাবতীয় শিক্ষা কার্যক্রম যেন ঘরে বসেই মনিটর করতে পারে",
    "প্রতিষ্ঠানের সাথে অভিভাবকদের দূরত্ব কমিয়ে এনে অভিভাবক নিজের বাচ্চার যাবতীয় শিক্ষা কার্যক্রম যেন ঘরে বসেই মনিটর করতে পারে",
    "প্রতিষ্ঠানের সাথে অভিভাবকদের দূরত্ব কমিয়ে এনে অভিভাবক নিজের বাচ্চার যাবতীয় শিক্ষা কার্যক্রম যেন ঘরে বসেই মনিটর করতে পারে",
  ];

  return (
    <div className="container mx-auto px-4 pt-15 py-10">
      <div className="flex justify-between items-center mb-8">
        <h2 className=" text-3xl md:text-4xl font-bold text-gray-800">
          গাইডলাইন ভিত্তিক ভিডিও প্লেলিস্ট
        </h2>
        <button className="bg-[#FC1C69] text-white px-6 cursor-pointer py-2 rounded-lg flex items-center gap-2 hover:bg-pink-600 transition">
          সকল ভিডিও দেখুন
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Video List */}
        <div className="space-y-4">
          {videoList.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition cursor-pointer"
            >
              <div className="flex-shrink-0">
                <img src={VideoIcon} alt="Play" className="w-8 h-8" />
              </div>
              <p className="text-base font-semibold text-gray-600 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>

        {/* Video Preview */}
        <div className="relative group cursor-pointer">
          <div className="rounded-3xl overflow-hidden shadow-2xl relative">
            <img 
              src={VideoBg} 
              alt="Video Background" 
              className="w-full h-[500px] object-cover"
            />
            {/* Full-size Play Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src={VideoBg1} 
                alt="Play Icon" 
                className="w-32 h-32 md:w-96 md:h-96 lg:w-96 lg:h-96 object-contain"
              />
            </div>
          </div>
          
          {/* Decorative Small Icons */}
          <div className="absolute top-10 right-10 opacity-50">
             <img src={VideoIcon} alt="decor" className="w-12 rotate-12" />
          </div>
          <div className="absolute bottom-10 left-10 opacity-50">
             <img src={VideoIcon} alt="decor" className="w-12" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructionalVideo;
