import type {ReactNode} from 'react';

export default function AuthLayout({children}: {children: ReactNode}) {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4'>
      <div className='max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden'>
        <div className='p-8'>{children}</div>
      </div>
    </div>
  );
}
