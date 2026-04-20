import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing fields" },
        { status: 400 }
      );
    }
    // TODO (user): wire up Resend / email service here.
    console.log("[contact]", { name, email, message });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Bad request" },
      { status: 400 }
    );
  }
}
