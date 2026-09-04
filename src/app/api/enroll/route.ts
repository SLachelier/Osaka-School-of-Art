import { NextResponse } from "next/server";

const RECIPIENT_EMAIL = "osa.culturalvisa@gmail.com";
const MAX_FIELD_LENGTH = 5_000;

type EnrollmentRequest = {
  name?: unknown;
  email?: unknown;
  country?: unknown;
  program?: unknown;
  message?: unknown;
};

function cleanField(value: unknown, maxLength = MAX_FIELD_LENGTH) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  let body: EnrollmentRequest;

  try {
    body = (await request.json()) as EnrollmentRequest;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = cleanField(body.name, 200);
  const email = cleanField(body.email, 320);
  const country = cleanField(body.country, 200);
  const program = cleanField(body.program, 100);
  const message = cleanField(body.message);

  if (!name || !email || !program || !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json(
      {
        error:
          "Please provide your name, a valid email address, and a program.",
      },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !from) {
    console.error("Resend email is not configured.");
    return NextResponse.json(
      { error: "Email service is not configured. Please try again later." },
      { status: 503 },
    );
  }

  const emailResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [RECIPIENT_EMAIL],
      reply_to: email,
      subject: `Enrollment enquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Country: ${country || "Not provided"}`,
        `Program: ${program}`,
        "",
        "Message:",
        message || "Not provided",
      ].join("\n"),
    }),
  });

  if (!emailResponse.ok) {
    console.error("Resend email delivery failed:", await emailResponse.text());
    return NextResponse.json(
      { error: "Unable to send your enquiry. Please try again later." },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true });
}
