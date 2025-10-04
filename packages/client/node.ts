import {baseClient} from './shared';

export const client = baseClient.extend({
  hooks: {
    beforeRequest: [
      () => {
        throw new Error(
          `⚠️ You're trying to make a request from a client component on the server side, please check your code.`
        );
      },
    ],
  },
});
