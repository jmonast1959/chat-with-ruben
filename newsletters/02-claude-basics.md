# Claude Basics

**Author:** Ruben Hassid
**Published:** February 18, 2026
**Source:** https://ruben.substack.com/p/claude

> How to set up Claude the right way (so you actually stop going back to ChatGPT).

The people I talk to every day quietly switched. The creators I follow. The teams I consult for. The founders in my DMs. One by one, they stopped opening ChatGPT and moved to Claude.

Right now, in February 2026, Claude is the single most important AI tool for anyone doing knowledge work. Not because it's perfect (it's not). But because what it does well, nothing else comes close.

---

## Claude is not one tool. It's six.

You think Claude is "like ChatGPT but from Anthropic." That was true in 2024. In 2026, Claude is six things:

1. **Cowork** (a desktop app that works on your actual files)
2. **Model** (most of you use the wrong Claude)
3. **Excel** (an AI inside your spreadsheets)
4. **Plugins** (turn Claude into a specialist for your exact job)
5. **Artifacts** (interactive outputs you can use, not just read)
6. **Projects** (persistent context folders that remember everything)

Ranked from most to least important.

---

## 1. Claude Cowork

### What it is (in 10 words):

Kind of like ChatGPT, but much better.

### Why it matters:

Claude Cowork lives on your computer. It reads your files. It creates documents. It builds spreadsheets. It writes code you'll never see to answer you. It asks *you* questions when it needs clarity instead of guessing wrong.

Cowork is the Claude Code of knowledge workers.

### How to install Cowork:

1. Go to claude.com/download. Download the app.
2. You need a Pro account ($20/month). Or $17/month if you pay annually.
3. Open the app. Click the **Cowork** tab at the top.
4. Select a folder from your computer. This is how Claude reads your files.
5. Pro tip: create markdown files about you, or anything you want.

### Your first prompt:

```
I want to [YOUR TASK] so that [WHAT SUCCESS LOOKS LIKE].

First, read the uploaded files completely before responding.

DO NOT start executing yet. Instead, ask me clarifying questions
(use AskUserQuestion) so we can refine the approach together step by step.

Only begin work once we've aligned.
```

The key is to force Cowork to ask you questions. It starts generating a form to prompt you for better answers.

### The mindset shift (if you're coming from ChatGPT):

ChatGPT trained you to write better prompts. Longer prompts. Cleverer prompts. You have a folder of saved prompts you haven't opened in weeks.

Forget that.

With Claude Cowork, the game is text files. Take everything you know (your writing style, your brand rules, your best examples, your past work) and put it in .md or .txt files. Drop them in a folder. Point Claude to that folder.

Claude reads your files before responding. The more context you give it as files, the less prompting you need. The output goes from "generic AI" to "this actually sounds like my work."

Pro tip: don't just upload hundreds of texts. Be mindful of quantity AND quality.

1. You write the best md. files (like briefs for your team).
2. You start prompts with: "Read this & then ask me questions to do [task]."

---

## 2. Use the *right* Claude

### Opus + Extended.

The model you want is **Opus 4.6**. It dropped on February 5, 2026. It's the smartest model available. For writing, thinking, analyzing, planning, anything requiring reasoning.

### How to set it up:

1. Open any Claude chat (on claude.ai or Cowork).
2. Click the model selector dropdown at the bottom.
3. Select **Opus 4.6** + **Extended Thinking**.

Don't forget to turn on Extended Thinking. It forces Claude to *think* first. Like an internal monologue. Big difference.

### About internet access.

Claude can connect to your tools. Slack, Google Drive, Notion, Figma, and 50+ others. They're called **Connectors**.

Go to Settings > Connectors. Browse the directory. Click "Add." Done.

Once connected, Claude can search your Slack messages, pull from your Google Docs, or reference your Notion pages mid-conversation. No copy-pasting. Free on all plans.

---

## 3. Claude in Excel

### What it is (in 10 words):

An AI inside your spreadsheet that creates/reads formulas.

### Why it matters:

You've tried uploading Excel to ChatGPT before. ChatGPT flattened everything into text. Formulas disappeared. Structure gone.

Claude in Excel lives *inside* your spreadsheet. It reads every tab. It knows what D14 actually contains.

### How to install (3 minutes):

1. Open Microsoft Excel (desktop or web). Excel 2016 or later.
2. Insert > Get Add-ins (Windows) or Tools > Add-ins (Mac).
3. Search "Claude by Anthropic." Look for the official one with the Claude logo.
4. Click "Add" or "Get It Now."
5. Sign in with your Claude account.
6. Press Ctrl+Option+C (Mac) or look for the Claude icon in your ribbon.

Needs a paid Claude plan (Pro, Max, Team, or Enterprise). The add-in itself is free.

### Your first prompt:

Open any spreadsheet. Then ask:

```
Give me a summary of each tab.
```

Then get specific:

1. "Explain what the formula in cell B12 does in plain English."
2. "Find all #REF and #VALUE errors in this workbook."
3. "Convert all dates to YYYY-MM-DD format."
4. "Create a pivot summary of monthly revenue by product category."

Claude highlights every cell it touches. You see exactly what changed. Nothing happens without your approval.

### Start an Excel from scratch:

Go to Cowork. Prompt it:

```
Create a professional Excel spreadsheet (.xlsx) for: [PURPOSE]
Context: [WHO IS IT FOR / HOW WILL IT BE USED]
It should cover: [LIST WHAT YOU WANT TO TRACK OR CALCULATE]

Rules:
- Use Excel formulas (SUM, SUMIF, IF, etc.) — never hardcoded calculations
- Put editable assumptions in their own labeled cells
- Freeze top row, auto-fit columns
- [ANY EXTRAS: charts, dropdowns, conditional formatting, specific currency, etc.]
```

---

## 4. Claude Plugins

### What it is (in 10 words):

Pre-built skill packs that make Claude an expert instantly.

### Why it matters:

Anthropic released 11 official plugins in January 2026. Sales. Marketing. Legal. Finance. Data analysis. Product management. Customer support. Each one gives Claude specific skills, workflows, and slash commands for that function.

Install the Sales plugin? Claude can now research accounts, prep for calls, draft outreach, build competitive battlecards.

Install the Data plugin? It explores datasets, writes SQL, builds dashboards, validates your analysis.

You don't need to be technical. You just click install.

> Plugins are so consequential that legal software companies lost $285 billion in 2 days on the stock market. Thomson Reuters dropped 16% in a single session (its worst day on record). LegalZoom fell 20%.

### How to install plugins:

1. Open Claude Cowork.
2. Go to claude.com/plugins.
3. Browse. Pick one that matches your work.
4. Click install. It activates automatically.
5. Each plugin comes with its own slash commands.
6. Type / in the chat to see what's available.

### Your first prompt:

Marketing plugin:

```
/draft-content Write a LinkedIn post about [topic].
Use my uploaded voice profile. Target [audience].
Goal: [newsletter signups / awareness / engagement].
```

Data plugin:

```
/build-dashboard Create an interactive dashboard from this CSV.
Include filters by date and category. Show trends over time.
```

---

## 5. Claude Artifacts

### What it is (in 10 words):

Interactive outputs inside Claude (instead of just text like a chatbot).

### How to use it:

Artifacts work automatically in Cowork. No setup required.

### Your first prompt:

```
Create an interactive HTML calculator that converts monthly expenses
into annual projections. Include fields for rent, groceries,
transportation, subscriptions, and a "total" that updates in real time.
Make it clean and minimal.
```

Other things to try:

1. "Create a visual comparison chart of [Product A] vs [Product B] with a clean design."
2. "Build me a simple project tracker with columns for Task, Owner, Status, and Due Date."
3. "Make an SVG diagram showing my team's reporting structure."

---

## 6. Claude Projects

### What it is (in 10 words):

A folder of chats where Claude remembers the files you upload.

### How to set it up (5 minutes):

1. Go to claude.ai and log in (Pro or Team plan required).
2. Click "Projects" in the left sidebar.
3. Click "Create Project." Name it (e.g., "My Newsletter").
4. Click "Add content." Upload key files: brand docs, writing samples, reference material, data. Don't overbloat it.

Honest take: I don't use Projects anymore. They have more bugs, and Cowork + markdown files is the best way to work for me (with folders inside my computer).

---

## Where Claude falls short

- **Images.** Claude does not generate photos, illustrations, or visual art. Use Gemini.
- **Videos.** Use Seedance 2.0 or Gemini VEO-4 (coming soon).
- **Real-time search.** Claude can browse but Grok is the best for this.

Claude is not the best at everything. For writing, thinking, analyzing, building, and working with your files? Nothing is beating it right now.

---

## Your first 30 minutes with Claude

**Minutes 0-5: Install Claude.** Download desktop app. Get Pro ($20/month). Open the app. Click Cowork.

**Minutes 5-10: Create your first text file.** Open any text editor. Create a file called "about-me". Write: (1) what you do for work; (2) how you like to communicate; (3) one example of writing you're proud of. Save as markdown.

**Minutes 10-15: Start your first Cowork conversation.** Select the folder where your file lives. Type: "Read the about-me file. Based on it, write [task]." Iterate. Chat with it.

**Minutes 15-20: Try a Plugin.** In Cowork, click "Plugins" in the chat bar (after clicking +). Browse the library. Try Productivity, Marketing, or Sales. Type `/` to see what's available.

**Minutes 20-25: Try an Artifact.** Ask: "Create a weekly planner template as an interactive HTML page with Monday through Friday columns and time slots from 9 am to 6 pm." Interact with it. Ask for changes. Download.

**Minutes 25-30: Try Claude in Excel.** Open Excel. Get Add-ins. Search "Claude by Anthropic." Install. Ask: "Explain the formula in [pick any cell with a formula]." Or start a spreadsheet from scratch in Cowork.

---

## Bonus: brutal critic prompt

Copy-paste this to turn Claude into your brutal critic:

```
You are my brutally honest thinking partner. Your job is to make my
thinking sharper, my plans more realistic, and my blind spots visible —
every single time we talk.

You are not my cheerleader. You are not my yes-man. You're the friend
who grabs my arm before I walk into traffic and says "Hey, you're about
to do something stupid, and here's exactly why."

Step 1: What am I actually saying vs. what I think I'm saying?
Read between my words. Name the real thing happening — not the polished
version I'm presenting. If I'm lying to myself, point it out.

Step 2: Where is my reasoning broken?
Dissect my logic the way a mechanic takes apart an engine. Show me the
specific part that doesn't work. Show me WHY, what assumption it's built
on, and what happens when that assumption collapses.

Step 3: What am I avoiding, and what is it costing me?
Every time I dodge something hard, there's a price tag attached.
Calculate it for me.

Step 4: What would someone who's actually where I want to be do differently?
Show me the gap. Concrete, specific, "here's exactly what's different
about their approach vs. yours."

Step 5: What should I actually do — in order, starting now?
Give me a precise, prioritized action plan. Tell me what to STOP doing,
not just what to start. Every plan should have a kill switch.

Step 6: What's the one question I'm clearly avoiding?
End every response with the uncomfortable question I need to sit with.
Pin me down.

Ground rules:
- Never open with praise, agreement, or "great question."
- Never soften a critique with "but you're on the right track."
- If my plan is genuinely solid, don't applaud it — stress-test it harder.
- No motivational clichés. Concrete language only.
- Keep it tight.
- Write like you're sitting across from me at a table.
```
