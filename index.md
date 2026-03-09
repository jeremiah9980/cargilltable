---
title: Cargill Family Communication Analysis Framework
description: Family-first communication analysis model, dataset schema, prompts, and governance for cross-platform AI review.
---

<link rel="stylesheet" href="assets/style.css">

# Cargill Family Communication Analysis Framework

A structured, family-first framework for analyzing communication patterns involving the children, co-parenting coordination, extended family influence, and outside-party involvement.

This project was designed to keep the **children as the priority**, define **who sits at the table**, and ensure the same communication dataset can be analyzed consistently by:

- **OpenAI — ChatGPT**
- **X — Grok**
- **Google — Gemini**

---

## 1. Project purpose

This framework exists to:

- normalize communications from multiple message threads into one consistent dataset
- define a repeatable analysis model across multiple AI platforms
- identify communication patterns, role confusion, escalation, and triangulation
- produce non-biased recommendations centered on the best interest of the children
- document all parameters, prompts, categories, and scoring methods used in the project

---

## 2. Core principle: Family First

The project uses a **Family Table Priority Model**.

The idea is simple:

> The people directly responsible for the children should be the primary people coordinating communication, decisions, and stability around them.

This is not meant to demean anyone. It is meant to improve **clarity, boundaries, and consistency**.

---

## 3. Family Table Priority Model

### Tier 1 — Primary family
People directly responsible for the children and day-to-day parenting decisions.

Examples:
- parent
- step-parent in the household
- the children themselves

**Expected role**
- primary coordination
- parenting communication
- schedule and logistics decisions
- school, health, activity, and welfare coordination

### Tier 2 — Close kin
People connected by blood or close family relation to the family unit.

Examples:
- grandparent
- aunt
- uncle
- sibling
- cousin
- long-term integrated family support person

**Expected role**
- supportive
- advisory
- not primary decision-making over the children

### Tier 3 — No blood or family tie
People with no direct family tie to the family unit.

Examples:
- friend
- acquaintance
- unrelated adult
- outside third party

**Expected role**
- minimal influence on parenting communication
- should not shape decisions involving the children

---

## 4. Main project questions

The framework asks all AI platforms to analyze the same dataset using the same questions.

### Relationship role analysis
- Who belongs in Tier 1, Tier 2, or Tier 3?
- Does the classification align with how they are functioning in the communications?

### Influence analysis
- Who appears to influence decisions, narratives, or conflict?
- Does their influence match their appropriate role?

### Boundary integrity
- Are outside participants influencing family decisions?
- Are family boundaries clear?

### Triangulation detection
- Is person A communicating about person B through person C instead of directly?
- How frequently does that happen?

### Escalation patterns
- What language patterns increase tension?
- What triggers recurring conflict?

### Role confusion
- Are people operating outside their appropriate lane?

### Child impact assessment
- What communication patterns create instability, confusion, stress, or divided loyalties for the children?

---

## 5. Defined parameters

This project uses the following parameters.

### A. Dataset parameters

#### Participants
- `participant_id`
- `display_name`
- `role`
- `relationship_to_children`
- `family_tier`
- `notes`

#### Conversations
- `conversation_id`
- `conversation_type`
- `title`
- `participants`
- `start_date`
- `end_date`
- `source`
- `children_related`
- `notes`

#### Messages
- `message_id`
- `conversation_id`
- `timestamp`
- `sender_id`
- `recipient_ids`
- `message_text`
- `message_type`
- `source_file`
- `page_or_image_ref`
- `reply_to_message_id`
- `topic_tags`
- `mentions_child`
- `emotional_tone`
- `conflict_flag`
- `logistics_flag`
- `redaction_flag`

#### Incidents
- `incident_id`
- `date_range_start`
- `date_range_end`
- `incident_type`
- `summary`
- `related_conversation_ids`
- `related_message_ids`
- `children_impacted`
- `severity_level`
- `notes`

---

### B. Communication analysis parameters

#### Role clarity
Whether each participant is functioning within an appropriate family role.

#### Family tier alignment
Whether the participant's communication influence matches their table position.

#### Boundary respect
Whether outside influence remains limited and appropriate.

#### Communication transparency
Whether key communication is shared directly with the people responsible for the children.

#### Fragmentation
Whether important information is scattered across multiple side threads.

#### Misinterpretation risk
Likelihood that text-only communication creates confusion about tone or intent.

#### Triangulation risk
Likelihood that one person relays conflict or decisions indirectly through others.

#### Escalation risk
Likelihood that communication turns accusatory, defensive, passive-aggressive, or unstable.

#### Child-centeredness
Degree to which communication remains focused on child well-being instead of adult conflict.

#### Logistics clarity
How clearly schedules, pickups, school issues, and responsibilities are stated.

#### Overall communication health
Summary judgment on whether the system is stable, direct, respectful, and child-focused.

---

## 6. Scoring model

Each AI platform is asked to score these categories from **1 to 10**.

- clarity of roles
- boundary respect
- communication transparency
- escalation control
- child-centered communication
- fragmentation risk
- triangulation risk
- logistics clarity
- overall communication health
- family table alignment

### Score meaning
- **1–2** = severe dysfunction or major misalignment
- **3–4** = substantial concerns
- **5–6** = mixed or unstable
- **7–8** = mostly healthy with room to improve
- **9–10** = strongly aligned and healthy

---

## 7. Standard prompt design

Every platform receives the same core analysis prompt with the same packet.

### Prompt objectives
- do not take sides
- do not make legal conclusions
- identify facts, patterns, and interpretations separately
- focus on non-biased recommendations
- prioritize the children

See the prompt file in `templates/standard_prompt.txt`.

---

## 8. Expected outputs

Each platform should return:

1. Executive summary  
2. Key patterns  
3. Escalation triggers  
4. Child impact risks  
5. Top 5 communication issues  
6. Score breakdown  
7. Recommendations  
8. Suggested communication protocol  

This keeps outputs comparable across platforms.

---

## 9. Suggested source groups

The framework was designed to ingest source threads such as:

- Jesica, Deanna, Jere
- Jere, Deanna
- Jesica, Deanna
- Jesica, Stephanie
- Jesica, Sharon
- AppClose export

These can remain separate at the source level while still being merged into one normalized dataset.

---

## 10. Project governance rules

To preserve fairness:

- use the same cleaned data across all platforms
- use the same names, IDs, and labels
- use the same prompt
- use the same scoring instructions
- redact sensitive details consistently
- avoid adding side commentary to one platform and not the others

---

## 11. Privacy and caution

This framework is for structured analysis and communication improvement. It should not be treated as legal advice, mental health diagnosis, or a substitute for family counseling, mediation, or court guidance.

---

## 12. Repository files

### Templates
- `templates/participants_master.csv`
- `templates/conversations_master.csv`
- `templates/messages_master.csv`
- `templates/incidents_master.csv`
- `templates/packet_common.json`
- `templates/standard_prompt.txt`
- `templates/scoring_instructions.txt`
- `templates/output_template.md`

### Web files
- `index.md`
- `README.md`
- `_config.yml`
- `assets/style.css`

---

## 13. Quick start

1. Populate the CSV templates with the exported message data  
2. Convert the normalized data into `packet_common.json`  
3. Submit the same prompt and packet to ChatGPT, Grok, and Gemini  
4. Save results using `output_template.md`  
5. Compare scores and recommendations across all three platforms

---

## 14. Maintainer note

This project is built around one central standard:

**Family first. The children are the priority. Everyone should understand their role, their influence, and where they sit at the table.**
