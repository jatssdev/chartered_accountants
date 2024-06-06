import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './components/sideBar/sidebar'

function App() {
  return (
    <>
      <div className="min-h-screen flex">
        <section className="flex flex-grow">
          <div className="grid grid-cols-12 w-full">
            <div className="col-span-2 bg-gray-800 text-white p-4">
              <Sidebar />
            </div>
            <div className="col-span-10 bg-white p-6">
              <Outlet />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
