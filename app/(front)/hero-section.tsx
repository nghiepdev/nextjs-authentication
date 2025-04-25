'use client';

import Link from 'next/link';

import JsonDisplay from '@/components/json-display';
import {useSession} from '@/lib/use-session';

export default function HeroSection() {
  const {data: me} = useSession({suspense: true});

  return (
    <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
          Authentication for Your Next.js Applications
        </h1>
        <p className='mt-6 text-lg leading-8 text-gray-600'>
          A modern, secure, and easy-to-implement authentication solution
          designed for Next.js applications. Get started in minutes with our
          comprehensive authentication system.
        </p>
        <div className='mt-10 flex items-center justify-center gap-x-6'>
          {me ? (
            <a
              href='/logout'
              className='rounded-md bg-orange-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-600'
            >
              Logout
            </a>
          ) : (
            <Link
              href='/login'
              className='rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600'
            >
              Login
            </Link>
          )}

          <a
            target='_repo'
            rel='noreferrer'
            href='https://github.com/nghiepdev/nextjs-authentication'
            className='text-sm font-semibold leading-6 text-gray-900'
          >
            Learn more <span aria-hidden='true'>→</span>
          </a>
        </div>
      </div>
      <div className='mt-10'>
        <JsonDisplay>{JSON.stringify(me, null, 2)}</JsonDisplay>
      </div>
    </div>
  );
}
