'use client';

import {useState} from 'react';
import Link from 'next/link';

import JsonDisplay from '@/components/json-display';
import {useSession} from '@/lib/use-session';

// Mock data for the dashboard
const stats = [
  {name: 'Total Users', value: '1,249', change: '+12%', trend: 'up'},
  {name: 'Active Sessions', value: '342', change: '+5%', trend: 'up'},
  {name: 'Conversion Rate', value: '3.6%', change: '-2%', trend: 'down'},
  {name: 'Average Time', value: '12m 30s', change: '+8%', trend: 'up'},
];

const navigationItems = [
  {name: 'Dashboard', href: '/dashboard', icon: '📊', current: true},
  {name: 'Users', href: '/dashboard/users', icon: '👥', current: false},
  {name: 'Reports', href: '/dashboard/reports', icon: '📝', current: false},
  {name: 'Settings', href: '/dashboard/settings', icon: '⚙️', current: false},
];

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const {data: me, isLoading} = useSession();

  return (
    <div className='flex h-screen bg-gray-100'>
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className='fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden'
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform 
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:relative md:translate-x-0 transition-transform duration-300 ease-in-out
      `}
      >
        <div className='flex items-center justify-between p-4 border-b'>
          <Link href='/' className='text-xl font-bold text-gray-800'>
            MyApp
          </Link>
          <button
            className='md:hidden rounded-md p-2 text-gray-500 hover:text-gray-600'
            onClick={() => setSidebarOpen(false)}
          >
            ✕
          </button>
        </div>
        <nav className='mt-4'>
          <ul>
            {navigationItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={`flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 ${
                    item.current ? 'bg-gray-100 font-medium' : ''
                  }`}
                >
                  <span className='mr-3'>{item.icon}</span>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className='flex-1 flex flex-col overflow-hidden'>
        {/* Header */}
        <header className='bg-white shadow-sm'>
          <div className='flex items-center justify-between px-4 py-3'>
            <button
              className='md:hidden rounded-md p-2 text-gray-500 hover:text-gray-600'
              onClick={() => setSidebarOpen(true)}
            >
              ☰
            </button>
            <h1 className='text-lg font-semibold text-gray-800'>Dashboard</h1>
            <div className='flex items-center'>
              <span className='inline-flex items-center justify-center h-8 w-8 rounded-full bg-gray-200 text-gray-600'>
                UN
              </span>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className='flex-1 overflow-y-auto p-4 bg-gray-100'>
          <div className='max-w-7xl mx-auto'>
            {/* Welcome Section */}
            <div className='mb-6'>
              <h2 className='text-2xl font-bold text-gray-800'>
                Chào mừng trở lại!
              </h2>
              <p className='text-gray-600'>
                Dưới đây là tổng quan về hoạt động của bạn.
              </p>
            </div>

            {/* Stats Grid */}
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8'>
              {stats.map((stat) => (
                <div key={stat.name} className='bg-white p-6 rounded-lg shadow'>
                  <div className='flex items-center justify-between'>
                    <h3 className='text-sm font-medium text-gray-500'>
                      {stat.name}
                    </h3>
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                        stat.trend === 'up'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {stat.change}
                    </span>
                  </div>
                  <p className='mt-2 text-3xl font-semibold text-gray-900'>
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Recent Activity */}
            <div className='bg-white shadow rounded-lg'>
              <div className='px-6 py-5 border-b border-gray-200'>
                <h3 className='text-lg font-medium text-gray-900'>
                  Hoạt động gần đây
                </h3>
              </div>
              <div className='p-6'>
                <ul className='divide-y divide-gray-200'>
                  {[1, 2, 3, 4].map((item) => (
                    <li key={item} className='py-4'>
                      <div className='flex items-center space-x-4'>
                        <div className='flex-shrink-0'>
                          <div className='h-8 w-8 rounded-full bg-gray-200'></div>
                        </div>
                        <div className='flex-1 min-w-0'>
                          <p className='text-sm font-medium text-gray-900 truncate'>
                            Người dùng đã thực hiện hành động #{item}
                          </p>
                          <p className='text-sm text-gray-500 truncate'>
                            Cách đây {item * 5} phút
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className='mt-7'>
              <JsonDisplay reverse>
                {isLoading ? 'Loading...' : JSON.stringify(me, null, 2)}
              </JsonDisplay>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
