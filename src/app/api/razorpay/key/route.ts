import { NextResponse } from "next/server";

export async function GET() {
  const key =
    process.env.RAZORPAY_KEY_ID ||
    process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID ||
    "";

  return NextResponse.json({ key });
}
