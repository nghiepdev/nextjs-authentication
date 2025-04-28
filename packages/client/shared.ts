import ky from 'ky';

export const baseClient = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_API_URL,
});
