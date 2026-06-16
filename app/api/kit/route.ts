// app/api/subscribe/route.ts
import { NextRequest, NextResponse } from "next/server";

const KIT_API_KEY = process.env.KIT_API_KEY!;
const KIT_TAG_ID = process.env.KIT_TAG_ID!; // the tag ID for "launch notifications"

export async function POST(req: NextRequest) {
  try {
    const { fullName, email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Step 1: Create (or get existing) subscriber
    const subRes = await fetch("https://api.kit.com/v4/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Kit-Api-Key": KIT_API_KEY,
      },
      body: JSON.stringify({
        full_name: fullName || undefined,
        email_address: email,
        state: "active",
      }),
    });

    if (!subRes.ok) {
      const errData = await subRes.json().catch(() => ({}));
      return NextResponse.json(
        { error: errData.message || "Failed to create subscriber" },
        { status: subRes.status },
      );
    }

    const subData = await subRes.json();
    const subscriberId = subData.subscriber.id;

    console.log(subData);

    // Step 2: Apply tag
    console.log(process.env.KIT_TAG_ID);
    const tagRes = await fetch(
      `https://api.kit.com/v4/tags/${KIT_TAG_ID}/subscribers/${subscriberId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Kit-Api-Key": KIT_API_KEY,
        },
        body: JSON.stringify({}),
      },
    );

    if (!tagRes.ok) {
      // Subscriber was created but tagging failed — still treat as partial success
      console.error("Tagging failed:", await tagRes.text());
    }

    return NextResponse.json({ success: true, subscriber: subData.subscriber });
  } catch (err) {
    console.error("Subscribe error:", err);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}
