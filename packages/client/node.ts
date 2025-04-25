import {baseClient} from './shared';

export const client = baseClient.extend({
  prefixUrl: process.env.NEXT_PUBLIC_API_URL,
  hooks: {
    beforeRequest: [
      () => {
        console.log('node: beforeRequest');
      },
    ],
  },
});
