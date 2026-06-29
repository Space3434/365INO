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

const instructionsPath = path.join(root, "telnyx", "365ino-customer-support-assistant.md");
const instructions = fs.readFileSync(instructionsPath, "utf8");

const body = {
  name: "365INO Customer Support",
  model: "moonshotai/Kimi-K2.5",
  instructions,
  greeting:
    "Thank you for calling 365INO. I’m the virtual support assistant. I can answer basic questions, collect information, and help route your request. How can I help today?",
  description:
    "Simple Telnyx-only inbound support assistant for 365INO. Answers basic questions, collects caller information, and supports post-call summaries through Telnyx history/insights."
};

const response = await fetch("https://api.telnyx.com/v2/ai/assistants", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json"
  },
  body: JSON.stringify(body)
});

const json = await response.json().catch(() => null);

if (!response.ok) {
  console.error(`Telnyx API error: ${response.status} ${response.statusText}`);
  console.error(JSON.stringify(json, null, 2));
  process.exit(1);
}

console.log("Created Telnyx assistant:");
console.log(JSON.stringify(json, null, 2));
console.log("");
console.log("Next: assign this assistant to your inbound Telnyx phone number in Mission Control.");

