'use client';

export default function JsonDisplay({
  children,
  reverse,
}: React.PropsWithChildren<{reverse?: boolean}>) {
  return (
    <div className='flex flex-col rounded-md bg-gray-100'>
      <div className='rounded-t-md text-black bg-gray-200 p-4 font-bold'>
        Current Session
      </div>
      <pre
        className={`whitespace-pre-wrap break-all px-4 py-6 ${
          reverse ? 'bg-white' : ''
        }`}
      >
        <code className='text-sm text-gray-800'>{children}</code>
      </pre>
    </div>
  );
}
