import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { userName, userEmail, message, toEmail } = await request.json();

    console.log(process.env.GMAIL_USER);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // 메일 내용
    const mailOptions = {
      from: userEmail,
      to: toEmail,
      subject: `[ContactPage] 새 문의가 도착했습니다.`,
      text: `
        보내는 분: ${userName} (${userEmail})
        메시지 내용:
        ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
