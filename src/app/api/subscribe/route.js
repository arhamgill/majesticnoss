import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const OWNER_EMAIL = process.env.OWNER_EMAIL;
export async function POST(req) {
  try {
    const { email } = await req.json();

    const data = await resend.emails.send({
      from: 'Your Website <onboarding@resend.dev>', // Update with your verified domain
      to: [OWNER_EMAIL], // Sending to the website owner
      subject: 'New Newsletter Subscription',
      html: `
        <h2>New Newsletter Subscriber</h2>
        <p>You have a new newsletter subscriber!</p>
        <p>Subscriber's email: <strong>${email}</strong></p>
        <p>Date: ${new Date().toLocaleString()}</p>
      `,
    });

    return NextResponse.json({ message: 'Subscription successful' });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
