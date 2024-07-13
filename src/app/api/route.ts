import {connectToDatabase} from "../utils/mongodb";

export async function GET(request: Request) {
  try{
    const { db } = await connectToDatabase();
          
    const posts = await db
      .collection("home_informations")
      .find({})
      .limit(5)
      .toArray();

    return Response.json({ posts });
  } catch (e) {
    console.error(e);
    return Response.json({ error: e });
  } 
}