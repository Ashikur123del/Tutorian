import React, { useState } from 'react'; // useState যোগ করা হয়েছে
import { useParams, useNavigate } from 'react-router-dom';
import { examList } from './examList';
import CouresImg from '../../assets/images/Coures.png';

const ExamDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  // ট্যাব কন্ট্রোল করার জন্য স্টেট
  const [activeTab, setActiveTab] = useState('পরীক্ষাসমূহ');

  const exam = examList.find(e => e.slug === slug);
  if (!exam) return <p className="p-5 text-center text-red-500">Exam not found</p>;

  // ট্যাবের কন্টেন্ট রেন্ডার করার ফাংশন
  const renderTabContent = () => {
    switch (activeTab) {
      case 'পরীক্ষাসমূহ':
        return (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-5 border-b border-gray-50">
               <h4 className="font-bold text-slate-700 text-lg">আমার পরীক্ষাসমূহ</h4>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-[#1e293b] text-white">
                  <tr>
                    <th className="py-3 px-4 border-r border-slate-700 font-medium">অ্যাকশন</th>
                    <th className="py-3 px-4 border-r border-slate-700 font-medium">পরীক্ষার নাম</th>
                    <th className="py-3 px-4 border-r border-slate-700 font-medium text-center">প্রশ্ন</th>
                    <th className="py-3 px-4 border-r border-slate-700 font-medium text-center">সময়</th>
                    <th className="py-3 px-4 font-medium text-center">শুরু</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-slate-50 transition">
                    <td className="p-3 text-center">
                      <button className="bg-[#f0fdf4] text-[#16a34a] px-4 py-1.5 rounded-md border border-[#bbf7d0] text-xs font-bold hover:bg-[#dcfce7] transition flex items-center gap-1 mx-auto">
                        <span className="text-[10px]">▶</span> শুরু
                      </button>
                    </td>
                    <td className="p-3 font-semibold text-slate-600 min-w-[200px]">{exam.title}</td>
                    <td className="p-3 text-center font-medium">20</td>
                    <td className="p-3 text-center font-medium">২০ মিনিট</td>
                    <td className="p-3 text-center text-[11px] text-slate-400 leading-tight">
                      ২৩ নভে ২৫, ৩ টা ৩৫ মি
                    </td>
                  </tr>
                </tbody>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-slate-50 transition">
                    <td className="p-3 text-center">
                      <button className="bg-[#f0fdf4] text-[#16a34a] px-4 py-1.5 rounded-md border border-[#bbf7d0] text-xs font-bold hover:bg-[#dcfce7] transition flex items-center gap-1 mx-auto">
                        <span className="text-[10px]">▶</span> শুরু
                      </button>
                    </td>
                    <td className="p-3 font-semibold text-slate-600 min-w-[200px]">{exam.title}</td>
                    <td className="p-3 text-center font-medium">20</td>
                    <td className="p-3 text-center font-medium">২০ মিনিট</td>
                    <td className="p-3 text-center text-[11px] text-slate-400 leading-tight">
                      ২৩ নভে ২৫, ৩ টা ৩৫ মি
                    </td>
                  </tr>
                </tbody>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-slate-50 transition">
                    <td className="p-3 text-center">
                      <button className="bg-[#f0fdf4] text-[#16a34a] px-4 py-1.5 rounded-md border border-[#bbf7d0] text-xs font-bold hover:bg-[#dcfce7] transition flex items-center gap-1 mx-auto">
                        <span className="text-[10px]">▶</span> শুরু
                      </button>
                    </td>
                    <td className="p-3 font-semibold text-slate-600 min-w-[200px]">{exam.title}</td>
                    <td className="p-3 text-center font-medium">20</td>
                    <td className="p-3 text-center font-medium">২০ মিনিট</td>
                    <td className="p-3 text-center text-[11px] text-slate-400 leading-tight">
                      ২৩ নভে ২৫, ৩ টা ৩৫ মি
                    </td>
                  </tr>
                </tbody>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-slate-50 transition">
                    <td className="p-3 text-center">
                      <button className="bg-[#f0fdf4] text-[#16a34a] px-4 py-1.5 rounded-md border border-[#bbf7d0] text-xs font-bold hover:bg-[#dcfce7] transition flex items-center gap-1 mx-auto">
                        <span className="text-[10px]">▶</span> শুরু
                      </button>
                    </td>
                    <td className="p-3 font-semibold text-slate-600 min-w-[200px]">{exam.title}</td>
                    <td className="p-3 text-center font-medium">20</td>
                    <td className="p-3 text-center font-medium">২০ মিনিট</td>
                    <td className="p-3 text-center text-[11px] text-slate-400 leading-tight">
                      ২৩ নভে ২৫, ৩ টা ৩৫ মি
                    </td>
                  </tr>
                </tbody>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-slate-50 transition">
                    <td className="p-3 text-center">
                      <button className="bg-[#f0fdf4] text-[#16a34a] px-4 py-1.5 rounded-md border border-[#bbf7d0] text-xs font-bold hover:bg-[#dcfce7] transition flex items-center gap-1 mx-auto">
                        <span className="text-[10px]">▶</span> শুরু
                      </button>
                    </td>
                    <td className="p-3 font-semibold text-slate-600 min-w-[200px]">{exam.title}</td>
                    <td className="p-3 text-center font-medium">20</td>
                    <td className="p-3 text-center font-medium">২০ মিনিট</td>
                    <td className="p-3 text-center text-[11px] text-slate-400 leading-tight">
                      ২৩ নভে ২৫, ৩ টা ৩৫ মি
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'আজকের পরীক্ষা':
        return <div className="bg-white p-10 rounded-xl border text-center text-gray-500 font-medium shadow-sm">আজকের জন্য কোনো পরীক্ষা বরাদ্দ নেই।</div>;
      case 'রুটিন':
        return <div className="bg-white p-10 rounded-xl border text-center text-gray-500 font-medium shadow-sm">পরীক্ষার রুটিন এখানে দেখা যাবে।</div>;
      case 'নোটিশ বোর্ড':
        return <div className="bg-white p-10 rounded-xl border text-center text-gray-500 font-medium shadow-sm">নতুন কোনো নোটিশ নেই।</div>;
      case 'রেজাল্ট':
        return <div className="bg-white p-10 rounded-xl border text-center text-gray-500 font-medium shadow-sm">আপনার পরীক্ষার ফলাফল এখানে আপডেট করা হবে।</div>;
      default:
        return null;
    }
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen p-4 md:p-8 font-sans text-slate-800">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* বাম পাশের কন্টেন্ট */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* কোর্স কার্ড */}
          <div className="flex flex-col sm:flex-row p-4 max-w-md bg-white gap-x-6 rounded-2xl shadow-lg border border-transparent hover:border-blue-400 hover:shadow-2xl hover:-translate-y-1 duration-300 transition-all cursor-pointer">
            <div className="w-20 hover: h-14 rounded-lg flex items-center justify-center shadow-md overflow-hidden bg-gray-50">
                <img src={CouresImg} alt="Course" className='w-full h-full object-cover' />
            </div>
            <div>
               <h3 className="font-bold text-slate-700 text-[14px] leading-tight">All Job+All Admission (Teacher) English<br/>Foundation Course</h3>
               <span className="bg-gray-100 text-slate-500 text-[11px] px-3 py-0.5 rounded-full mt-1 inline-block border font-medium">Batch-198</span>
            </div>
          </div>

          {/* প্রোগ্রেস বার */}
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <h4 className="text-slate-700 font-bold text-md mb-4">Your Progress</h4>
            <div className="w-full bg-gray-100 rounded-full h-5 overflow-hidden border border-gray-200">
              <div 
                className="bg-[#1e293b] h-full flex items-center justify-center transition-all duration-700 ease-in-out" 
                style={{ width: '33.33%' }}
              >
                <span className="text-[10px] text-white font-bold tracking-wider">33.33%</span>
              </div>
            </div>
          </div>

          {/* ট্যাব বাটন গ্রুপ */}
          <div className="flex flex-wrap gap-2 md:gap-3">
            {['পরীক্ষাসমূহ', 'আজকের পরীক্ষা', 'রুটিন', 'নোটিশ বোর্ড', 'রেজাল্ট'].map((tab) => (
              <button 
                key={tab} 
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  activeTab === tab 
                  ? 'bg-[#1e293b] text-white shadow-md transform scale-105' 
                  : 'bg-[#e2e8f0] text-slate-600 hover:bg-slate-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* ডাইনামিক ট্যাব কন্টেন্ট */}
          <div className="transition-opacity duration-300">
            {renderTabContent()}
          </div>
        </div>

        {/* ডান পাশের লিডারবোর্ড */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 sticky top-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-xl text-slate-800">লিডারবোর্ড</h3>
              <button className="text-[11px] font-bold bg-slate-100 hover:bg-slate-200 px-4 py-1.5 rounded-lg text-slate-600 border transition">সব দেখুন</button>
            </div>

            <div className="space-y-3">
              <LeaderboardItem rank="120" name="Arifuzzaman Sobuj" exam="1" mark="0" avg="0%" color="bg-[#fff7ed] border-[#ffedd5]" isUser />
              <LeaderboardItem rank="1" name="Jaynal Abedin" exam="2" mark="4" avg="10.45%" color="bg-[#f0fdf4] border-[#dcfce7]" />
              <LeaderboardItem rank="2" name="সুমাইয়া স্মৃতি" exam="2" mark="3" avg="10.2%" color="bg-[#fef2f2] border-[#fee2e2]" />
              <LeaderboardItem rank="3" name="Md Monirul Islam" exam="2" mark="3" avg="10.14%" color="bg-[#eff6ff] border-[#dbeafe]" />
            </div>
          </div>
        </div>

      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-6 right-6 w-14 h-14 bg-[#0a192f] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-50">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </button>
    </div>
  );
};

const LeaderboardItem = ({ rank, name, exam, mark, avg, color, isUser }) => (
  <div className={`flex items-center justify-between p-3 rounded-xl border-2 transition-all duration-200 hover:shadow-md cursor-default ${color}`}>
    <div className="flex items-center gap-3">
      <span className={`font-bold text-sm w-6 ${isUser ? 'text-slate-600' : 'text-slate-500'}`}>{rank}</span>
      <div className="w-10 h-10 bg-slate-200 rounded-full border-2 border-white overflow-hidden shadow-sm flex items-center justify-center shrink-0">
          <svg className="w-6 h-6 text-slate-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
      </div>
      <div>
        <p className="text-[12px] font-bold text-slate-700 truncate w-24 md:w-32">{name}</p>
      </div>
    </div>
    <div className="flex gap-4 text-[10px] text-center shrink-0">
      <div><p className="font-extrabold text-slate-800">{exam}</p><p className="text-slate-500">পরীক্ষা</p></div>
      <div><p className="font-extrabold text-slate-800">{mark}</p><p className="text-slate-500">মার্ক</p></div>
      <div><p className="font-extrabold text-[#16a34a]">{avg}</p><p className="text-slate-500 font-medium text-[9px]">গড়%</p></div>
    </div>
  </div>
);

export default ExamDetails;