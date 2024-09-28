import { MongoClient } from 'mongodb';

// Declare client and clientPromise
let client: MongoClient | undefined;
let clientPromise: Promise<MongoClient>;

// MongoDB connection URI from environment variables
const uri: string | undefined = process.env.MONGODB_URI; // Replace with your actual MongoDB URI
const options = {};

// Throw an error if the URI is missing
if (!uri) {
  throw new Error('Please add your Mongo URI to .env.local');
}

// Extending the Node.js global object to include mongoClientPromise
declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

// Use a global variable to avoid creating multiple MongoClient instances in development
if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production, always create a new MongoClient
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

// Export the clientPromise for use in other parts of the application
export default clientPromise;
