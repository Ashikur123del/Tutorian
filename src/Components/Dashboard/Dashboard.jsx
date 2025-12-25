import React, { useState } from 'react';
// ইমপোর্ট করা ইমেজগুলো
import D1 from "../../assets/images/D1.svg"
import D2 from "../../assets/images/D2.svg"
import D3 from "../../assets/images/D3.svg"
import D4 from "../../assets/images/D4.svg"
import D5 from "../../assets/images/D5.svg"
import D6 from "../../assets/images/D6.svg"

import { 
  MdDashboard, MdOutlineLibraryBooks, MdOutlineAssignment, 
  MdHeadsetMic, MdOutlineDevices, MdLogout, MdMenu, MdClose, 
  MdNotificationsNone
} from "react-icons/md";

const SidebarItem = ({ icon: Icon, label, active = false }) => (
  <div className={`flex items-center space-x-3 p-3 rounded-xl cursor-pointer transition-all duration-200 ${
    active ? 'bg-white/10 text-white shadow-sm' : 'text-gray-400 hover:bg-white/5 hover:text-white'
  }`}>
    <Icon size={22} />
    <span className="text-[14px] font-medium">{label}</span>
  </div>
);

// StatCard Component: এখানে Icon এর বদলে imgSrc ব্যবহার করা হয়েছে
const StatCard = ({ imgSrc, title, count }) => (
  <div className="bg-white p-4 lg:p-5 rounded-xl flex flex-col space-y-3 border border-gray-100 shadow-sm transition-transform hover:scale-[1.02]">
    <div className="flex items-center space-x-3">
      {/* ইমেজ কন্টেইনার */}
      <div className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center">
        <img src={imgSrc} alt={title} className="w-full h-full object-contain" />
      </div>
      <h3 className="text-[14px] lg:text-[16px] font-bold text-[#1a1c2e]">{title}</h3>
    </div>
    <div className="text-2xl lg:text-3xl font-extrabold text-gray-800 px-1">
      {count}
    </div>
  </div>
);

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#f8f9fc] font-sans overflow-hidden">
      
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-64 bg-[#1a1c2e] text-white flex-col p-6 shadow-xl">
        <div className="mb-12 flex items-center space-x-2 px-2">
          <div className="w-8 h-8 bg-[#FC1D6A] rounded-lg flex items-center justify-center text-white font-bold">T</div>
          <h1 className="text-2xl font-black italic tracking-tighter">Tutorian</h1>
        </div>
        <nav className="space-y-2 flex-1">
          <SidebarItem icon={MdDashboard} label="ড্যাশবোর্ড" active />
          <SidebarItem icon={MdOutlineLibraryBooks} label="আমার কোর্স" />
          <SidebarItem icon={MdOutlineAssignment} label="আমার পরীক্ষা" />
          <SidebarItem icon={MdHeadsetMic} label="সাপোর্ট" />
          <SidebarItem icon={MdOutlineDevices} label="লগ-ইন ডিভাইস" />
          <div className="pt-4 mt-4 border-t border-gray-700/50">
            <SidebarItem icon={MdLogout} label="লগআউট" />
          </div>
        </nav>
      </aside>

      {/* Main Area */}
      <div className="flex-1 flex flex-col h-full overflow-y-auto">
        
        {/* Header */}
        <header className="px-6 py-5 flex justify-between items-center bg-white border-b border-gray-50 sticky top-0 z-10">
          <div className="flex flex-col">
            <div className="lg:hidden flex items-center space-x-1 mb-1">
              <div className="w-6 h-6 bg-[#FC1D6A] rounded flex items-center justify-center text-[10px] text-white font-bold">T</div>
              <span className="text-[#FC1D6A] font-bold italic text-lg">Tutorian</span>
            </div>
            <h2 className="text-sm lg:text-2xl font-bold text-[#1a1c2e]">Welcome Back, Abdur Razzak</h2>
            <p className="text-[10px] lg:text-sm text-gray-400 font-medium italic">7th December 2025, Monday</p>
          </div>

          <div className="flex items-center space-x-3 lg:space-x-5">
            <div className="hidden lg:flex p-2.5 bg-white shadow-sm border border-gray-100 rounded-full text-gray-500 relative">
              <MdNotificationsNone size={22} />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-orange-500 rounded-full border-2 border-white"></span>
            </div>
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-[#1a1c2e]">Abdur Razzak</p>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Student</p>
            </div>
            <img 
              src="https://i.pravatar.cc/150?u=razzak" 
              alt="Profile" 
              className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-white shadow-sm"
            />
            <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden p-2 border border-gray-100 rounded-xl bg-gray-50 shadow-sm">
              <MdMenu size={24} className="text-gray-700" />
            </button>
          </div>
        </header>

        {/* Content Section */}
        <main className="p-4 lg:p-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 container mx-auto">
              {/* এখানে ইমেজগুলো পাস করা হয়েছে */}
              <StatCard imgSrc={D1} title="আমার কোর্স" count="01" />
              <StatCard imgSrc={D2} title="আমার পরীক্ষা" count="01" />
              <StatCard imgSrc={D3} title="সার্টিফিকেট" count="01" />
              <StatCard imgSrc={D4} title="কোর্স প্রগ্রেস" count="01" />
              <StatCard imgSrc={D5} title="মোট নোটস" count="01" />
              <StatCard imgSrc={D6} title="সম্পূর্ণ কোর্স" count="01" />
            </div>
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsSidebarOpen(false)}></div>
          <div className="relative w-72 bg-[#1a1c2e] h-full p-6 shadow-2xl">
            <button onClick={() => setIsSidebarOpen(false)} className="absolute top-6 right-6 text-white/50">
              <MdClose size={30} />
            </button>
            <div className="flex items-center space-x-2 mb-12">
               <div className="w-10 h-10 bg-[#FC1D6A] rounded-xl flex items-center justify-center text-white font-bold text-xl">T</div>
               <h1 className="text-white text-2xl font-bold italic tracking-tighter">Tutorian</h1>
            </div>
            <nav className="space-y-3">
              <SidebarItem icon={MdDashboard} label="ড্যাশবোর্ড" active />
              <SidebarItem icon={MdOutlineLibraryBooks} label="আমার কোর্স" />
              <SidebarItem icon={MdOutlineAssignment} label="আমার পরীক্ষা" />
              <SidebarItem icon={MdLogout} label="লগআউট" />
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;