import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdDashboard, MdPlayCircleOutline, MdOutlineAssignment, MdPeopleOutline, MdOutlineDevices, MdLogout, MdClose, MdPersonOutline } from 'react-icons/md';
import TutorianImg from '../../assets/images/tutorian.png';

const SidebarItem = ({ icon: Icon, label, to, active }) => (
  <Link to={to} className='block'> 
    <div className={`flex items-center space-x-3 p-3 px-5 rounded-lg cursor-pointer transition-all duration-300 group ${
      active ? 'bg-[#2a2d45] text-white shadow-md' : 'text-gray-400 hover:bg-white/5 hover:text-white'
    }`}>
      <Icon size={20} className={`${active ? 'text-white' : 'group-hover:scale-110 transition-transform'}`} />
      <span className='text-[14px] font-medium tracking-wide'>{label}</span>
    </div>
  </Link>
);

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const location = useLocation();

  return (
    <aside className={`fixed lg:static inset-y-0 left-0 w-[270px] bg-[#0F111D] text-white flex flex-col p-6 z-50 transition-transform duration-500 ease-in-out transform ${
      isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
    }`}>
      <div className='mb-10 flex justify-between items-center'>
        <img src={TutorianImg} alt='Logo' className='h-9 object-contain' />
        <button className='lg:hidden text-white p-1 rounded-full' onClick={() => setIsSidebarOpen(false)}>
          <MdClose size={26} />
        </button>
      </div>

      <div className='mb-10 flex flex-col items-center group'>
        <div className='relative'>
          <div className='w-22 h-22 rounded-full border-2 border-white/10 flex items-center justify-center mb-4 bg-white/5 p-1'>
            <div className='w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden'>
              <MdPersonOutline size={55} className='text-gray-400' />
            </div>
          </div>
          <div className='absolute bottom-5 right-1 w-4 h-4 bg-green-500 border-[3px] border-[#0F111D] rounded-full'></div>
        </div>
        <h2 className='text-xl font-bold tracking-tight text-center'>Arifuzzaman Sobuj</h2>
        <p className='text-[11px] font-bold text-gray-500 mt-1 uppercase tracking-widest'>Student ID: 2500080</p>
      </div>

      <nav className='flex-1 space-y-1.5 overflow-y-auto no-scrollbar'>
        <SidebarItem icon={MdDashboard} label='ড্যাশবোর্ড' to='/dashboard' active={location.pathname === '/dashboard'} />
        <SidebarItem icon={MdPlayCircleOutline} label='আমার কোর্স' to='/dashboard/mycoures' active={location.pathname === '/dashboard/mycoures'} />
        <SidebarItem icon={MdOutlineAssignment} label='আমার পরীক্ষা' to='/dashboard/exams' active={location.pathname === '/dashboard/exams'} />
        <SidebarItem icon={MdPeopleOutline} label='সাপোর্ট' to='/dashboard/support' active={location.pathname === '/dashboard/support'} />
        <SidebarItem icon={MdOutlineDevices} label='লগ-ইন ডিভাইস' to='/dashboard/devices' active={location.pathname === '/dashboard/devices'} />
        <div className='mt-5 pt-5 border-t border-white/5'>
          <SidebarItem icon={MdLogout} label='লগআউট' to='/logout' active={false} />
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;