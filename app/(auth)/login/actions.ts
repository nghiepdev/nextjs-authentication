'use server';

import {cookies} from 'next/headers';
import {redirect, unstable_rethrow} from 'next/navigation';

interface LoginFormState {
  error?: string;
  errors?: {
    username?: string;
    password?: string;
  };
}

interface LoginResponse {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  accessToken: string;
  refreshToken: string;
}

export async function login(state: LoginFormState | null, formData: FormData) {
  const username = formData.get('username');
  const password = formData.get('password');

  if (!username || !password) {
    return {
      errors: {
        username: !username ? 'Invalid username' : undefined,
        password: !password ? 'Invalid password' : undefined,
      },
    };
  }

  try {
    const response = await fetch(
      new URL('/auth/login', process.env.NEXT_PUBLIC_API_URL),
      {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          username,
          password,
          expiresInMins: 30,
        }),
      }
    );
    if (response.ok) {
      const {accessToken}: LoginResponse = await response.json();
      await createSession(accessToken);
      redirect('/dashboard');
    }

    if (response.status === 401) {
      throw new Error(
        'Invalid username or password. Please check the mock API credentials at https://dummyjson.com/docs/auth#auth-login'
      );
    }
    throw new Error(response.statusText);
  } catch (error) {
    unstable_rethrow(error); // Make sure redirects are not blocked
    return {
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

async function createSession(accessToken: string) {
  const cookieStore = await cookies();
  cookieStore.set('session', accessToken, {
    httpOnly: false,
    secure: process.env.NODE_ENV === 'production',
    expires: new Date(Date.now() + 30 * 60 * 1000), // 30 minutes
    sameSite: 'lax',
    path: '/',
  });
}
