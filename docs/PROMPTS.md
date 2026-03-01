# Prompting Guide for Chocolako

A practical guide to asking Claude to update your Innergy by Chocolako website.

---

## The Basics

**Claude Code is Claude that can do things, not just talk about them.**

- Regular Claude: You describe what you want, Claude explains how
- Claude Code: You describe what you want, Claude actually does it

You don't need to know code. You describe what you want in plain English. Claude figures out the technical stuff.

---

## The Golden Rule

**Describe what you want, not how to do it.**

| Instead of this... | Say this... |
|-------------------|-------------|
| "Edit the MDX file and change the date field" | "Change the Egypt retreat dates to April 15-22, 2026" |
| "Add a new testimonial object to the array" | "Add a testimonial from Sarah, a CEO, who said..." |
| "Update the hero section h1 tag" | "Change the main headline to say..." |

You describe the **outcome**. Claude handles the **how**.

---

## Your Most Common Tasks

### Adding a New Testimonial

```
Add a new testimonial to the website:

Name: Dr. Maya Johnson
Title: Founder & CEO
Quote: "I came to Chocolako running on fumes and calling it leadership.
I left with a nervous system that could finally register safety.
That shifted everything."
```

### Updating Retreat Dates

```
Update the Egypt retreat:
- New dates: April 15-22, 2026
- Location stays the same
- Update any "coming soon" text to show the new dates
```

### Adding a New Retreat

```
Add a new retreat to the site:

Location: Costa Rica
Dates: March 10-17, 2027
Title: "Jungle Immersion"
Description: A 7-day embodiment experience in the Costa Rican rainforest...
Price: $4,500

Put it in the Retreats section with the others.
```

### Changing Text/Copy

```
On the homepage hero section, change the subhead from:

"High performance taught you to override your nervous system."

to:

"Success taught you to silence your body. Now it's time to listen."
```

### Updating Your Bio

```
In my bio section, add this new credential after "E-RYT 500":

"Certified Somatic Experiencing Practitioner"

Keep everything else the same.
```

### Adding a New Training Date

```
Add a new Womb Wisdom YTT cohort:

Location: Portugal
Dates: May 5-19, 2027
Keep all the other program details the same as the existing YTT pages.
```

---

## Prompt Patterns That Work

### 1. Be Specific About What You Want

**Vague (Claude will ask follow-up questions):**
```
Update the retreats section
```

**Specific (Claude can act immediately):**
```
Add the Kenya November 2026 retreat to the retreats section.
Dates are November 8-15, 2026. Price is $5,200.
```

### 2. Give Context When Helpful

```
I'm updating the site for Q2 2026.

The Egypt retreat is now sold out - change the CTA from "Reserve Your Spot"
to "Join Waitlist" and add text that says "Sold Out - Waitlist Open"
```

### 3. Reference What Exists

```
Look at how the Bali retreat is formatted on the site.
Create a new Morocco retreat page using the same structure but with this info:
[your Morocco details]
```

### 4. One Thing at a Time (Usually Better)

Instead of:
```
Update the Egypt dates, add a new testimonial, change the hero image,
fix the footer link, and add the new SFI cohort dates
```

Try:
```
Let's update the Egypt retreat dates to April 15-22, 2026
```

Then after that's done:
```
Now add a new testimonial from [name]...
```

Small steps = fewer mistakes = easier to catch issues.

---

## When Things Go Wrong

### Claude Made a Change You Didn't Want

Say:
```
Undo that last change. I only wanted you to change [X],
not [Y]. Please restore [Y] and only change [X].
```

### You're Confused About What Happened

Say:
```
I'm confused. Can you explain what you just changed in simple terms?
Show me what the content looked like before and after.
```

### Something Looks Broken

Say:
```
Something looks wrong on the homepage - the testimonials section
is showing [describe what you see]. Can you check what's happening
and fix it? It should show [what you expected].
```

### You Want to Start Over

Say:
```
Let's undo everything from this session and start fresh.
I want to go back to how the site was before we started today.
```

---

## Asking Claude to Show You Things

### See What Content Exists

```
Show me all the retreats currently listed on the site with their dates.
```

### Check Before Changing

```
Before you make any changes, show me the current hero section text
so I can confirm what we're updating.
```

### Preview Changes

```
Don't make any changes yet - just show me what the new testimonial
would look like with the formatting we use.
```

---

## Starting a New Session

Claude doesn't remember previous conversations. When you start fresh, give context:

```
I'm coming back to work on my Innergy by Chocolako website.

First, can you look at the current state of the site and tell me:
1. What retreats are listed and their dates
2. What the homepage looks like
3. If there are any issues I should know about

Then I want to [describe what you want to do today].
```

---

## Tips for Better Results

1. **Be specific** - "Change X to Y" is better than "update X"

2. **One task at a time** - Easier to catch mistakes, easier to undo

3. **Describe outcomes, not steps** - You say what, Claude figures out how

4. **Give examples when helpful** - "Format it like the Egypt retreat page"

5. **Ask Claude to confirm before acting** - "Show me the plan before making changes"

6. **Keep it simple** - If you're not sure how to ask, just describe what you want in plain English

---

## Quick Reference

| What you want | How to ask |
|--------------|------------|
| Add testimonial | "Add a testimonial from [name], [title], who said: '[quote]'" |
| Change dates | "Change the [event] dates to [new dates]" |
| Update text | "Change '[old text]' to '[new text]'" |
| Add new retreat | "Add a new retreat: [location], [dates], [price]" |
| Remove something | "Remove the [thing] from [location]" |
| Check status | "Show me all [things] currently on the site" |
| Undo | "Undo the last change" |
| Start session | "I'm back to work on my site. Show me the current state." |

---

## Remember

- You don't need to know code
- Describe what you want to see, not how to do it
- When in doubt, ask Claude to explain or confirm before acting
- Small changes are easier than big ones
- It's always okay to say "undo" or "go back"

You've got this.

---

*Last updated: 2026-03-01*
