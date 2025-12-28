import React from 'react';
import { Link, useParams } from 'react-router-dom';
import CouresImg from '../../assets/images/Coures.png';
import CourseDashboard from '../../Components/Dashboard/CourseDashboard';


const MyCoures = () => {
  const { courseSlug } = useParams();

  if (courseSlug) {
    return (
      <div className=" p-3 md:p-10 container mx-auto">
      <div className="flex gap-x-5 bg-white shadow-sm p-2 max-w-sm rounded-lg cursor-pointer">
        <img src={CouresImg} alt="" className='w-20 h-auto rounded-sm' />
        <p className='text-sm font-semibold'>All Job+All Admission (Teacher)<br/>English Foundation Course</p>
      </div>
       <CourseDashboard />
      </div>
    );
  }

  // যদি ইউজার মেইন লিস্টে থাকে
  const courseData = {
    id: "batch-198",
    title: "All Job+All Admission (Teacher) English Foundation Course",
    batch: "𝐁𝐚𝐭𝐜𝐡-198"
  };

  return (
    <div className="container mx-auto px-4">
      <div className="py-10 max-w-3xl">
        <h2 className='text-4xl font-semibold text-gray-800 mb-8'>আমার কোর্সসমূহ</h2>
        
        <Link to={`/dashboard/mycoures/${courseData.id}`}>
          <div className="flex flex-col sm:flex-row p-4 bg-white gap-x-6 rounded-2xl shadow-lg border border-transparent hover:border-blue-400 hover:shadow-2xl hover:-translate-y-1 duration-300 transition-all cursor-pointer">
            <div className="flex-shrink-0">
              <img 
                src={CouresImg} 
                alt="course"  
                className='rounded-xl w-full sm:w-48 h-auto object-cover'
              />
            </div>

            <div className="flex flex-col justify-center mt-4 sm:mt-0">
              <h3 className='text-xl md:text-2xl font-bold text-gray-800 leading-tight'>
                {courseData.title}
              </h3>
              <div className="mt-4">
                <span className='px-4 py-1.5 text-sm font-medium text-blue-600 rounded-full bg-blue-50 border border-blue-100'>
                  {courseData.batch}
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MyCoures;