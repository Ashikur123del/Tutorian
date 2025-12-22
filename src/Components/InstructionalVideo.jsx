import React, { useState } from "react";
import ReactPlayer from "react-player";
import { motion, AnimatePresence } from "framer-motion";
import VideoIcon from "../assets/images/Video.svg";
import VideoBg from "../assets/images/BgPaly.png";
import VideoBg1 from "../assets/images/VideoIcon.svg";

const videoList = [
  { id: 1, title: "প্রতিষ্ঠানের সাথে অভিভাবকদের দূরত্ব কমিয়ে এনে মনিটর করা", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
  { id: 2, title: "কিভাবে শিক্ষক এবং অভিভাবক একসাথে শিক্ষার্থীর উন্নয়ন নিরীক্ষণ করতে পারে", url: "https://www.youtube.com/watch?v=kXYiU_JCYtU" },
  { id: 3, title: "ভিডিও গাইডলাইন দ্বারা শিক্ষার্থীর প্রগ্রেস ট্র্যাক করা সহজ", url: "https://www.youtube.com/watch?v=3JZ_D3ELwOQ" },
  { id: 4, title: "শিশুর জন্য দৈনন্দিন শিক্ষামূলক কার্যক্রম পরিকল্পনা করা", url: "https://www.youtube.com/watch?v=RgKAFK5djSk" },
  { id: 5, title: "শিক্ষার্থীর পারফরমেন্স রিপোর্ট এবং হোমওয়ার্ক মনিটর করা", url: "https://www.youtube.com/watch?v=L_jWHffIx5E" },
];

const InstructionalVideo = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1 } },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="container mx-auto px-4 py-10 md:py-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4"
      >
        <h2 className="text-2xl md:text-4xl font-extrabold text-gray-800 leading-tight">
          গাইডলাইন ভিত্তিক <span className="text-[#FC1C69]">ভিডিও প্লেলিস্ট</span>
        </h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-[#FF7844] to-[#FC1C69] text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-pink-200 transition-all flex items-center gap-2"
          onClick={() => setActiveVideo(videoList[0])} // Default first video
        >
          সকল ভিডিও দেখুন
        </motion.button>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Video List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:col-span-5 space-y-4 order-2 lg:order-1"
        >
          {videoList.map((video) => {
            const isActive = activeVideo?.id === video.id;
            return (
              <motion.div
                key={video.id}
                variants={listItemVariants}
                whileHover={{ x: 10 }}
                onClick={() => setActiveVideo(video)}
                className={`flex items-center gap-4 p-4 rounded-2xl border  transition-all cursor-pointer group
                  ${isActive ? "bg-pink-50 border-pink-200 shadow-md" : "bg-white border-gray-100 hover:border-pink-100 hover:shadow-sm"}`}
              >
                <div className={`flex-shrink-0 p-3 rounded-xl transition-colors ${isActive ? "bg-pink-500" : "bg-gray-100 group-hover:bg-pink-100"}`}>
                  <img src={VideoIcon} alt="Play" className={`w-6 h-6 ${isActive ? "brightness-200" : ""}`} />
                </div>
                <p className={`text-sm md:text-base font-medium leading-snug transition-colors ${isActive ? "text-pink-700" : "text-gray-600"}`}>
                  {video.title}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Video Player */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 order-1 lg:order-2 sticky top-10"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black aspect-video lg:h-[500px]">
            <AnimatePresence mode="wait">
              {activeVideo ? (
                <motion.div
                  key={activeVideo.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full h-full"
                >
                  <ReactPlayer url={activeVideo.url} controls width="100%" height="100%" playing />
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="relative w-full h-full group"
                >
                  <img
                    src={VideoBg}
                    alt="Thumbnail"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/5 flex items-center justify-center">
                    <motion.img
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      src={VideoBg1}
                      alt="Play Icon"
                      className="w-24 h-24 md:w-96 md:h-96 object-contain drop-shadow-2xl cursor-pointer"
                      onClick={() => setActiveVideo(videoList[0])}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Decorative Icons */}
          {["-top-6 -right-6", "-bottom-6 -left-6"].map((pos, idx) => (
            <motion.img
              key={idx}
              animate={{ y: [0, idx % 2 === 0 ? -10 : 10, 0], rotate: idx % 2 === 0 ? 12 : 0 }}
              transition={{ repeat: Infinity, duration: idx % 2 === 0 ? 3 : 4 }}
              src={VideoIcon}
              className={`absolute ${pos} w-12 h-12 opacity-20 hidden md:block`}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default InstructionalVideo;
