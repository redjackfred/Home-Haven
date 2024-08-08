import {connectToDatabase} from "../utils/mongodb";
import { type NextRequest } from 'next/server'
// Async GET request handler
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const city = searchParams.get("city") || "";
  console.log(city);
  try{
    // Connect to the database
    const { db } = await connectToDatabase();
    // Fetch data from 'home_informations' collection, limited to 100 documents
    const posts = await db
      .collection("home_informations")
      .find({})
      .limit(100)
      .toArray();
    // Return the fetched data as JSON response
    return Response.json(posts);
  } catch (e) {
    console.error(e);
    // Return error as JSON response
    return Response.json({ error: e });
  } 
}