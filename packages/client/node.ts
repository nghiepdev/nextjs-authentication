import {baseClient} from './shared';

export const client = baseClient.extend({
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
