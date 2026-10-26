# Relay demo — Viraj Gundewar

## Under-three-minute video

**0:00–0:20** — “I'm Viraj Gundewar, and this is Relay. AI agents are getting better at choosing what to buy. Relay gives that intelligence a spending boundary and keeps approval with the human.” Show the dashboard.

**0:20–0:55** — Open AI planner. Select Local AI, enter “I want to launch a small online business with a website and marketing materials,” set $150, and generate a plan. Keep the real model response visible; do not present Simulation as AI.

**0:55–1:30** — Show selected tools, model rationale, total and remaining budget. Explain that catalog prices and the spending limit are validated by server code, even if the model produces an invalid recommendation.

**1:30–2:20** — Click PayPal checkout, sign in with the sandbox buyer, and approve the payment. Avoid recording passwords or API secrets. Show the return to Relay and verified transaction receipt.

**2:20–2:45** — Export the receipt and show Connections. “The AI runs locally through Ollama, and payments use PayPal's free sandbox. No paid AI API or hosting is required.” End on the dashboard and developer credit.

## Submission description

Relay is an AI purchasing copilot that turns a user's goal into a budget-aware digital-product bundle. It uses a local Ollama model for recommendations and explanations, validates every item and amount on the server, and integrates PayPal Orders v2 for buyer-approved sandbox checkout and verified capture receipts.

The prototype explores how agents can assist commerce while preserving human payment approval. It includes a curated demo catalog, responsive planning dashboard, transparent engine labels, budget breakdowns, sandbox transaction history and receipt export. Built by Viraj Gundewar with Node.js, browser-native JavaScript, Ollama and PayPal.

## Assets

Interface artwork is original CSS and text. No copyrighted music or external product images are included. The PayPal name identifies the actual integration; review event trademark/video rules before recording PayPal screens. Fonts load from Google Fonts with local system fallbacks.
