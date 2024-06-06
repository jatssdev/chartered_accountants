import React from 'react'
import { Link } from 'react-router-dom'


const sidebar = () => {
    return (
        <div className='w-full  overflow-auto' style={{ height: 'calc(100vh - 70px)' }}>
            <ul>
                <li><Link className='bg-gray-400 hover:bg-gray-600 hover:text-white block p-3 border-b' to={'/'}>Dashboard</Link></li>
                <li><Link className='bg-gray-400 hover:bg-gray-600 hover:text-white block p-3 border-b' to={'/admin'}>Sales</Link></li>
                <li><Link className='bg-gray-400 hover:bg-gray-600 hover:text-white block p-3 border-b' to={'/client'}>Purchase</Link></li>
                <li><Link className='bg-gray-400 hover:bg-gray-600 hover:text-white block p-3 border-b' to={'/employee'}>Expenditure</Link></li>
            </ul>
        </div>
    )
}

export default sidebar
