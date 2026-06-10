import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(request: VercelRequest, response: VercelResponse) {
  if (request.method === "OPTIONS") {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    response.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return response.status(200).end();
  }

  if (request.method !== "POST") {
    return response.status(405).json({ success: false, error: "Method not allowed. Use POST." });
  }

  const { email } = request.body as { email?: string };

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return response.status(400).json({ success: false, error: "Valid email required" });
  }

  // TODO: Connect to Zoho Campaigns or Mailchimp
  console.log("New Gavite Foresight subscriber:", email.trim().toLowerCase());

  return response.status(200).json({ success: true });
}
