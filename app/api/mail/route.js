import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";
export async function POST(req, res) {
  const payload = await req.json();
  const e = payload.email;
  const n = payload.name;
  const q = payload.query;

  const bodyl = `Dear ${n},\nThank you for reaching out and expressing your interest our services.we appreciate the opportunity to connect with you.\nwe have received your inquiry and will review the details you provided. we will get back to you as soon as possible with the information or response you requested.\nIf you have any additional questions or if there's anything specific you would like to discuss, please feel free to let us know.\nThank you once again for considering our services.\nwe look forward to the possibility of working together.\n\n\nBest regards,\nNexGen\nnexgen9032@gmail.com`;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
  });

  const mailOptions = {
    from: process.env.user,
    to: e,
    subject: "Thank You for Your Inquiry - NextGen",
    text: bodyl,
  };
  const mailOptions2 = {
    from: "shashiawaripreetham@gmail.com",
    to: "shashiawaripreetham@gmail.com",
    subject: n,
    text: q,
  };

  try {
    await transporter.sendMail(mailOptions);
    const uri = process.env.MONGODB_URI;
    const client = new MongoClient(uri);

    try {
      await client.connect();
      const db = client.db();
      const collection = db.collection("querys");

      const result = await collection.insertOne(payload);
      return NextResponse.json({ message: "Emails sent successfully" });
    } catch (error) {
      console.error("Error:", error);
      return NextResponse.json({ success: false, error: error.message });
    } finally {
      await client.close();
    }
  } catch (error) {
    console.error(error);
    return NextResponse.error({ message: "Error uploading" });
  }
}
