'use client';

import Link from 'next/link';
import {useSession} from '@/lib/use-session';

export default function ProfileAvatar() {
  const {data: me, isLoading, error} = useSession();

  return (
    <nav
      className={`space-x-8 transition duration-100 ${
        isLoading && !error ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <Link href='/' className='text-gray-700 hover:text-blue-600 font-medium'>
        Home
      </Link>
      <Link
        href='/dashboard'
        className='text-gray-700 hover:text-blue-600 font-medium'
      >
        Dashboard
      </Link>
      {me ? (
        <a
          href='/logout'
          className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700'
        >
          Logout
        </a>
      ) : (
        <a
          target='_repo'
          rel='noreferrer'
          href='https://github.com/nghiepdev/nextjs-authentication'
          className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700'
        >
          Github
        </a>
      )}
    </nav>
  );
}
