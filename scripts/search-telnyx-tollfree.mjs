import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const envPath = path.join(root, ".env.local");

if (fs.existsSync(envPath)) {
  for (const line of fs.readFileSync(envPath, "utf8").split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) continue;
    const [key, ...valueParts] = trimmed.split("=");
    if (!process.env[key]) {
      process.env[key] = valueParts.join("=").replace(/^["']|["']$/g, "");
    }
  }
}

const apiKey = process.env.TELNYX_API_KEY;

if (!apiKey) {
  console.error("Missing TELNYX_API_KEY. Add it to .env.local or set it in your shell.");
  process.exit(1);
}

const limit = Number.parseInt(process.argv[2] ?? "10", 10);
const params = new URLSearchParams({
  "filter[country_code]": "US",
  "filter[phone_number_type]": "toll_free",
  "filter[features]": "voice",
  "page[size]": String(Number.isFinite(limit) ? Math.min(Math.max(limit, 1), 50) : 10)
});

const response = await fetch(`https://api.telnyx.com/v2/available_phone_numbers?${params}`, {
  headers: {
    Authorization: `Bearer ${apiKey}`,
    Accept: "application/json"
  }
});

const json = await response.json().catch(() => null);

if (!response.ok) {
  console.error(`Telnyx API error: ${response.status} ${response.statusText}`);
  console.error(JSON.stringify(json, null, 2));
  process.exit(1);
}

const numbers = Array.isArray(json?.data) ? json.data : [];

if (numbers.length === 0) {
  console.log("No toll-free voice numbers returned by Telnyx for this search.");
  console.log("Try again later or search directly in Telnyx Mission Control.");
  process.exit(0);
}

console.log("Available Telnyx toll-free voice numbers:");
console.log("");

for (const item of numbers) {
  const number = item.phone_number ?? item.e164_phone_number ?? "Unknown number";
  const locality = [item.locality, item.region, item.country_code].filter(Boolean).join(", ");
  const monthlyCost = item.cost_information?.monthly_cost;
  const upfrontCost = item.cost_information?.upfront_cost;
  const cost = [upfrontCost ? `upfront ${upfrontCost}` : null, monthlyCost ? `monthly ${monthlyCost}` : null]
    .filter(Boolean)
    .join("; ");

  console.log(`- ${number}${locality ? ` (${locality})` : ""}${cost ? ` - ${cost}` : ""}`);
}

console.log("");
console.log("This script only searches. Purchase the selected number in Telnyx Mission Control after confirming costs.");
