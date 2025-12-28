import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../Components/Dashboard/Sidebar'
import Header from '../../Components/Header'


const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className='flex h-screen bg-[#F8FAFC] overflow-hidden'>
      {/* মোবাইল ওভারলে */}
      {isSidebarOpen && (
        <div
          className='fixed inset-0 bg-slate-900/50 z-40 lg:hidden backdrop-blur-sm'
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar - সবসময় থাকবে */}
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <div className='flex-1 flex flex-col h-full overflow-y-auto'>
        {/* Header - সবসময় থাকবে */}
        <Header setIsSidebarOpen={setIsSidebarOpen} />

        {/* এখানে Dashboard বা MyCoures পেজগুলো লোড হবে */}
        <main className='flex-1'>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
