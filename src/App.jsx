import React, { useState } from 'react'
import Sidebar from './components/sideBar/sidebar'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import Navbar from './components/utils/Navbar'
import { createContext } from 'react';

export let mainContext = createContext()

const App = () => {

  let [isOpen, setIsOpen] = useState(null);

  let value = { isOpen, setIsOpen };



  return (
    <>
      <mainContext.Provider value={value}>
        <Navbar />
        <div className="grid grid-cols-12">
          <section className='col-span-3'>
            <Sidebar />
          </section>
          <section className='col-span-9 pt-14'>
            <Outlet />
          </section>
        </div>
      </mainContext.Provider>
    </>
  )
}

export default App
