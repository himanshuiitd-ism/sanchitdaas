import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

type EmailData = {
  name: string;
  email: string;
  message: string;
};

export async function POST(request: NextRequest) {
  try {
    const body: EmailData = await request.json();

    // Validate input
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json({ message: "Invalid email address" }, { status: 400 });
    }

    // Get environment variables
    const gmailEmail = process.env.GMAIL_EMAIL;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

    if (!gmailEmail || !gmailAppPassword) {
      console.error("Missing Gmail credentials in environment variables");
      return NextResponse.json(
        { message: "Email service is not configured. Please contact the site administrator." },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailEmail,
        pass: gmailAppPassword,
      },
    });

    // Email to site owner
    const ownerEmailOptions = {
      from: gmailEmail,
      to: gmailEmail,
      subject: `New Contact Form Submission from ${body.name}`,
      html: `
        <h2>New Contact Form Message</h2>
        <p><strong>From:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <hr />
        <h3>Message:</h3>
        <p>${body.message.replace(/\n/g, "<br />")}</p>
      `,
    };

    // Email to visitor (confirmation)
    const visitorEmailOptions = {
      from: gmailEmail,
      to: body.email,
      subject: "Thank you for reaching out - Sanchit Das",
      html: `
        <h2>Thank You!</h2>
        <p>Hi ${body.name},</p>
        <p>Thank you for your message. I've received your email and will get back to you within 24-48 hours.</p>
        <hr />
        <p><strong>Your message:</strong></p>
        <p>${body.message.replace(/\n/g, "<br />")}</p>
        <hr />
        <p>Best regards,<br />Sanchit Das</p>
      `,
    };

    // Send both emails
    await transporter.sendMail(ownerEmailOptions);
    await transporter.sendMail(visitorEmailOptions);

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json({ message: "Failed to send email. Please try again later." }, { status: 500 });
  }
}
