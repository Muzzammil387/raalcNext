// 📁 app/api/contact/route.js
import { NextResponse } from 'next/server';

// If you plan to use a database or other integrations, import/configure here.
// For now, we only forward to Zapier webhook.

export async function POST(req) {
  let formData;
  try {
    formData = await req.json();
  } catch (e) {
    return NextResponse.json({ ok: false, message: 'Invalid JSON' }, { status: 400 });
  }

  // Destructure expected fields; if missing, you can return an error
  const {
    name,
    email,
    phone,
    consultation_mode,
    time,
    message,
    assignedAdmin,
    pageUrl,
    origin,
    timestamp,
  } = formData;

  // Basic validation example
  if (!name || !email || !phone || !message || !assignedAdmin || !consultation_mode || !time) {
    return NextResponse.json(
      { ok: false, message: 'Missing required fields or assignedAdmin.' },
      { status: 400 }
    );
  }

  // Build the Zapier payload. You can add or remove fields as needed.
  const zapierPayload = {
    name,
    email,
    phone,
    consultation_mode,
    time,
    message,
    assignedAdmin,
    pageUrl,
    origin,
    timestamp: timestamp || new Date().toISOString(),
  };

  try {
    // Forward to Zapier webhook (server-side fetch avoids CORS)
    try {
  const zapierRes = await fetch(
    'https://hooks.zapier.com/hooks/catch/18456228/uouwzei/',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(zapierPayload),
    }
  );

  if (!zapierRes.ok) {
    const text = await zapierRes.text();
    console.warn('⚠️ Zapier webhook failed:', zapierRes.status, text);
  }

  return NextResponse.json({ ok: true, assignedAdmin }, { status: 200 });
} catch (e) {
  console.error('Error in /api/contact:', e);
  const body =
    process.env.NODE_ENV === 'production'
      ? { ok: false, message: 'Internal server error' }
      : { ok: false, message: e.message, stack: e.stack, assignedAdmin };

  return NextResponse.json(body, { status: 500 });
}


    // Optionally: persist form data in your own database here

    // Respond success
    return NextResponse.json({ ok: true, assignedAdmin }, { status: 200 });
  } catch (e) {
    console.error('Error in /api/contact:', e);
    // In production, you might return a generic message; in dev, include details
    const body =
      process.env.NODE_ENV === 'production'
        ? { ok: false, message: 'Internal server error' }
        : { ok: false, message: e.message, stack: e.stack, assignedAdmin };

    return NextResponse.json(body, { status: 500 });
  }
}