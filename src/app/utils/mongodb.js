import { MongoClient } from 'mongodb'
// Load environment variables for MongoDB URI and Database name
const { MONGODB_URI, MONGODB_DB } = process.env

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}

if (!MONGODB_DB) {
  throw new Error(
    'Please define the MONGODB_DB environment variable inside .env.local'
  )
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongo

if (!cached) {
  cached = global.mongo = { conn: null, promise: null }
}
// Function to connect to MongoDB database
export async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn
  }
  // If no promise is cached, create a new promise to connect to MongoDB
  if (!cached.promise) {
    cached.promise = MongoClient.connect("mongodb+srv://redjackfred:jackfred@home-haven.ozifybh.mongodb.net/?retryWrites=true&w=majority&appName=Home-Haven").then((client) => {
      return {
        client,
        db: client.db("home_haven"),
      }
    })
  }
  // Wait for the promise to resolve and cache the connection
  cached.conn = await cached.promise
  return cached.conn
}