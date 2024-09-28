import clientPromise from '@/lib/mongodb';
import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';
import { ObjectId } from 'mongodb'; // Import ObjectId type from MongoDB

// Secret for signing the JWT token (use environment variables in production)
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

// Function to create JWT token
function createJWT(userData: { userId: string, email: string }) {
    return jwt.sign(userData, JWT_SECRET, { expiresIn: '1d' });
}

export async function POST(req: Request) {
    const client = await clientPromise;
    const db = client.db('Honeycomb'); // Replace with your actual database name

    try {
        const { email, password } = await req.json(); // Get email and password from the request

        // Log the received email and password for debugging (Remove in production)
        console.log("Received email:", email);
        console.log("Received password:", password);

        // Check if the user exists by email
        const user = await db.collection('users').findOne({ email });

        // If no user is found, return a 401 error
        if (!user) {
            console.error('User not found:', email);
            return new Response(JSON.stringify({ message: 'Invalid email or password' }), { status: 401 });
        }

        // Compare the provided password with the stored plaintext password (insecure!)
        if (password !== user.password) {
            console.error('Password mismatch for user:', email);
            return new Response(JSON.stringify({ message: 'Invalid email or password' }), { status: 401 });
        }

        // Convert MongoDB ObjectId to string for the JWT payload
        const userIdStr = user._id.toString();

        // Create a JWT token with the user's id (as a string) and email
        const token = createJWT({ userId: userIdStr, email: user.email });

        // Set the JWT in an httpOnly cookie
        const cookie = serialize('auth_token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // Secure in production
            maxAge: 60 * 60 * 24, // 1 day expiration
            path: '/'
        });

        // Send back success message with user details and set the cookie
        return new Response(JSON.stringify({ message: 'Login successful', redirectTo: '/dashboard' }), {
            status: 200,
            headers: {
                'Set-Cookie': cookie,
                'Content-Type': 'application/json'
            }
        });

    } catch (error) {
        console.error('Error during user login:', error);
        return new Response(JSON.stringify({ message: 'Internal server error' }), { status: 500 });
    }
}
