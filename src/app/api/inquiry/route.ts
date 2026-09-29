import { NextResponse } from "next/server";
import { Resend } from "resend";

interface InquiryPayload {
  name?: string;
  phone?: string;
  email?: string;
  eventType?: string;
  date?: string;
  notes?: string;
}

export async function POST(request: Request) {
  try {
    const body: InquiryPayload = await request.json();
    const { name, phone, email, eventType, date, notes } = body;

    // Basic validation
    if (!name?.trim() || !phone?.trim() || !email?.trim()) {
      return NextResponse.json(
        { error: "Name, phone number, and email address are required." },
        { status: 400 }
      );
    }

    const recipientEmail =
      process.env.CONTACT_NOTIFICATION_EMAIL || "hello@mluevents.com";
    const senderEmail =
      process.env.CONTACT_FROM_EMAIL || "MLU Events <inquiries@mluevents.com>";
    const apiKey = process.env.RESEND_API_KEY;

    // Clean phone for WhatsApp link
    const digitsOnly = phone.replace(/[^0-9]/g, "");
    const whatsappLink = digitsOnly
      ? `https://wa.me/${digitsOnly}`
      : `https://wa.me/250787742477`;

    // HTML Email Template with MLU Luxury Aesthetic
    const htmlEmail = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F7F5F0; margin: 0; padding: 24px; color: #1A1A1A; }
            .container { max-width: 600px; margin: 0 auto; background: #FFFFFF; border-radius: 16px; overflow: hidden; border: 1px solid #E5D1B1; box-shadow: 0 4px 20px rgba(0,0,0,0.06); }
            .header { background-color: #050708; padding: 32px 28px; text-align: center; border-bottom: 2px solid #E5D1B1; }
            .header h1 { color: #FFFFFF; font-size: 22px; margin: 0; letter-spacing: 0.15em; text-transform: uppercase; font-weight: 700; }
            .header p { color: #E5D1B1; font-size: 11px; margin: 6px 0 0 0; letter-spacing: 0.2em; text-transform: uppercase; }
            .content { padding: 32px 28px; }
            .badge { display: inline-block; background-color: #1C422D; color: #FFFFFF; font-size: 11px; font-weight: 600; padding: 6px 14px; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 20px; }
            .field-group { margin-bottom: 18px; border-bottom: 1px solid #F0ECE4; padding-bottom: 14px; }
            .label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.12em; color: #777777; margin-bottom: 4px; font-weight: 600; }
            .value { font-size: 16px; color: #050708; font-weight: 500; }
            .notes-box { background: #FAF8F5; border-left: 3px solid #1C422D; padding: 14px 18px; border-radius: 0 8px 8px 0; margin-top: 6px; font-size: 14px; line-height: 1.6; color: #333333; }
            .actions { margin-top: 28px; padding-top: 20px; text-align: center; }
            .btn-whatsapp { display: inline-block; background-color: #1C422D; color: #FFFFFF !important; text-decoration: none; padding: 12px 26px; border-radius: 50px; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; margin: 6px; }
            .btn-reply { display: inline-block; background-color: #050708; color: #FFFFFF !important; text-decoration: none; padding: 12px 26px; border-radius: 50px; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; margin: 6px; }
            .footer { background: #FAF8F5; padding: 18px; text-align: center; font-size: 11px; color: #888888; border-top: 1px solid #EAE6DF; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>MLU Events</h1>
              <p>Modern &bull; Luxury &bull; Unique &bull; Kigali, Rwanda</p>
            </div>
            <div class="content">
              <span class="badge">New Event Inquiry</span>
              <h2 style="margin: 0 0 20px 0; font-size: 20px; color: #050708;">Client Event Brief</h2>

              <div class="field-group">
                <div class="label">Client Name</div>
                <div class="value">${escapeHtml(name)}</div>
              </div>

              <div class="field-group">
                <div class="label">Event Category</div>
                <div class="value" style="color: #1C422D; font-weight: 600;">${escapeHtml(eventType || "Not specified")}</div>
              </div>

              <div class="field-group">
                <div class="label">Target Date</div>
                <div class="value">${escapeHtml(date || "To be confirmed with client")}</div>
              </div>

              <div class="field-group">
                <div class="label">Phone / WhatsApp</div>
                <div class="value"><a href="${whatsappLink}" style="color: #1C422D; text-decoration: none; font-weight: 600;">${escapeHtml(phone)}</a></div>
              </div>

              <div class="field-group">
                <div class="label">Email Address</div>
                <div class="value"><a href="mailto:${escapeHtml(email)}" style="color: #050708; text-decoration: underline;">${escapeHtml(email)}</a></div>
              </div>

              <div class="field-group" style="border-bottom: none;">
                <div class="label">Event Vision & Notes</div>
                <div class="notes-box">${escapeHtml(notes || "No additional notes provided.")}</div>
              </div>

              <div class="actions">
                <a href="${whatsappLink}" class="btn-whatsapp" target="_blank">Chat Client on WhatsApp</a>
                <a href="mailto:${escapeHtml(email)}?subject=Re:%20MLU%20Events%20Inquiry%20-%20${encodeURIComponent(eventType || "Event")}" class="btn-reply">Reply via Email</a>
              </div>
            </div>
            <div class="footer">
              Submitted from mluevents.com &bull; ${new Date().toUTCString()}
            </div>
          </div>
        </body>
      </html>
    `;

    // If Resend API key is provided, send the email
    if (apiKey) {
      const resend = new Resend(apiKey);
      let emailResult = await resend.emails.send({
        from: senderEmail,
        to: recipientEmail,
        replyTo: email,
        subject: `✨ New Inquiry: ${name} (${eventType || "Event"})`,
        html: htmlEmail,
      });

      // Handle Resend sandbox domain restriction (when custom domain is not yet verified)
      if (emailResult.error && emailResult.error.statusCode === 403) {
        console.warn(
          "Resend sandbox notice: Domain not yet verified. Falling back to registered account email..."
        );
        // Attempt sending to account owner email (from error message or default)
        const match = emailResult.error.message.match(/\(([^)]+@[^)]+)\)/);
        const fallbackEmail = match ? match[1] : "tuyishime1angel@gmail.com";

        emailResult = await resend.emails.send({
          from: senderEmail,
          to: fallbackEmail,
          replyTo: email,
          subject: `✨ [MLU Lead] ${name} (${eventType || "Event"}) -> ${recipientEmail}`,
          html: htmlEmail,
        });
      }

      if (emailResult.error) {
        console.error("Resend API Error:", emailResult.error);
        return NextResponse.json(
          {
            error:
              emailResult.error.message ||
              "Failed to dispatch email via provider",
            details: emailResult.error,
          },
          { status: 502 }
        );
      }

      return NextResponse.json({
        success: true,
        message: "Inquiry successfully delivered to team inbox.",
        id: emailResult.data?.id,
      });
    } else {
      // Local/Dev mode fallback when RESEND_API_KEY is not yet added
      console.log("-----------------------------------------");
      console.log("📫 [MLU Events] Inquiry Received (Dev Mode):");
      console.log({ name, phone, email, eventType, date, notes });
      console.log("Add RESEND_API_KEY to .env.local to activate automated email dispatch.");
      console.log("-----------------------------------------");

      return NextResponse.json({
        success: true,
        devMode: true,
        message: "Inquiry recorded. (Add RESEND_API_KEY in .env.local for email delivery)",
      });
    }
  } catch (error) {
    console.error("Inquiry Submission Error:", error);
    return NextResponse.json(
      { error: "Internal server error occurred while processing inquiry." },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
