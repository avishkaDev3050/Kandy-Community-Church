import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, contact, message } = await req.json();

    if (!name || !contact || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `Kandy Community Church <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER,
      replyTo: contact,
      subject: `New Prayer Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #1C2D42;">
          <h2 style="color: #C59B27;">New Prayer Request</h2>
          <hr style="border: 0.5px solid #eee;" />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email / Phone:</strong> ${contact}</p>
          <p><strong>Prayer Request:</strong></p>
          <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #C59B27; border-radius: 4px;">
            ${message.replace(/\n/g, "<br/>")}
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}