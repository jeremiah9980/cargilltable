---
title: Submission Guide
description: Step-by-step instructions for submitting the dataset to ChatGPT, Grok, and Gemini and collecting analysis results.
---

<link rel="stylesheet" href="assets/style.css">

# Step-by-Step Submission Guide

This page explains how to submit the same dataset to each AI platform and collect the results in a consistent way.

The goal is to keep the process as close to apples-to-apples as possible.

---

## What you need before submitting

Make sure these files are prepared first:

- `templates/packet_common.json`
- `templates/standard_prompt.txt`
- `templates/scoring_instructions.txt`
- `templates/output_template.md`

Also make sure your normalized CSV files are complete:

- `templates/participants_master.csv`
- `templates/conversations_master.csv`
- `templates/messages_master.csv`
- `templates/incidents_master.csv`

---

## Recommended workflow

### Step 1 — Fill in the dataset
Populate the CSV template files with the communication data you want analyzed.

### Step 2 — Build the JSON packet
Move the same structured data into `packet_common.json`.

This packet should include:
- dataset metadata
- participants
- conversations
- messages
- incidents

### Step 3 — Freeze the dataset version
Assign a version label such as:
- `v1.0`
- `v1.1`
- `2026-03-09-review1`

Use the exact same dataset version for all three platforms.

### Step 4 — Use the same prompt everywhere
Copy the contents of:
- `standard_prompt.txt`
- `scoring_instructions.txt`

Use the same wording for all three platforms.

### Step 5 — Submit the same packet to each AI
Submit the same `packet_common.json` to:
- ChatGPT
- Grok
- Gemini

### Step 6 — Save results into the same format
Paste each platform's answer into a separate output file based on `output_template.md`.

### Step 7 — Compare outputs
Review similarities and differences across:
- risk scoring
- role classifications
- triangulation findings
- recommendations
- communication protocol suggestions

---

## How to submit to ChatGPT

### Option A — Paste directly
1. Open ChatGPT
2. Start a new chat
3. Paste the full text from `standard_prompt.txt`
4. Paste the full text from `scoring_instructions.txt`
5. Paste the JSON from `packet_common.json`
6. Send the request

### Option B — Upload files
1. Open ChatGPT
2. Start a new chat
3. Upload:
   - `packet_common.json`
   - `standard_prompt.txt`
   - `scoring_instructions.txt`
4. In the message box, say:

> Analyze the uploaded dataset using the uploaded prompt and scoring instructions. Return the output in the structure defined by the project.

### What to save
Save the response into:
- `outputs/chatgpt_output.md`

---

## How to submit to Grok

### Suggested process
1. Open Grok
2. Start a new conversation
3. Paste the full standard prompt
4. Paste the scoring instructions
5. Paste the JSON packet
6. Ask Grok to return the analysis in the same structured format

### Suggested submission message
> Analyze the following family communication dataset using the Family Table Priority Model. Use the exact scoring structure provided and return the output in the same section order for comparison with other AI platforms.

### What to save
Save the response into:
- `outputs/grok_output.md`

---

## How to submit to Gemini

### Suggested process
1. Open Gemini
2. Start a new conversation
3. Paste the standard prompt
4. Paste the scoring instructions
5. Paste the JSON packet
6. Request the final answer in the project output structure

### Suggested submission message
> Please analyze this dataset using the attached Family Table Priority Model prompt and scoring criteria. Keep the analysis neutral, child-centered, and structured for cross-platform comparison.

### What to save
Save the response into:
- `outputs/gemini_output.md`

---

## Best practices for consistent submissions

To make results more comparable:
- use the same dataset version on all three platforms
- do not change names, IDs, or thread labels between runs
- do not add extra explanation to only one platform
- submit the same prompt text in the same order
- save raw outputs before editing or summarizing them
- note the date and time of each run

---

## Recommended output folder

Create a folder called `outputs/` in the repository and store:
- `chatgpt_output.md`
- `grok_output.md`
- `gemini_output.md`

Optionally add:
- `comparison_notes.md`
- `score_comparison.csv`

---

## Suggested metadata to record for each run

For each platform, note:
- platform name
- date run
- time run
- dataset version
- prompt version
- whether the JSON was pasted or uploaded
- any response limits or truncation issues

Example:

```text
Platform: ChatGPT
Date: 2026-03-09
Time: 9:40 PM CT
Dataset version: v1.0
Prompt version: v1.0
Submission type: pasted JSON
Notes: full response returned
```

---

## Quality control checklist

Before comparing outputs, confirm:
- all three platforms used the same packet
- all three platforms used the same scoring criteria
- all three platforms returned all major sections
- no platform had missing messages due to size limits
- no platform was given extra context not provided to the others

---

## Troubleshooting

### If the dataset is too large
Break it into batches, but keep the batches identical across platforms.

Example:
- Batch 1 = Jan–Mar
- Batch 2 = Apr–Jun
- Batch 3 = Jul–Sep

Then compare each batch separately.

### If a platform truncates the answer
Ask it to continue from the last completed section, then combine the output carefully and document that it required multiple responses.

### If results look very different
Check:
- whether the same dataset version was used
- whether a name or label changed
- whether one platform was given extra explanation
- whether a platform missed part of the JSON

---

## Simple collection process

1. Run ChatGPT and save output  
2. Run Grok and save output  
3. Run Gemini and save output  
4. Put all three responses side by side  
5. Compare scores, themes, and recommendations  
6. Create one summary document noting:
   - overlap between platforms
   - differences between platforms
   - strongest repeated concerns
   - strongest repeated recommendations

---

## Recommended comparison questions

After all three outputs are saved, compare:
- Which issues were identified by all three platforms?
- Which platform scored the highest risk?
- Which platform gave the clearest child-centered recommendations?
- Did all three agree on triangulation or role confusion?
- What recommendations appeared consistently across all three?

---

## Final note

The value of this project comes from consistency.

The more standardized the data, prompt, and output structure are, the more credible the cross-platform comparison becomes.
