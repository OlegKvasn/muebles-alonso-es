import nodemailer from "nodemailer";

const email = process.env.NEXT_PUBLIC_EMAIL_USER;
const pass = process.env.NEXT_PUBLIC_EMAIL_PASS;

export const transporter: nodemailer.Transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions: nodemailer.SendMailOptions = {
  from: email,
  to: email,
};
