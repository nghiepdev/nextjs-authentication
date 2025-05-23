import HeroSection from './hero-section';

export default function Home() {
  return (
    <div className='bg-white min-h-screen'>
      {/* Hero Section */}
      <div className='relative isolate px-6 pt-14 lg:px-8'>
        <HeroSection />
      </div>

      {/* Feature Section */}
      <div className='bg-gray-50 py-24 sm:py-32'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:text-center'>
            <h2 className='text-base font-semibold leading-7 text-blue-600'>
              Built for developers
            </h2>
            <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
              Everything you need for authentication
            </p>
            <p className='mt-6 text-lg leading-8 text-gray-600'>
              Our authentication system provides all the features you need to
              secure your Next.js application, with a simple API and
              comprehensive documentation.
            </p>
          </div>
          <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-5xl'>
            <div className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3'>
              {[
                {
                  title: 'Secure by default',
                  description:
                    'Built with security best practices including CSRF protection, secure cookies, and rate limiting.',
                },
                {
                  title: 'Flexible authentication options',
                  description:
                    'Support for email/password, social login, passwordless, and multi-factor authentication.',
                },
                {
                  title: 'Easy integration',
                  description:
                    'Seamless integration with your Next.js application and existing database.',
                },
              ].map((feature, index) => (
                <div key={index} className='relative pl-16'>
                  <dt className='text-base font-semibold leading-7 text-gray-900'>
                    <div className='absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600'>
                      <svg
                        className='h-6 w-6 text-white'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                    </div>
                    {feature.title}
                  </dt>
                  <dd className='mt-2 text-base leading-7 text-gray-600'>
                    {feature.description}
                  </dd>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
