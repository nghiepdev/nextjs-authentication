'use client';

import useSWR from 'swr';
import {client} from '@app/client';

export default function Quote() {
  const {data, error, isLoading} = useSWR('quotes', () => {
    return client.get('quotes/random').json<{quote: string; author: string}>();
  });

  if (error) {
    return (
      <div className='max-w-2xl mx-auto p-6 mt-10 bg-red-50 rounded-lg'>
        <p className='text-red-500 text-center'>Failed to load quote</p>
      </div>
    );
  }

  return (
    <div className='max-w-2xl mx-auto p-6 mt-10'>
      {isLoading ? (
        <div className='animate-pulse bg-white rounded-lg shadow p-8'>
          <div className='h-4 bg-gray-200 rounded w-3/4 mb-6'></div>
          <div className='h-4 bg-gray-200 rounded w-full mb-6'></div>
          <div className='h-3 bg-gray-200 rounded w-1/4 ml-auto'></div>
        </div>
      ) : (
        <blockquote className='bg-white rounded-lg shadow p-8 relative'>
          <div className='text-5xl text-gray-200 absolute top-4 left-4'>
            &quot;
          </div>
          <p className='text-xl text-gray-800 italic mb-4 relative z-10 pt-6'>
            {data?.quote}
          </p>
          <footer className='text-right'>
            <cite className='text-gray-600 font-semibold not-italic'>
              — {data?.author}
            </cite>
          </footer>
        </blockquote>
      )}
    </div>
  );
}
