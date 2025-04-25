import useSWR from 'swr';

import {client} from '@app/client';

const fetcher = () => {
  console.log('Fetching session data...');
  return client.get('auth/me').json();
};

export function useSession() {
  return useSWR('session', fetcher);
}
