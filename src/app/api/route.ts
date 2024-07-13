import {connectToDatabase} from "../utils/mongodb";
import { type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const city = searchParams.get("city") || "San Francisco";
  console.log(city);
  try{
    const { db } = await connectToDatabase();
          
    const posts = await db
      .collection("home_informations")
      .find({city: city})
      .limit(10)
      .toArray();

    return Response.json(posts);
  } catch (e) {
    console.error(e);
    return Response.json({ error: e });
  } 
}