import {baseClient} from './shared';
import {cookies} from 'next/headers';

export const client = baseClient.extend({
  hooks: {
    beforeRequest: [
      () => {
        console.info('rsc: beforeRequest');
      },
      async (request, options) => {
        if (options.useAuth) {
          const accessToken = (await cookies()).get('session')?.value;
          if (accessToken) {
            request.headers.set('Authorization', `Bearer ${accessToken}`);
          }
        }
      },
    ],
    // Using the `afterResponse` hook to handle refresh token logic
  },
});
