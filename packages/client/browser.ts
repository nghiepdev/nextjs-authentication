import {baseClient} from './shared';

export const client = baseClient.extend({
  prefixUrl: '/backend',
  hooks: {
    beforeRequest: [
      () => {
        console.log('browser: beforeRequest');
      },
    ],
    // Using the `afterResponse` hook to handle refresh token logic
  },
});
