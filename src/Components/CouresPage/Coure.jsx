import React, { useState } from "react";

// Images import
import Course1 from "../../assets/images/Course1.png";
import Course2 from "../../assets/images/Coures2.png"; 
import Course3 from "../../assets/images/Coures3.png";
import Course4 from "../../assets/images/Coures4.png";
import Course5 from "../../assets/images/Coures2.png"; 
import Course6 from "../../assets/images/Coures3.png";
import Course7 from "../../assets/images/Coures4.png";
import Course8 from "../../assets/images/Course1.png";
import Course9 from "../../assets/images/Coures2.png";
import { Link } from "react-router-dom";

const Coure = () => {
  // -------------------------
  // Dynamic Course Data
  // -------------------------
  const courses = [
    { id: 1, img: Course1, title: "১০-২০তম গ্রেড প্রিলি+লিখিত ফুল কোর্স", price: "৭০% ছাড়", category: "ক্লাস ৬ - এস.এস.সি", rating: 5, level: "বিগিনার" },
    { id: 2, img: Course2, title: "চাকরির প্রস্তুতি সম্পূর্ণ কোর্স", price: "৬০% ছাড়", category: "চাকরির প্রস্তুতি", rating: 4, level: "ইন্টারমিডিয়েট" },
    { id: 3, img: Course3, title: "ভর্তি প্রস্তুতি কোর্স", price: "৫০% ছাড়", category: "ভর্তি প্রস্তুতি", rating: 3, level: "অ্যাডভান্সড" },
    { id: 4, img: Course4, title: "একাডেমিক প্রোগ্রাম কোর্স", price: "৭০% ছাড়", category: "একাডেমিক প্রোগ্রাম", rating: 5, level: "বিগিনার" },
    { id: 5, img: Course5, title: "এক্সাম প্রস্তুতি কোর্স", price: "৭৫% ছাড়", category: "এক্সাম", rating: 4, level: "ইন্টারমিডিয়েট" },
    { id: 6, img: Course6, title: "স্কিল ডেভেলপমেন্ট কোর্স", price: "৬০% ছাড়", category: "স্কিল", rating: 3, level: "অ্যাডভান্সড" },
    { id: 7, img: Course7, title: "পাবলিকেশন কোর্স", price: "৫০% ছাড়", category: "পাবলিকেশনস", rating: 5, level: "বিগিনার" },
    { id: 8, img: Course8, title: "চাকরির প্রস্তুতি ২য় কোর্স", price: "৬০% ছাড়", category: "চাকরির প্রস্তুতি", rating: 4, level: "ইন্টারমিডিয়েট" },
    { id: 9, img: Course9, title: "এক্সাম ২য় কোর্স", price: "৭০% ছাড়", category: "এক্সাম", rating: 5, level: "বিগিনার" },
  ];

  // -------------------------
  // Dynamic Filters
  // -------------------------
  const categories = [...new Set(courses.map(course => course.category))];
  const ratings = [...new Set(courses.map(course => course.rating))].sort((a,b) => b-a); // High to low
  const levels = [...new Set(courses.map(course => course.level))];

  // -------------------------
  // States
  // -------------------------
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedRating, setSelectedRating] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");

  // -------------------------
  // Handlers
  // -------------------------
  const handleCategoryToggle = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleRatingSelect = (rating) => {
    setSelectedRating(selectedRating === rating ? null : rating);
  };

  const handleLevelSelect = (level) => {
    setSelectedLevel(level);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // -------------------------
  // Filtered Courses
  // -------------------------
  const filteredCourses = courses.filter(course => {
    const matchCategory = selectedCategories.length === 0 || selectedCategories.includes(course.category);
    const matchRating = !selectedRating || course.rating === selectedRating;
    const matchLevel = !selectedLevel || course.level === selectedLevel;
    const matchSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchRating && matchLevel && matchSearch;
  });

  // -------------------------
  // Render
  // -------------------------
  return (
    <div className="bg-[#F9FAFB] min-h-screen p-4 md:p-10 font-sans" dir="ltr">
      {/* Header Stats */}
      <div className=" container mx-auto flex justify-between items-center mb-6 px-4">
        <h2 className="text-lg font-bold text-gray-800">{filteredCourses.length}টি ফলাফল দেখানো হচ্ছে</h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">সর্ট করুন:</span>
          <select className="border border-gray-200 rounded-md px-3 py-1 text-sm bg-white focus:outline-none">
            <option>জনপ্রিয় কোর্স</option>
          </select>
        </div>
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row gap-8 px-4">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 space-y-6">
          {/* Categories */}
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-800 border-b border-gray-100 pb-2 mb-4">কোর্স ক্যাটাগরি সমূহ</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              {categories.map(category => (
                <li key={category} className="flex justify-between items-center group cursor-pointer hover:text-[#FD2D6C]">
                  <div className="flex items-center gap-2" onClick={() => handleCategoryToggle(category)}>
                    <input 
                      type="checkbox" 
                      checked={selectedCategories.includes(category)} 
                      onChange={() => handleCategoryToggle(category)} 
                      className="accent-[#FD2D6C] w-4 h-4" 
                    />
                    <span>{category}</span>
                  </div>
                  <span className="text-gray-400 group-hover:text-[#FD2D6C]">
                    {courses.filter(course => course.category === category).length}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Search */}
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-800 border-b border-gray-100 pb-2 mb-4">কোর্সের ফিল্টার</h3>
            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-gray-600 block mb-1">কোর্স সার্চ</label>
                <input 
                  type="text" 
                  value={searchTerm} 
                  onChange={handleSearch} 
                  placeholder="কোর্সের নাম" 
                  className="w-full border border-gray-200 p-2 rounded text-sm focus:outline-none focus:border-[#FD2D6C]" 
                />
              </div>

              {/* Level */}
              <div>
                <label className="text-xs font-bold text-gray-600 block mb-1">লেভেল অনুযায়ী</label>
                <select 
                  className="w-full border border-gray-200 p-2 rounded text-sm bg-white focus:outline-none"
                  value={selectedLevel} 
                  onChange={(e) => handleLevelSelect(e.target.value)}
                >
                  <option value="">সব লেভেল</option>
                  {levels.map(level => <option key={level} value={level}>{level}</option>)}
                </select>
              </div>
            </div>
          </div>

          {/* Ratings */}
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-800 border-b border-gray-100 pb-2 mb-4">রেটিং অনুযায়ী</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              {ratings.map(rating => (
                <li key={rating} className="flex justify-between items-center cursor-pointer hover:text-[#FD2D6C]">
                  <div className="flex items-center gap-2" onClick={() => handleRatingSelect(rating)}>
                    <input 
                      type="radio" 
                      name="rating" 
                      checked={selectedRating === rating} 
                      onChange={() => handleRatingSelect(rating)}
                      className="accent-[#FD2D6C]" 
                    />
                    <span>{rating} স্টার</span>
                  </div>
                  <span className="text-gray-400 text-xs">{courses.filter(course => course.rating === rating).length}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main Grid */}
        <main className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredCourses.map(course => (
              <div key={course.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300">
                <div className="relative group">
                  <img src={course.img} alt={course.title} className="w-full h-auto object-cover" />
                  <div className="absolute top-2 right-2 bg-white text-[#FD2D6C] text-[10px] font-bold px-2 py-1 rounded-full shadow-sm">
                    {course.price}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-red-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-gray-800 text-sm mb-2 leading-tight">{course.title}</h4>
                  <p className="text-[11px] text-gray-500 mb-4 leading-relaxed line-clamp-2">
                    বিশেষজ্ঞদের পরামর্শে ভবিষ্যৎ গড়ুন এবং সঠিক গাইডলাইনের মাধ্যমে নিজের দক্ষতাকে বৃদ্ধি করুন।
                  </p>
                  <Link to="/educationprat" className="w-full text-center inline-block bg-[#FD2D6C] hover:bg-[#e0245e] text-white py-2.5 rounded-md text-sm font-semibold transition-colors shadow-sm active:scale-95">
                    Course Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Coure;
