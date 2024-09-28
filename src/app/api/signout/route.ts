import { NextResponse } from 'next/server';
import { serialize } from 'cookie';

export async function POST() {
  // Clear the auth_token cookie by setting it with an expired date
  const cookie = serialize('auth_token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    expires: new Date(0), // Set the expiration date in the past to delete the cookie
    path: '/'
  });

  // Return a response with the cookie cleared
  return new NextResponse(JSON.stringify({ message: 'Logout successful' }), {
    status: 200,
    headers: {
      'Set-Cookie': cookie,
      'Content-Type': 'application/json'
    }
  });
}
