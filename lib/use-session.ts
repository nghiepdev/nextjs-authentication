import useSWR from 'swr';

import {client} from '@app/client';

const fetcher = () => {
  return client
    .get('auth/me', {
      useAuth: true,
    })
    .json();
};

export function useSession(options?: {suspense?: boolean}) {
  return useSWR('session', fetcher, {
    suspense: options?.suspense,
    fallbackData: null,
  });
}
