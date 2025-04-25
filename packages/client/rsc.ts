import {baseClient} from './shared';
import {cookies} from 'next/headers';

export const client = baseClient.extend({
  prefixUrl: process.env.NEXT_PUBLIC_API_URL,
  hooks: {
    beforeRequest: [
      () => {
        console.log('rsc: beforeRequest');
      },
      async (request) => {
        const accessToken = (await cookies()).get('session')?.value;
        if (accessToken) {
          request.headers.set('Authorization', `Bearer ${accessToken}`);
        }
      },
    ],
    // Using the `afterResponse` hook to handle refresh token logic
  },
});
