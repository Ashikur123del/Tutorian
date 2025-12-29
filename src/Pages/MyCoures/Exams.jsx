import React from 'react';
import { useNavigate } from 'react-router-dom';
import { examList } from './examList';

const Exams = () => {
  const navigate = useNavigate();

  return (
    <div className="p-3 md:p-10 container mx-auto">
      <h2 className='text-4xl mb-5 font-semibold'>আমার পরীক্ষাসমূহ</h2>
      <div className="flex flex-col sm:flex-row p-4 max-w-md bg-white gap-x-6 rounded-2xl shadow-lg border border-transparent hover:border-blue-400 hover:shadow-2xl hover:-translate-y-1 duration-300 transition-all cursor-pointer">
        {examList.map((exam) => (
          <div 
            key={exam.id} 
            onClick={() => navigate(`/dashboard/examsdetails/${exam.slug}`)}
            className="flex gap-x-3 "
          >
            <img src={exam.image} alt={exam.title} className='w-30 h-auto rounded-sm' />
            <p className='text-xl font-semibold'>{exam.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Exams;
