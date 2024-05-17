import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db();
    const collection = db.collection("users");

    const payload = await req.json();

    const existingUser = await collection.findOne({ email: payload.email });
    return NextResponse.json({ exists: !!existingUser }); // Return whether user exists as a boolean
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.error({ status: 500, message: "Internal Server Error" }); // Return error response
  } finally {
    await client.close();
  }
}
