import JsonDisplay from '@/components/json-display';
import {client} from '@app/client';

export default async function DynamicPage() {
  const meResponse = await client.get('auth/me', {
    throwHttpErrors: false,
    useAuth: true,
  });

  const me = meResponse.ok ? await meResponse.json() : null;

  return (
    <div className='bg-white min-h-screen'>
      <div className='relative isolate px-6 pt-14 lg:px-8'>
        <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
          <div className='text-center'>
            <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
              Dynamic Page
            </h1>
          </div>

          <div className='mt-10'>
            <JsonDisplay>{JSON.stringify(me, null, 2)}</JsonDisplay>
          </div>
        </div>
      </div>
    </div>
  );
}
