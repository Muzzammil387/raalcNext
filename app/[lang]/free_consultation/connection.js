export async function POST(req) {
  try {
    const data = await req.json();

    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] ||
      req.headers.get("x-real-ip") ||
      "Unknown";

    const payload = {
      name: data.name || '',
      email: data.email || '',
      phone: data.phone || '',
      message: data.message || '',
      preferredMode: data.preferredMode || '',
      preferredDate: data.preferredDate || '',
      assignedAdmin: data.assignedAdmin || '',
      origin: data.origin || 'Unknown',
      pageUrl: data.pageUrl || '',
      timestamp: data.timestamp || new Date().toISOString(),
      ip_address: ip,
    };

    const zapierWebhookURL = 'https://hooks.zapier.com/hooks/catch/18456228/uouwzei/';
    const response = await fetch(zapierWebhookURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const text = await response.text();
      console.warn('⚠️ Zapier webhook failed:', response.status, text);
      return new Response(
        JSON.stringify({ success: false, error: `Zapier error: ${text}` }),
        { status: 502, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('❌ Zapier log failed:', error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
