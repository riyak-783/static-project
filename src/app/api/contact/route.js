import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: ["riyasln783@gmail.com"],
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
  } catch (error) {
    console.log(error);
    return Response.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}
