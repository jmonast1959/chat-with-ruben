# Claude Skills

**Author:** Ruben Hassid
**Published:** April 1, 2026
**Source:** https://ruben.substack.com/p/claude-skills

> How to set up Claude the right way (so you actually stop prompting).

---

## AI has different levels

- **Level 1:** Free ChatGPT.
- **Level 2:** Paid ChatGPT + Thinking.
- **Level 3:** Paid Claude chat + Opus + Thinking.
- **Level 4:** Premium Claude + Cowork + Opus.
- **Level 5:** Entire team using Claude Teams with Projects.

Time to level up with **Skills**.

1. Skills live inside Claude or any other AI.
2. It's like a very long context + instructions, living inside the AI.
3. You /command it (like /brief or /linkedin or /contract-x).
4. Skills can be shared with your team and downloaded from libraries.

Why didn't I mention Skills earlier? Because Anthropic made it absurdly technical. Their official guide is written for developers.

I spent days mastering Skills for non-coders. This is the guide I wish existed.

---

## 1 - What's different with Skills?

Context is *how much the AI knows about you/the task before doing it*.

Say you want to write a LinkedIn post. You can either:

**1 - Write a very long prompt that has the context** (who you are, the task, the steps).

**2 - Write a very long text file** that you upload to your favorite AI.

**3 - Put both the long prompt AND the text file inside a Project.** Upload once, start as many chats as you want.

**4 - Skills.** It's all of this, but as a slash command.

Context files need you to say "read my file first" every time. Projects need you to open the right Project. **Skills fire automatically.** Claude recognizes the task from what you type and activates the right Skill on its own. You don't invoke a Skill. *It invokes itself.*

---

## 2 - How to build your first Skill

### Option 1: Claude has a Skill Creator

You describe the task, it interviews you, it generates everything.

**Step 1: Open Cowork. Ask for the skill-creator.**

Select your folder. Opus 4.6 + Extended thinking. Type:

```
Use the skill-creator to help me build a skill for writing LinkedIn posts.
```

**Step 2: Answer the interview.**

Be specific. Be honest. Select Claude's premade answers or answer yourself (better to answer yourself).

**Step 3: It generates everything.**

The skill-creator produces:

1. A folder with the right name (lowercase, hyphens, no spaces).
2. A SKILL.md file with the trigger (/command), description, and your instructions.

Click "Always allow."

**Step 4: Claude runs an evaluation.**

This is the most important step that most people skip. Claude creates an evaluation of your new skill. Take the time to view eval results before downloading for good.

**Step 5: Save and install.**

Settings → Capabilities → Skills → Upload.

The skill appears. You can "Try in chat."

### Option 2: makemyskill.com (free tool)

My consulting team (GPC, in New York) made this free tool: **https://www.makemyskill.com**

Helps build skills faster. Cool addition: searches the web for you before building the skill. Skips the interview part. Faster, more convenient, less control.

1. Go to makemyskill.com.
2. Describe the skill. The longer the better.
3. Download the skill & upload to Claude.

---

## 3 - Access Claude's team skills

You don't have to build everything from scratch. Claude's team makes pre-built Skills.

**Step 1:** Desktop app. Go to Customize > Personal plugins > Browse plugins inside the +.

**Step 2:** Browse plugins. A plugin is a bunch of skills for a task. Click any of them and download.

**Step 3:** You now have new skills to test.

---

## 4 - My 7 favorite Skills hacks (few know)

### 1. The debugging trick.

Your Skill doesn't work when you call it. Ask Claude: *"When would you use the linkedin-post skill?"*

Claude quotes the description back to you, word for word. You instantly see what's missing, what's vague, what's not matching your request.

Fastest fix for any broken Skill.

### 2. Negative triggers matter more than positive ones.

The "Do NOT use for…" line in your description is more important than the "Use when…" line. It prevents your Skill from hijacking conversations it shouldn't touch.

### 3. Skills stack with your voice file.

Your about-me.md tells Claude *who you are*. Your Skill tells Claude *how to do the job*. They fire together.

Your LinkedIn Post Skill doesn't need your voice rules. It handles the structure, hooks, CTA format. Claude already knows your voice from the .md file in your folder. The Skill handles process. The voice file handles tone.

### 4. Build Skills from past conversations.

Don't start from scratch. Past prompts already contain the process. Just package it.

Click on a Cowork chat session > on the name's arrow > turn it into a skill. Claude reverse-engineers the workflow.

### 5. Skills save tokens (= money).

You'd think installing 20 Skills would eat usage. Opposite.

Claude only reads the 3-line header of each Skill at first. Full instructions only load when a task matches. 30 installed Skills barely touch your context window.

Anthropic's own data: a task that took 15 back-and-forth messages and 12,000 tokens *without* a Skill took 2 questions and 6,000 tokens *with* one.

### 6. The "laziness" workaround.

Sometimes Claude cuts corners inside a Skill. Skips a step. Rushes the output.

Don't change the Skill file. Change your *prompt*. Add: *"Take your time. Quality over speed. Don't skip steps."*

Anthropic themselves say this works better in the user prompt than inside the Skill instructions.

### 7. Skills are portable — even outside Claude.

Anthropic published Skills as an open standard. The same SKILL.md file works across platforms. Build a Skill for Claude today; if Gemini or ChatGPT supports the format tomorrow, it transfers.

---

## Where Skills fall short

- **The description is everything.** If you write a bad description, your Skill never fires. Use the debugging trick.
- **Skills can hijack conversations.** Too broad a description and your Skill fires when you don't want it. Add negative boundaries: *"Do NOT use for blog articles, newsletters, emails."*
- **It still needs editing.** A Skill produces a consistent starting point, 80% there. You still review.
- **Usage still burns fast.** Skills don't magically eliminate token usage. Cowork still eats your plan.

---

## Your first 30 minutes with Claude Skills

### Minutes 0–5: Open Cowork. Find the skill-creator.

Open Cowork. Select your Claude folder. Opus 4.6 + Extended thinking. Type:

*"Use the skill-creator to help me build a skill for [your most repeated task]."*

Don't know which task? Pick the one you re-explain the most.

### Minutes 5–15: Answer the interview. Build the Skill.

Answer specifically. "I write reports" is useless. "I write weekly reports that always start with the headline metric, use 3 sections max, and end with next steps as bullet points" is a Skill that works.

It generates your SKILL.md. Review. Ask for changes if anything feels off.

### Minutes 15–20: Install and test.

Save the Skill folder. Upload via Settings → Capabilities → Skills.

Open a new conversation. Type a request that should trigger the Skill. Watch it fire automatically. Compare to before.

### Minutes 20–25: Iterate.

Try 5 different phrasings: "Write a LinkedIn post." "Draft a post for LinkedIn." "I need LinkedIn content about X." Does the Skill fire each time?

Try 2-3 unrelated requests: "Summarize this document." "Draft an email." Does the Skill stay quiet?

If off: *"When would you use this skill?"* Fix the description based on what Claude says back.

### Minutes 25–30: Browse Claude's plugins.

Cowork > Customize > Personal plugins > "+" > Get new skills. Test.
