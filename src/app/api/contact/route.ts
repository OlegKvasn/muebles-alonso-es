import { mailOptions, transporter } from "@/config/nodemailer";
import htmlTemplate from "@/templates/email";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const request = await req.json();

  return await transporter
    .sendMail({
      ...mailOptions,
      subject: `Mensaje de ${request.clientName}`,
      text: request.message,
      html: htmlTemplate(
        request.clientName,
        request.email,
        request.phone,
        request.message
      ),
    })
    .then((response: nodemailer.SentMessageInfo) => {
      return NextResponse.json(
        { error: false, emailSent: true, errors: [], response },
        { status: 200 }
      );
    })
    .catch((error: nodemailer.SentMessageInfo) => {
      return NextResponse.json(
        { error: true, emailSent: false, errors: [error] },
        { status: 500 }
      );
    });
}
