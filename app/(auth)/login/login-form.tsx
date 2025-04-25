'use client';

import Link from 'next/link';

export default function LoginForm() {
  return (
    <form className='space-y-4 text-black'>
      <div>
        <label
          htmlFor='email'
          className='block text-sm font-medium text-gray-700 mb-1'
        >
          Email
        </label>
        <input
          id='email'
          type='email'
          className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent'
          placeholder='you@example.com'
        />
      </div>

      <div>
        <div className='flex justify-between mb-1'>
          <label
            htmlFor='password'
            className='block text-sm font-medium text-gray-700'
          >
            Password
          </label>
          <Link
            href='/forgot-password'
            className='text-sm text-blue-600 hover:underline'
          >
            Forgot password?
          </Link>
        </div>
        <input
          id='password'
          type='password'
          className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent'
          placeholder='••••••••'
        />
      </div>

      <div className='flex items-center'>
        <input
          id='remember-me'
          type='checkbox'
          className='h-4 w-4 text-blue-600 border-gray-300 rounded'
        />
        <label
          htmlFor='remember-me'
          className='ml-2 block text-sm text-gray-700'
        >
          Remember me
        </label>
      </div>

      <div>
        <button
          type='submit'
          className='w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-colors'
        >
          Sign in
        </button>
      </div>
    </form>
  );
}
