import {baseClient} from './shared';

export const client = baseClient.extend({
  prefixUrl: process.env.NEXT_PUBLIC_API_URL,
  hooks: {
    beforeRequest: [
      () => {
        console.warn(
          '⚠️ If you see this, it means unexpected behavior, please check your code.'
        );
      },
    ],
  },
});
