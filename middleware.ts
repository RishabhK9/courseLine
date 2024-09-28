import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

// JWT Secret (stored in environment variable)
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

// Function to verify JWT token
function verifyJWT(token: string) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
}

// This middleware will be executed for each request
export function middleware(req: NextRequest) {
  const token = req.cookies.get('auth_token')?.value;

  // If there's no token or if token verification fails, redirect to login
  if (!token || !verifyJWT(token)) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // If the token is valid, continue the request
  return NextResponse.next();
}

// Specify paths for middleware to apply to (e.g., for protecting certain routes)
export const config = {
  matcher: ['/dashboard/:path*', '/roadmap/:path*'], // Apply middleware to specific routes
};
