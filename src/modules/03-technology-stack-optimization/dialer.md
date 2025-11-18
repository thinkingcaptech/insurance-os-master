---
title: "Dialer"
module: "03 Technology Stack Optimization"
layout: insurance-os
tags: ["module-section"]
status: "draft"
lastUpdated: "2025-11-17"
permalink: "/insurance-os/technology/dialer/"
---

# Dialer

## Summary
- Power dialers favored over predictive for quality and compliance.
- Key features: DNC scrubbing, consent logging, time-zone filters, call recording, local presence.

## Key Benchmarks
- Mojo: ~$149/user (triple line) + add-ons.
- PhoneBurner: $140–$183/user (annual) with CRM/automation/AI notes.
- MightyCall: $30/user (Power) with preview/progressive; predictive on Enterprise.

## Compliance Notes
- One-to-one consent; store proof; avoid non-compliant purchased lists.
- Enforce 8a–9p recipient time; record calls where required (Medicare/ACA 10-year).
- Integrate with central DNC/consent store; honor STOP across channels.

## Scripts/Processes
- Dialer config: time-zone lock, DNC scrub, recording on, voicemail drops compliant.
- Lead routing: round-robin or skills-based; SLA for fresh leads (<5 min).
- Quality review: call monitoring/QA; AI note-taking where allowed.

## Action Plan
- Select power dialer aligned with CRM/AMS (native or integrated).
- Connect to consent/DNC database; test scrubbing and recording.
- Train agents on scripts, compliance prompts, and dispositioning; monitor abandon rates (if progressive/predictive used).
