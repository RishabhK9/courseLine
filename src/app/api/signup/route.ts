import clientPromise from '@/lib/mongodb';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';

// Secret key for JWT (use environment variable for production)
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

// Function to create JWT token
function createJWT(email: string) {
    // Create a token payload, you can add more fields like user id, role, etc.
    const payload = { email };

    // Generate the token (expires in 1 day)
    return jwt.sign(payload, JWT_SECRET, { expiresIn: '1d' });
}

// Simple email validation function
function validateEmail(email: string) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

export async function POST(req: Request) {
    const client = await clientPromise;
    const db = client.db('Honeycomb');

    try {
        const body = await req.json();
        const { name, email, password, year, major } = body;

        // Validate inputs
        if (!name || !email || !password) {
            return new Response(JSON.stringify({ message: 'Name, email, and password are required' }), { status: 400 });
        }

        if (!validateEmail(email)) {
            return new Response(JSON.stringify({ message: 'Invalid email format' }), { status: 400 });
        }

        // Check for existing user (case-insensitive)
        const existingUser = await db.collection('users').findOne({
            email: { $regex: new RegExp(`^${email}$`, 'i') }
        });

        if (existingUser) {
            return new Response(JSON.stringify({ message: 'User already exists' }), { status: 409 });
        }

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10); // Salt rounds set to 10

        // Insert the new user with hashed password
        const result = await db.collection('users').insertOne({
            name,
            email,
            password: hashedPassword, // Store hashed password
            year,
            major,
            createdAt: new Date() // Optional: add a timestamp
        });

        // Generate JWT token
        const token = createJWT(email);

        // Set the JWT as a cookie
        const cookie = serialize('auth_token', token, {
            httpOnly: true, // Make cookie inaccessible to JavaScript
            secure: process.env.NODE_ENV === 'production', // Use secure flag in production
            maxAge: 60 * 60 * 24, // 1 day expiration
            path: '/' // Cookie available throughout the app
        });

        // Return a success response with the JWT token set as a cookie
        return new Response(JSON.stringify({ message: 'User created successfully', redirectTo: '/dashboard' }), {
            status: 201,
            headers: {
                'Set-Cookie': cookie,
                'Content-Type': 'application/json'
            }
        });

    } catch (error) {
        console.error('Error during user signup:', error);
        return new Response(JSON.stringify({ message: 'Internal server error' }), { status: 500 });
    }
}
