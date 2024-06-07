import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import EmployeeLayout from './components/employee/EmployeeLayout.jsx';
import ClientLayout from './components/client/ClientLayout.jsx';
import AdminLayout from './components/admin/AdminLayout.jsx';
import ClientDashboard from './components/ClientDashboard.jsx';
import EmployeeDashboard from './components/EmployeeDashboard.jsx';
import Bills from './components/client/Bills.jsx';
import LoginClient from './Login/client/LoginClient.jsx';
import LoginAdmin from './Login/admin/LoginAdmin.jsx';

const router = createBrowserRouter([
  {
    path: '/login/:type',
    element: <LoginClient />,
  },
  {
    path: '/admin/login',
    element: <LoginAdmin />,
  },  
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'admin',
        element: <AdminLayout />,
        children: [

        ],
      },
      {
        path: 'client',
        element: <ClientLayout />,
        children: [
          {
            path: '',
            element: <ClientDashboard />,
          },
          {
            path: 'bills',
            element: <Bills />,
          },
        ],
      },
      {
        path: 'employee',
        element: <EmployeeLayout />,
        children: [
          {
            path: '',
            element: <EmployeeDashboard />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
