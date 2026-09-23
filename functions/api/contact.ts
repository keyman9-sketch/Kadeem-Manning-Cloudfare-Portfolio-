// functions/api/contact.ts
// Cloudflare Pages Function for secure server-side message routing

interface Env {
  DESTINATION_EMAIL?: string;
}

export async function onRequestPost(context: { request: Request; env: Env }) {
  try {
    const contentType = context.request.headers.get('content-type') || '';
    let name = '';
    let email = '';
    let inquiryType = '';
    let message = '';

    if (contentType.includes('application/json')) {
      const data = await context.request.json() as any;
      name = data.name || '';
      email = data.email || '';
      inquiryType = data.inquiryType || 'General';
      message = data.message || '';
    } else {
      const formData = await context.request.formData();
      name = (formData.get('name') as string) || '';
      email = (formData.get('email') as string) || '';
      inquiryType = (formData.get('inquiryType') as string) || 'General';
      message = (formData.get('message') as string) || '';
    }

    if (!email || !message) {
      return new Response(JSON.stringify({ error: 'Email and message are required.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Destination inbox (configured server-side)
    const targetEmail = context.env.DESTINATION_EMAIL || 'sire.key9@gmail.com';

    // Dispatch via server-side relay
    const relayResponse = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        _subject: `New Technical Inquiry: ${inquiryType} (${name})`,
        name: name,
        email: email,
        inquiryType: inquiryType,
        message: message,
        _template: 'table',
      }),
    });

    if (relayResponse.ok) {
      return new Response(JSON.stringify({ success: true, message: 'Message successfully routed.' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      return new Response(JSON.stringify({ success: true, message: 'Inquiry received.' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ success: true, message: 'Inquiry received.' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
