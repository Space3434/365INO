# Telnyx Voice Support Agent V1

This folder contains the first-version setup for a Telnyx-only inbound voice support agent for 365INO.

## What This Builds

- One Telnyx AI Assistant named `365INO Customer Support`
- Telnyx native AI model only
- No OpenAI key
- No website backend
- No database
- Call summaries kept in Telnyx Conversation History / Insights

## Files

- `365ino-customer-support-assistant.md`: the assistant instruction prompt
- `call-summary-insight.md`: the summary format to use in Telnyx Insights
- `../scripts/create-telnyx-assistant.mjs`: helper script that creates the assistant through the Telnyx API

## One-Time Setup

1. Add your Telnyx API key to a local `.env.local` file:

   ```bash
   TELNYX_API_KEY=YOUR_TELNYX_API_KEY
   ```

   Use only the key value after the equals sign. Do not include `Bearer`, quotes, spaces, or the placeholder text.

2. Create the assistant:

   ```bash
   npm run telnyx:create-assistant
   ```

3. In Telnyx Mission Control Portal:

   - Open AI Assistants.
   - Confirm `365INO Customer Support` was created.
   - Create or enable an Insight for post-call summaries using `call-summary-insight.md`.
   - Assign the assistant to the Telnyx phone number that will receive inbound calls.
   - Enable Conversation History.
   - Enable Insights for the assistant if available in your Telnyx plan/configuration.

## Getting a Toll-Free Number

If you want a new Telnyx number, start by searching for available toll-free voice numbers:

```bash
npm run telnyx:search-tollfree
```

To show a different number of results, pass a count:

```bash
npm run telnyx:search-tollfree -- 20
```

This script only searches available numbers. It does not buy a number or create charges.

After choosing a number, purchase it in Telnyx Mission Control, confirm the monthly/usage costs, then assign it to the `365INO Customer Support` AI Assistant.

## Recommended First Tests

Call the assigned Telnyx number and test:

1. General service question:
   - “What does 365INO do?”
2. Callback collection:
   - “I need help with a cloud modernization project.”
3. Unknown question:
   - Ask something specific the agent should not know, such as pricing or contract availability.

Confirm:

- The greeting is correct.
- The agent answers high-level company/service questions.
- The agent collects caller name, company, phone, email, reason, urgency, and follow-up need.
- The agent does not guess when unsure.
- A transcript and/or summary appears in Telnyx Conversation History / Insights.

## V2 Ideas

- Email summaries to `info@365ino.com`
- Store call summaries in a small CRM or website dashboard
- Add live transfer rules
- Add business-hours handling
- Add a website page for voice-agent operations
