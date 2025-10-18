import {baseClient} from './shared';

export const client = baseClient.extend({
  hooks: {
    beforeRequest: [
      () => {
        console.info('browser: beforeRequest');
      },
      (request, options) => {
        if (options.useAuth) {
          return new Request(
            request.url.replace(options.prefixUrl, '/backend/'),
            request
          );
        }
      },
    ],
    // Using the `afterResponse` hook to handle refresh token logic
  },
});
