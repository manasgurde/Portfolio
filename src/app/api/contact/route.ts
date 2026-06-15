import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

// Initialize services conditionally to prevent build crashes if keys are missing
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;

const resendApiKey = process.env.RESEND_API_KEY || '';
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    let isMockMode = false;

    // 1. Database Insertion
    if (supabase) {
      const { error: dbError } = await supabase
        .from('messages')
        .insert([{ name, email, message }]);
        
      if (dbError) {
        console.error('Supabase Error:', dbError);
        return NextResponse.json({ error: 'Failed to store message' }, { status: 500 });
      }
    } else {
      console.log('MOCK MODE (DB): Received message ->', { name, email, message });
      isMockMode = true;
    }

    // 2. Email Notification
    if (resend) {
      const { error: emailError } = await resend.emails.send({
        from: 'Portfolio <onboarding@resend.dev>', // Update this when domain is verified
        to: [process.env.CONTACT_EMAIL || 'you@example.com'],
        subject: `New Portfolio Message from ${name}`,
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong></p>
               <p>${message.replace(/\n/g, '<br/>')}</p>`
      });

      if (emailError) {
        console.error('Resend Error:', emailError);
        // We still return success if the DB insert worked, but log the email error
      }
    } else {
      console.log('MOCK MODE (Email): Email notification skipped (no RESEND_API_KEY).');
    }

    return NextResponse.json({ success: true, mock: isMockMode });

  } catch (error) {
    console.error('Contact API Route Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
