// Layout.js (updated)
import React from 'react'
import { Outlet } from 'react-router-dom'
import sidebar from './sideBar/sidebar'

const Layout = () => {
  return (
    <div>
      <section>
        <div className="grid grid-cols-12">
          <div className="col-span-2">
            <sidebar />
          </div>
          <div className="col-span-10 bg-red-400">
            <Outlet />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Layout
