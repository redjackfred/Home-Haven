import {connectToDatabase} from "../utils/mongodb";
import { type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const city = searchParams.get("city") || "";
  console.log(city);
  try{
    const { db } = await connectToDatabase();
          
    const posts = await db
      .collection("home_informations")
      .find({})
      .limit(100)
      .toArray();

    return Response.json(posts);
  } catch (e) {
    console.error(e);
    return Response.json({ error: e });
  } 
}