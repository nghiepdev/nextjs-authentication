import Link from 'next/link';

import LoginForm from './login-form';

export default function Login() {
  return (
    <div className='space-y-6'>
      <div className='text-center'>
        <h2 className='text-xl font-bold text-gray-900'>Welcome back</h2>
        <p className='text-gray-500 mt-1'>Sign in to your account</p>
      </div>

      <LoginForm />

      <div className='text-center text-sm'>
        <p className='text-gray-600'>
          Don&apos;t have an account?{' '}
          <Link href='/register' className='text-blue-600 hover:underline'>
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}
