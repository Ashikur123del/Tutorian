import React, { useState } from "react";
import { motion } from "framer-motion";
import Course1 from "../../assets/images/Course1.png";
import Course2 from "../../assets/images/Coures2.png";
import Course3 from "../../assets/images/Coures3.png";
import Course4 from "../../assets/images/Coures4.png";

const courses = [
  {
    id: 1,
    title: "১০-২০তম গ্রেড প্রিলি+লিখিত ফুল কোর্স",
    description: "বিশেষজ্ঞদের পরামর্শে ভবিষ্যৎ গড়ুন বুদ্ধিমত্তার সাথে শিখুন।",
    image: Course1,
    category: "ফ্রিল্যান্সিং",
    batches: ["সকালের ব্যাচ", "বিকালের ব্যাচ", "রাতের ব্যাচ"],
  },
  {
    id: 2,
    title: "১০-২০তম গ্রেড প্রিলি+লিখিত ফুল কোর্স",
    description: "বিশেষজ্ঞদের পরামর্শে ভবিষ্যৎ গড়ুন বুদ্ধিমত্তার সাথে শিখুন।",
    image: Course2,
    category: "ডিজাইন",
    batches: ["সকালের ব্যাচ", "বিকালের ব্যাচ", "রাতের ব্যাচ"],
  },
  {
    id: 3,
    title: "১০-২০তম গ্রেড প্রিলি+লিখিত ফুল কোর্স",
    description: "বিশেষজ্ঞদের পরামর্শে ভবিষ্যৎ গড়ুন বুদ্ধিমত্তার সাথে শিখুন।",
    image: Course3,
    category: "ডেভেলপমেন্ট",
    batches: ["সকালের ব্যাচ", "বিকালের ব্যাচ", "রাতের ব্যাচ"],
  },
  {
    id: 4,
    title: "১০-২০তম গ্রেড প্রিলি+লিখিত ফুল কোর্স",
    description: "বিশেষজ্ঞদের পরামর্শে ভবিষ্যৎ গড়ুন বুদ্ধিমত্তার সাথে শিখুন।",
    image: Course4,
    category: "মার্কেটিং",
    batches: ["সকালের ব্যাচ", "বিকালের ব্যাচ", "রাতের ব্যাচ"],
  },
];

/* ======= CARD ANIMATIONS ======= */
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  hover: { scale: 1.03, y: -5, transition: { duration: 0.3 } },
};

const CourseCard = ({ course }) => (
  <motion.div
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    whileHover="hover"
    viewport={{ once: true }}
    className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)]
               cursor-pointer border border-gray-100 flex flex-col p-3 transition-all"
  >
    <div className="relative rounded-lg overflow-hidden h-48 mb-4">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1 px-2">
        {course.batches.map((batch, idx) => (
          <span
            key={idx}
            className="bg-white text-[10px] px-2 py-1 rounded-md shadow-2xl border border-gray-600 text-gray-700 font-medium"
          >
            {batch}
          </span>
        ))}
      </div>
    </div>
    <div className="flex-grow text-left px-1 mt-2">
      <h3 className="text-[18px] font-bold text-gray-800 mb-2 leading-tight">
        {course.title}
      </h3>
      <p className="text-[13px] text-gray-500 mb-5 leading-relaxed">
        {course.description}
      </p>
    </div>
    <div className="mt-auto px-1 pb-1">
      <button className="w-full bg-[#ff1a69] hover:bg-[#e6155d] text-white font-medium py-3 rounded-xl transition-colors text-sm">
        Course Details
      </button>
    </div>
  </motion.div>
);

export default function CourseSelection() {
  const categories = ["সকল"].concat([...new Set(courses.map((c) => c.category))]);
  const [activeCategory, setActiveCategory] = useState("সকল");

  const filteredCourses =
    activeCategory === "সকল"
      ? courses
      : courses.filter((course) => course.category === activeCategory);

  /* ====== CATEGORY BUTTON ANIMATION ====== */
  const buttonVariants = {
    inactive: { scale: 1 },
    active: { scale: 1.05, transition: { duration: 0.2 } },
  };

  return (
    <div className="bg-[#fcfcfc] min-h-[80vh] py-10 md:py-16 px-4 font-sans">
      <div className="container mx-auto text-center">
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-10">
          আমাদের লাইভ কোর্স সমূহ
        </h1>
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat, index) => {
            const count =
              cat === "সকল"
                ? courses.length
                : courses.filter((c) => c.category === cat).length;
            return (
              <motion.button
                key={index}
                onClick={() => setActiveCategory(cat)}
                variants={buttonVariants}
                animate={activeCategory === cat ? "active" : "inactive"}
                className={`flex flex-col items-center justify-center min-w-[100px] py-2 px-4 rounded-lg border transition-all ${
                  activeCategory === cat
                    ? "bg-white border-gray-400 shadow-sm"
                    : "bg-[#f1f5f9]/50 border-gray-300 hover:border-gray-200"
                }`}
              >
                <span className="text-[14px] font-bold text-gray-800">{cat}</span>
                <span className="text-[11px] text-gray-500">{count} কোর্স</span>
              </motion.button>
            );
          })}
        </div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          animate="visible"
        >
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))
          ) : (
            <p className="col-span-full text-gray-500">
              কোনো কোর্স পাওয়া যায়নি।
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
