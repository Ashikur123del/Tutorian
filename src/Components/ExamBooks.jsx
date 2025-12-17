import React from "react";
import { IoEyeOutline } from "react-icons/io5";
import { LiaRandomSolid } from "react-icons/lia";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaStar } from "react-icons/fa";

import banner from "../assets/images/Books.png";
import book from "../assets/images/Book.svg";

const books = [
  { id: 1, bg: "bg-[#F2FFF4]" },
  { id: 2, bg: "bg-[#FFF8ED]" },
  { id: 3, bg: "bg-[#F2FBFF]" },
  { id: 4, bg: "bg-[#F4F1FF]" },
];

const ExamBooks = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-extrabold text-center mb-12">
        আমাদের সবচেয়ে জনপ্রিয় বই
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
    
        <div className="relative rounded-3xl overflow-hidden">
          <img src={banner} alt="banner" className="w-full h-full object-cover" />

          <div className="absolute top-10 p-8 flex flex-col justify-center">
            <p className="text-base font-semibold mb-2">
              জনপ্রিয় জানা অজানা বইগুলো
            </p>

            <h3 className="text-2xl md:text-4xl font-extrabold leading-snug mb-6">
              যে বইগুলো আপনার <br /> ক্যারিয়ারের জন্য
            </h3>

            {/* Gradient Button */}
            <button className="bg-gradient-to-r from-[#FF7844] to-[#FC1C69]
              text-white px-6 py-3 rounded-xl w-fit flex items-center gap-2
              font-semibold hover:opacity-90 transition">
              📚 সব বইগুলো দেখুন
            </button>
          </div>
        </div>

        {/* RIGHT BOOK GRID */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {books.map((item) => (
            <div
              key={item.id}
              className={`${item.bg} rounded-2xl p-5 flex gap-4 items-center`}
            >
              {/* Book Image */}
              <div className="bg-white p-3 rounded-xl shadow w-28 h-40 flex items-center justify-center">
                <img src={book} alt="book" className="h-full object-contain" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <p className="text-sm text-[#635658] mb-1">পদার্থবিজ্ঞান</p>

                <h4 className="font-bold text-[#635658] text-base mb-2 leading-snug">
                  পদার্থবিজ্ঞানের জানা অজানা বিষয় গুলো
                </h4>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-orange-400 text-xs" />
                  ))}
                  <span className="text-xs text-gray-400">(5.0)</span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-gradient-to-r from-[#FF7844] to-[#FC1C69]
                    bg-clip-text text-transparent font-bold">
                    ৳ ২৫০.০০
                  </span>
                  <span className="text-gray-400 line-through text-sm">
                    ৳৩০০.০০
                  </span>
                </div>

                {/* Icons */}
                <div className="flex gap-2">
                  <Icon><IoEyeOutline /></Icon>
                  <Icon><LiaRandomSolid /></Icon>
                  <Icon><AiOutlineHeart /></Icon>
                  <Icon active><HiOutlineShoppingBag /></Icon>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ICON BUTTON */
const Icon = ({ children, active }) => (
  <button
    className={`w-9 h-9 rounded-lg border flex items-center justify-center transition
    ${
      active
        ? "bg-gradient-to-r from-[#FF7844] to-[#FC1C69] text-white border-transparent"
        : "bg-white text-gray-600 hover:bg-gradient-to-r hover:from-[#FF7844] hover:to-[#FC1C69] hover:text-white"
    }`}
  >
    {children}
  </button>
);

export default ExamBooks;
