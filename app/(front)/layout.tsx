import Link from 'next/link';
import {ReactNode} from 'react';

export default function FrontLayout({children}: {children: ReactNode}) {
  return (
    <div className='min-h-screen flex flex-col'>
      {/* Navigation Bar */}
      <header className='bg-white shadow-sm'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between h-16 items-center'>
            <div className='flex-shrink-0'>
              <Link href='/' className='text-2xl font-bold text-blue-600'>
                MyApp
              </Link>
            </div>
            <nav className='space-x-8'>
              <Link
                href='/'
                className='text-gray-700 hover:text-blue-600 font-medium'
              >
                Home
              </Link>
              <Link
                href='/dashboard'
                className='text-gray-700 hover:text-blue-600 font-medium'
              >
                Dashboard
              </Link>
              <a
                target='_repo'
                href='https://github.com/nghiepdev/nextjs-authentication'
                className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700'
              >
                Github
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main className='flex-grow'>{children}</main>
    </div>
  );
}
