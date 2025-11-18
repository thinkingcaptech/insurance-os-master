---
title: "Component: Compliant Dialer"
layout: "insurance-os.njk"
eleventyNavigation:
  key: "Compliant Dialer"
  parent: "Technology Stack Optimization"
  order: 2
---

# Component: Compliant Dialer

## 1.0 Strategic Mandate

The dialer is the engine of the agency's sales floor. In the 2025 landscape, the most important feature is not speed, but **compliance**. The use of a non-compliant dialer is an existential TCPA risk.

All agents (1099 and W2) **must** use the agency-provided, vetted, and compliant dialer as a condition of their contract. This is the only way to manage the agency's vicarious liability and prevent catastrophic TCPA/CMS violations from personal, unrecorded devices.

## 2.0 Core Functional Requirements

| Requirement | Purpose & Justification |
| :--- | :--- |
| **1. TCPA Compliance Features** | Must include built-in safeguards, including: &lt;br&gt; - **Time-Zone-Aware Dialing:** Automatically prevents calls before 8 a.m. and after 9 p.m. *in the lead's local time zone*. &lt;br&gt; - **DNC Scrubbing:** Automatically scrubs all lists against the National DNC Registry. &lt;br&gt; - **Global Opt-Out:** Must instantly honor opt-outs from the CRM. |
| **2. Universal Call Recording (CMS)** | **This is non-negotiable.** The dialer **must** record 100% of all inbound and outbound calls. These recordings must be automatically pushed and saved to the lead's record in the CRM. This is the only defense for the CMS 10-year recording mandate. |
| **3. CRM Integration** | Must have deep, native integration with the CRM. Agents should *never* have to manually log a call. &lt;br&gt; - **Click-to-Call:** Initiate call from the CRM lead record. &lt;br&gt; - **Screen Pops:** Show the lead's CRM record on inbound/outbound calls. &lt;br&gt; - **Auto-Logging:** Automatically log call time, duration, outcome, and recording to the CRM record. |
| **4. Compliant SMS** | The dialer's SMS/texting platform must also be TCPA-compliant, with clear identification and opt-out management that syncs to the CRM. |
| **5. Call Monitoring** | Must allow managers to listen-in, whisper-coach, and barge-in on live agent calls for real-time training and quality assurance. |