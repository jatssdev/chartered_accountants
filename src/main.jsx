import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import EmployeeLayout from './components/employee/EmployeeLayout.jsx'
import ClientLayout from './components/client/ClientLayout.jsx'
import AdminLayout from './components/admin/AdminLayout.jsx'

let router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'admin',
        element: <AdminLayout />,
        children: [

        ]
      },
      {
        path: 'client',
        element: <ClientLayout />,
        children: [

        ]
      },
      {
        path: 'employee',
        element: <EmployeeLayout />,
        children: [

        ]
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
