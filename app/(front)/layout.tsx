import Link from 'next/link';
import {ReactNode} from 'react';

import Nav from './nav';

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
            <Nav />
          </div>
        </div>
      </header>

      <main className='flex-grow'>{children}</main>
    </div>
  );
}
