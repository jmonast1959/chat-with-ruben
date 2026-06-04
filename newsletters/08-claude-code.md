# Claude Code

**Author:** Ruben Hassid
**Published:** March 19, 2026
**Source:** https://ruben.substack.com/p/claude-code

> How to set up Claude Code (without coding).

---

You *finally* use Claude over ChatGPT. Recently, you've been abusing Claude Cowork. And you successfully created Claude Projects for your team. But you keep hearing about another Claude changing the world: Claude Code.

**The entire Claude product line:**

1. **Chat** → like ChatGPT. A chatbot.
2. **Project** → still Claude Chat, but separated as individual Projects.
3. **Cowork** → think Google Drive + Claude Project have a baby. Unbeatable.
4. **Code** → massive revolution for developers to code much faster.

Claude Code used to be reserved for developers. But something changed in January this year.

---

## Forget coding. English is the new code.

Quick reminder for setup:

1. Go to claude.com/download. Download the app.
2. Pro account ($20/month).
3. Open the app. Click the **Code** tab at the top next to Chat & Cowork.
4. Select a folder.

You're not a developer. Why use Claude Code?

- Create professional websites with prompts (= English).
- Build personalized training from any piece of content.
- Generate interactive dashboards like a data analyst.

The code is pushed to a website, live for everyone to visit. For this, connect Claude Code to a free GitHub account.

### Step 1: Create a free GitHub account.

GitHub is where your website's code lives online. Think of it as Google Drive for code. Free plan is enough.

Go to **github.com**. Click **Sign up**. Add email. Pick username. Create password. Done.

### Step 2: Link your GitHub to Claude Code.

1. Go to your Claude desktop app.
2. Click your **Settings** → **Connectors**.
3. **Browse connectors** → Search **GitHub** → **Connect**.

### Step 3: Code, but without code. Just type words.

1. Go to Claude Code.
2. Use **Opus 4.6** + **Auto accept edits**.
3. Make sure GitHub is connected.
4. Type a prompt that says what you want, for what, with an example.

Favorite prompt template:

```
Create a GitHub repo named "mediakit-website".

I do not know how to code and don't want to learn. Code everything
for me. Do not ask for permissions (or as little as possible).

Follow these instructions:

1. I want to [goal] for [success criteria].
2. Here's an example [attached].
3. [Steps to follow].
```

### Step 4: Accept everything. Check the live website. Edit infinitely.

Claude Code keeps asking for permissions even with "Auto accept edits" enabled.

**Endless feedback loop:**

1. Check the live website (ask "I need a link now so anyone can access it").
2. Note all problems you see when navigating.
3. Follow up with a numbered list of issues.
4. Claude Code fixes one by one.
5. Refresh the live website. Repeat.

Good way to start vibecoding. But there's a magical way to code 100x faster.

---

## Code 100x faster (skip permissions)

The limitation: permissions. Every time Claude wants to edit a file, create a file, or run a command, a popup appears: "Do you want to allow this?"

For one small website, you'll click "Allow" 20+ times.

The only way to bypass is to follow these steps.

### Step 1: Download VS Code. It's free.

Go to **code.visualstudio.com**. Download. Install.

VS Code is what developers use to write code. You won't write code in it. Claude will, for you.

### Step 2: Install the Claude extension.

Open VS Code. Click **Extensions** icon on left sidebar (4 small squares). Search **"Claude"** by Anthropic. Click **Install**.

Sign in with your Anthropic account.

### Step 3: Go to Claude's settings inside VS Code.

Find **"Skip Permissions"**. Turn it on. Set it and forget it.

Open a new session, make sure **"Bypass permissions"** is on.

### Step 4: Vibecode, faster than ever.

Type your prompt. Claude reads your files, writes code, creates new files, runs commands. Zero interruptions. Go do something else and come back.

There is no going back after this.

---

## The best way to prompt Claude Code

### Start with a screenshot.

Found a website you like? Screenshot it. Drag the image into Claude Code. Type: *"Build me something that looks like this, but for [your project]."*

Way faster than describing in words.

### Describe the end result. Never the steps.

Bad: "Create an HTML file, add a CSS stylesheet, use flexbox for layout..."

Good: "I want a clean landing page for my consulting business. Big headline, 4 services listed, a booking link, footer with my socials."

You're the project manager. Claude is the developer. Give the brief.

### Point Claude to your files.

Have an about-me.md or brand guidelines? Tell Claude: *"Read the files in my folder first. Use my tone and style for the website copy."*

### One thing at a time.

Don't dump 12 features in one prompt. Start with the homepage. Get it right. Then add the contact page. Then the blog section. One deliverable per prompt.

### When something looks off, screenshot it.

See a visual bug? Screenshot it. Paste into Claude Code. Type: *"This section overlaps on mobile. Fix it."*

10 seconds instead of a paragraph of explanation.

---

## Your Claude Code needs a brain

Every time you open Claude Code on a project, it starts from zero. It doesn't remember what you built yesterday. The fix: one prompt, one time.

After your first session on any project, paste:

```
Create a CLAUDE.md file in the root of this project. Inside it, write
down everything you've learned about this project so far. Here are
examples, but not limited to this: the folder structure, what each file
does, the design choices I made (fonts, colors, layout), my preferences,
and what pages or sections exist.
```

Claude creates a **CLAUDE.md** memory file. It writes down your preferences, past decisions, structure, style.

Close the app. Come back 3 days later. Open the same folder. Claude reads CLAUDE.md first. It already knows what your website looks like, what fonts you picked, which pages exist, your last edits.

Say *"Add a blog section"* and Claude builds it in the exact same style.

---

## Where Claude Code falls short

**1. It burns usage. Fast.** One Code session eats what would be 20+ regular Claude chats. On the $20/month Pro plan you'll feel the cap within a week. I'm on Max ($100/month) because of this.

**2. You can't review the code.** When Claude writes code, you're trusting it. Workaround: test the actual website. Click every button. Check on your phone. Your eyes are your code review.

**3. It sometimes loops.** Claude hits a bug, tries to fix it, creates a new bug, spirals. When the same error appears twice, type: *"Stop. Explain what's going wrong. Give me 2 different approaches."*

**4. The desktop Code tab is limited.** VS Code gives you auto-accept, better file browsing, faster workflow. Skip the desktop tab once you're comfortable.

**5. Design taste is average.** Claude builds functional websites. Default design choices look generic. Show screenshots. Specify fonts, spacing, colors. If you say "make it look good," you'll get something that looks like everyone. Bring references.

---

## Your first 30 minutes with Claude Code

### Minutes 0–5: Install and open Claude Code.

Go to claude.com/download. Download. Sign in with Pro account ($20/month; $100 is better). Open the app. Click the **Code** tab.

### Minutes 5–10: Build your context folder.

Create a folder called "Claude-Code." In a context subfolder, create *about-me.md*. Write: (1) what you do; (2) how you communicate; (3) example writing you're proud of.

Pro tip: use Wispr Flow to talk instead of typing.

### Minutes 10–15: Start your first Code conversation.

Click **Add Folder** and select your Claude-Code folder. Select Opus 4.6.

Type: *"I want [task] for [success criteria]. Go through my folder first, and use AskUserQuestion tool so you gather enough content before executing."*

A form appears. Click answers. Let it create your context files.

### Minutes 15–20: Accept everything. Ask for edits.

Accept all permissions. Look at what Claude built. Open the file in your browser.

Type changes specifically: *"Make the headline bigger. Change the background to off-white. Move the button higher."*

Refresh your browser. Keep going.

Pro tip: take another 15 minutes to set up **VS Code + bypass permission**. Truly makes you 100x faster.

### Minutes 20-30: Create a tough deliverable.

Give Claude something real. A landing page for your side project. A personal site you've been putting off. A dashboard your team keeps asking for.

Type: *"Build me [specific thing] with [specific requirements]. Read the files in my folder first."*

Watch it work. Push to GitHub. Open the live link. Send it to someone.
