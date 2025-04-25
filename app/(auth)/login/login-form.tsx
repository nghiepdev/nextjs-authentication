'use client';
import {useActionState} from 'react';

import Link from 'next/link';

import {login} from './actions';

export default function LoginForm() {
  const [state, formAction, pending] = useActionState(login, null);

  return (
    <form action={formAction} className='space-y-4 text-black'>
      {state?.error && (
        <div className='p-3 bg-red-100 border border-red-400 text-red-700 rounded-md mb-4'>
          {state.error}
        </div>
      )}

      <div>
        <label
          htmlFor='username'
          className='block text-sm font-medium text-gray-700 mb-1'
        >
          Username
        </label>
        <input
          id='username'
          name='username'
          defaultValue='emilys'
          className={`w-full px-3 py-2 border ${
            state?.errors?.username ? 'border-red-500' : 'border-gray-300'
          } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent`}
          placeholder='emilys'
        />
        {state?.errors?.username && (
          <p className='text-red-600 text-xs mt-1'>{state.errors.username}</p>
        )}
      </div>

      <div>
        <div className='flex justify-between mb-1'>
          <label
            htmlFor='password'
            className='block text-sm font-medium text-gray-700'
          >
            Password
          </label>
          <Link href='/' className='text-sm text-blue-600 hover:underline'>
            Forgot password?
          </Link>
        </div>
        <input
          id='password'
          type='password'
          name='password'
          defaultValue='emilyspass'
          className={`w-full px-3 py-2 border ${
            state?.errors?.password ? 'border-red-500' : 'border-gray-300'
          } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent`}
          placeholder='••••••••'
        />
        {state?.errors?.password && (
          <p className='text-red-600 text-xs mt-1'>{state.errors.password}</p>
        )}
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
          disabled={pending}
          type='submit'
          className='w-full disabled:opacity-30 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-colors'
        >
          {pending ? 'Signing in...' : 'Sign in'}
        </button>
      </div>
    </form>
  );
}
