# Claude Cowork (April 2026 Update)

**Author:** Ruben Hassid
**Published:** April 9, 2026
**Source:** https://ruben.substack.com/p/claude-cowork-20

> If you don't code, you must know Claude Cowork.

---

## Skip this if you already use Claude Cowork

Quick reminder on how to access Cowork:

1. Go to claude.com/download. Download the app.
2. Pro account ($20/month) required. I pay $100/month.
3. Open the app. Click the **Cowork** tab between Chat & Code.
4. Select a folder from your computer.
5. Always select **Opus 4.6** for complex tasks.

---

## I - My Cowork folder

Cowork is all about how you set up your folder.

Create a new folder on your computer named **Claude Cowork**. Three subfolders inside:

1. ABOUT ME
2. OUTPUTS
3. TEMPLATES

### Step 1: Three core files in ABOUT ME

These are the only files Cowork reads automatically.

#### File #1 — about-me

> Who you are. How you think. How you want Claude to write for you.

A few months ago I wrote a complex about-me file. I asked Claude to interview me through 100 questions. But that single file ate 22,000+ words of context. I trimmed it to under 2,000 words by extracting patterns and throwing away raw transcripts.

**IF YOU ALREADY HAVE IT, trim it:**

1. Go to Cowork. Upload your previous about-me file.
2. Prompt:

```
This is my about-me file and I need to save tokens.
Ask me questions on how to trim effectively until we have the perfect document.
```

**IF YOU DON'T HAVE ANY FILE, here's how to make it from scratch:**

1. Open a new Cowork session.
2. Select Opus 4.6 + Extended thinking.
3. Prompt:

```
You are building my about-me.md file for my Cowork folder. This file
will be read by Claude at the start of every session to help you do my
job with me. It needs to be concise and high-signal.

Your job: interview me using AskUserQuestion (20 questions), then
compile the answers into a condensed about-me.md under 2,000 tokens.

## How to interview me

Use AskUserQuestion for every question. One question at a time.
Let me use "Other" to dictate long answers when I need to.

If I give a vague answer, push back. Ask for a specific example or rephrase.
Don't accept "I like to keep things clear" without knowing what clear
looks like in my work.

Follow interesting threads. If something unexpected comes up, go deeper.

## What to cover (15-20 questions, adapt based on what matters)

WHO I AM (3 questions)
- What do I do? What's my role, my company, my industry?
- Who do I work with or work for?
- What does a good week of work look like for me?

HOW I WORK (4 questions)
- What tools do I use every day and how?
- Walk me through how I start a typical task from zero to done.
- What does my review/editing/QA process look like?
- When I hand something off, what does "done" look like?

WHAT GOOD LOOKS LIKE (4 questions)
- Show me or describe the best output you've produced recently.
  What made it good?
- What separates great work from average work in your field?
- When you look at someone else's work and think "this is good,"
  what are you reacting to?
- If I had to judge your work, what should I be looking for?

WHAT YOU HATE (4 questions)
- What's an example of bad work in your field? What makes it bad?
- What patterns, shortcuts, or habits in your industry make you cringe?
- When Claude writes something for you and it's wrong, what's usually off?

YOUR RULES (3 questions)
- What do you never do in your work? Hard lines you won't cross.
- What are the 2-3 non-negotiables that every piece of your work must have?

YOUR OPINIONS (3 questions)
- What do you believe about your field that most of your peers
  would push back on?
- What tools, methods, or trends do you think are overrated?
  What's underrated?

## Output format

After the interview, compile everything into a single markdown file.
Do NOT save raw Q&A transcripts. Extract the patterns from my answers
and write them as condensed prose and bullet points.

Structure:

# ABOUT ME: [My Name]

## Who I am
[2-3 sentences. My role, my work, my audience/clients.]

## How I work
[My daily tools, my process, how I start tasks, how I review, what
"done" looks like.]

## What good looks like
[What I value in my own work and others'. Condensed from examples I gave.]

## What I hate
[Patterns, shortcuts, and mistakes that bother me. Specific, not vague.]

## My rules
[Numbered list. Hard lines and non-negotiables.]

## Instructions for Claude
[10 numbered rules for how to work with me. Focus on what Claude must DO
and NOT DO, not abstract principles.]

Target: under 2,000 tokens total. Every sentence should carry signal.

Save the file as about-me.md in my ABOUT ME/ folder.
```

#### File #2 — anti-ai-writing-style

> You hate AI writing. I hate AI writing.

Your taste, as a set of rules. The words you hate. The sentence patterns that make you cringe. The formatting rules you care about.

Mine bans 80+ AI words (delve, harness, tapestry, the usual suspects), kills reframe patterns ("this isn't X, this is Y"), and limits paragraphs to 3 sentences.

You don't need to copy mine. But you need *something* here. Without it, Claude writes like Claude. With it, Claude writes like you.

#### File #3 — my-company

> Your targets. Your strategy. What you're focused on. What you're saying no to.

Mine has my audience targets per platform (1M Substack subs, 1M LinkedIn followers), my consulting service lines, and a "what I'm saying no to" section.

Update when something actually changes. Maybe once a quarter.

Prompt (same Cowork session, after about-me):

```
You are building my my-company.md file for my Cowork folder. This file
tells Claude what I'm working toward right now so it can make better
decisions on every task.

Important: my about-me.md already covers who I am, how I work, and my
standards. This file is ONLY about goals, strategy, and decisions. No overlap.

Your job: interview me using AskUserQuestion (6-8 questions), then compile
the answers into a condensed my-company.md under 1,000 tokens.

GOALS (3-4 questions)
- What are your top 2-3 goals for this year? Specific numbers or milestones.
- What platforms, channels, or markets matter most right now?
- What's the one metric that would tell you this year was a success?
- Do you have revenue targets, audience targets, or product milestones?

DECISIONS (3-4 questions)
- What are you actively saying no to right now?
- What did you recently stop doing? Why?
- Where are you spending most of your time and energy this quarter?
- Is there anything you're betting on that most people in your field aren't?

Structure:

# MY COMPANY

## Goals
[Specific targets with numbers where possible.]

## Focus right now
[What I'm spending time and energy on this quarter. 2-3 bullets max.]

## Saying no to
[Things I'm actively declining or ignoring.]

Target: under 1,000 tokens. Update when priorities change, not on a schedule.

Save the file as my-company.md in my ABOUT ME/ folder.
```

### Step 2: The OUTPUTS folder

This is where Cowork saves its work. One subfolder per project. Cowork organizes everything itself.

When you need to reference a past deliverable, say:

**"Read the report in OUTPUTS/project-name."**

### Step 3: The TEMPLATES folder

Cowork fills this folder automatically. You don't organize it.

---

## II - Global Instructions

Your folder is not as good without global instructions.

> Global Instructions is a prompt that Cowork always reads before any task.

Go to: **Settings → Cowork → Edit Global Instructions**.

Paste this and adjust file descriptions to match yours:

```
I usually start my Cowork session by pointing you to my Cowork folder.

Before any and every single task, you must read every file in ABOUT ME/:

- about-me: it's me, who I am, what I love and hate
- anti-ai-writing-style: I hate how Claude writes, unless you write and
  then audit it against my anti-ai-writing-style file.
- my-company: where I work, my role.

Never read the folders OUTPUTS/ or TEMPLATES/ unless I specifically
point you to a file.

Save all deliverables in OUTPUTS/ under a subfolder named after the project.

If the brief is unclear, use AskUserQuestion. Don't fill gaps with filler.
Don't over-explain. Deliver the work.
```

**Why this matters:** Cowork reads ABOUT ME files before every single task. If they're small (under 6,000 tokens total), it reads them completely. Every session. You never re-explain who you are.

If your files are too big, Cowork starts summarizing them loosely instead of reading carefully. Keep them lean.

### How templates work with global instructions

When Cowork builds something you like (a report, an email, a brief), say one sentence at the end of your session:

**"Save this as a template in TEMPLATES/."**

Claude strips the content, keeps the skeleton (sections, order, format, length), and saves it. Next time, say "use the template in TEMPLATES/[name]" and Cowork follows the structure.

---

## III - Your Cowork has a bottleneck. It's you.

Typical Cowork session:

1. You type a prompt. 30 seconds.
2. Cowork reads files, generates a plan, asks clarifying questions. ~30 seconds.
3. You answer the questions. Custom answers take 60 seconds each. Across 8 questions, that's 8-15 minutes of YOU being slow.

Cowork can read 100,000 words in 15 seconds. You type at 60 words per minute. You speak at 150 words per minute.

### How to set up Wispr Flow

**Wispr Flow** is a dictation tool. Hold a key, talk, release. Your words appear wherever your cursor is.

Wispr Flow + Cowork is the perfect match. You steer the conversation in flow state.

Instead of typing "I need a LinkedIn post," you talk: "I recently found out about... and I want to share more about... but first I need to make sure that... so maybe we should start covering... and end up with..."

**The initial prompt: I speak it.** Wispr types it. The point isn't speed — talking gives much more context. The more context, the better.

**AskUserQuestion answers: spoken.** Cowork generates a form. Most options I click. When I need context ("make it more direct, she's a CEO who hates fluff, and reference the ROI data from the last call"), I dictate.

**Feedback and pivots: spoken.** I used to type "Tone is wrong. Make it less formal." Now I say: "The tone is too stiff. I want it to sound like I'm texting a friend who happens to run a 200-person company. Keep the data but make it casual. Only redo section 2."

### How to download Wispr Flow

1. Go to wispr.ai. Download Wispr Flow. Install.
2. Free tier capped at 2,000 words/week.
3. Choose your favorite keystroke (mine is Shift).
4. Go to any app, hold your keystroke, talk.

---

## IV - How to save credits in Cowork

The $20 plan gives you credits (tokens). You'll use them fast.

### 1. Restart your conversation. Don't send a follow-up.

Claude doesn't count messages. It counts tokens. Every message re-reads the entire conversation history. Message 30 costs 31x more tokens than message 1.

When Cowork gets something wrong, don't type "No, I meant..." and send another message. **Click "Restart the conversation from here"** on a previous message.

Biggest hack.

### 2. Start a fresh session every 20 messages.

One developer tracked his usage: 98.5% of tokens were spent re-reading history. Only 1.5% went to actual output.

When a session gets long: ask Claude to summarize everything, copy it, start a new session, paste the summary as your first message.

### 3. Batch tasks into one message.

Three separate prompts = three full context reloads. One prompt with three tasks = one reload.

Instead of: "Summarize this article" → "List the main points" → "Suggest a headline"

Write: "Summarize this article, list the main points, and suggest a headline."

### 4. Use Sonnet (not Opus) for quick tasks.

Grammar checks, brainstorming, formatting, short answers. Sonnet handles these at a fraction of the cost. Haiku is even cheaper.

Save Opus + Extended thinking for work that actually needs it.

### 5. Keep ABOUT ME files small.

Cowork reads your folder before every task. Bloated files = thousands of tokens burned before any real work.

My about-me.md used to be 22,000 tokens. Now under 2,000.

### 6. Spread your work across the day.

Claude uses a rolling 5-hour window. If you burn your entire limit in one morning session, most of your daily capacity goes unused.

Split into 2-3 sessions: morning, afternoon, evening. Avoid peak hours (5-11 AM Pacific weekdays).

---

## V - Your first 20 minutes with Claude Cowork

### Minutes 0-5: Set up the folder.

Download the Claude desktop app. Get the paid plan ($20 or $100).

Create the folder structure: ABOUT ME/ with your 3 files, plus empty OUTPUTS/ and TEMPLATES/ folders.

- **about-me file:** Open a Cowork session, ask it to interview you, dictate answers. Then ask it to condense everything to under 2 pages.
- **anti-ai-writing-style file:** Write the words and patterns you hate.
- **my-company file:** Your targets, platforms, strategy. What you're saying no to.

### Minutes 5-6: Paste global instructions.

Settings > Cowork > Edit Global Instructions. Delete whatever's there. Paste the version above. Adjust file names if yours differ.

### Minutes 6-8: Install Wispr Flow.

wispr.ai. Download. Install. Select favorite keystroke. Test in Cowork.

### Minutes 8-15: Run your first voice session.

Open Cowork. Speak a task: "I want you to read my folder and help me write [something you actually need this week]. Ask me questions before you start."

Answer the questions by speaking. Let Cowork build it. Review.

### Minutes 15-20: Feel comfortable with your folder.

Ask Cowork to create a template in TEMPLATES from the conversation. Check each subfolder:

1. ABOUT ME — all your files explaining who you are.
2. OUTPUTS — just for Cowork outputs.
3. TEMPLATES — where templates are saved.

You're a Cowork pro now. In 20 minutes.
