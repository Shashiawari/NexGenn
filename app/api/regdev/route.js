import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";



export async function POST(req) {
  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db();
    const collection = db.collection("devs");

    const payload = await req.json();

    const result = await collection.insertOne(payload);
    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ success: false, error: error.message });
  } finally {
    await client.close();
  }
}

export async function GET(req) {
  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db();
    const collection = db.collection("devs");

    const devs = await collection.find({}).toArray(); // Fetch all documents
    return NextResponse.json({ success: true, devs });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ success: false, error: error.message });
  } finally {
    await client.close();
  }
}
