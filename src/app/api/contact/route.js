import nodemailer from "nodemailer";

export async function POST(req) {
  const body = await req.json();

  const transporter = nodemailer.createTransport({
    host: "smtppro.zoho.in",
    port: 465,
    secure: true,
   auth: {
 user: process.env.EMAIL_USER,
 pass: process.env.EMAIL_PASS,
},
  });

  await transporter.sendMail({
    from: "info@nexora.in",
    to: "info@nexora.in",
    subject: "New Contact Form Message",
    text: `
Name: ${body.name}
Email: ${body.email}
Phone: ${body.phone}

Message:
${body.message}
    `,
  });

  return Response.json({ success: true });
}