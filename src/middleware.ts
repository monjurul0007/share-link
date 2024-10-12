export { default } from 'next-auth/middleware';

export const config = { matcher: ['/editor/:path*', '/api/user/:path*'] };
