# Example of Authentication in Next.js

This is an example project demonstrating how to implement authentication in a Next.js application.  
You can view the live demo at: https://next-auth-example-psi.vercel.app

## Overview

- Uses pnpm workspace to separate environments
- Forwarding authentication from the client to backend API routes
- Leverages React Server Components (RSC) to automatically attach Authorization headers using `await cookies()`

## Usage

### Client Components

Import and use the `useSession()` hook in client components:

```tsx
'use client';

import {useSession} from '@/lib/use-session';

export default function ClientComponent() {
  const {data, loading} = useSession();

  if (loading) return <div>Loading...</div>;

  return <div>{data ? `Logged in as ${data.name}` : 'Not logged in'}</div>;
}
```

### Server Components (Dynamic)

For dynamic server components that require authentication:

```tsx
import {client} from '@app/client';

export default async function DynamicPage() {
  // Use useAuth: true to automatically attach authentication token
  const meResponse = await client.get('auth/me', {
    throwHttpErrors: false,
    useAuth: true, // Enable automatic authentication
  });

  const me = meResponse.ok ? await meResponse.json() : null;

  return <div>{me ? `Logged in as ${me.name}` : 'Not logged in'}</div>;
}
```

### Server Components (Static)

For static server components that don't require authentication:

```tsx
import {client} from '@app/client';

export default async function PublicStaticPage() {
  // No useAuth needed as this is a public API endpoint
  const quoteResponse = await client.get('quotes/random', {
    throwHttpErrors: false,
    // No useAuth: true here since authentication is not required
  });

  const quote = quoteResponse.ok ? await quoteResponse.json() : null;

  return (
    <div>
      {quote ? `"${quote.text}" - ${quote.author}` : 'Failed to load quote'}
    </div>
  );
}
```
