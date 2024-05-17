import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

const saltRounds = 10; // Number of salt rounds for bcrypt

export async function POST(req, res) {
    const uri = process.env.MONGODB_URI;
    const client = new MongoClient(uri);
  
    try {
        await client.connect();
        const db = client.db();
        const collection = db.collection("users");
  
        const payload = await req.json();
  
        // Hashing the password
        const hashedPassword = await bcrypt.hash(payload.password, saltRounds);
  
        // Replace the plain password with the hashed one
        payload.password = hashedPassword;
  
        const result = await collection.insertOne(payload);
        return NextResponse.json({ success: true, result });
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ success: false, error: error.message });
    } finally {
        await client.close();
    }
}
