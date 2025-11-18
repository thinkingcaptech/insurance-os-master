---
title: "Component: LMS"
layout: "insurance-os.njk"
eleventyNavigation:
  key: "LMS (Learning Management System)"
  parent: "Technology Stack Optimization"
  order: 5
---

# Component: LMS (Learning Management System)

## 1.0 Strategic Mandate

The Learning Management System (LMS) is the agency's **single source of truth for training and compliance certification**. In an industry with high agent churn and massive compliance risk, an LMS is essential for standardizing the "one correct way" to operate.

It solves two problems:
1.  **Agent Drift:** It provides a clear, step-by-step path for new agents, moving them from onboarding to production consistently.
2.  **Compliance Defense:** It creates a verifiable, date-stamped record that every agent was trained on, and passed, modules for TCPA, CMS, NAIC, and HIPAA. This is a critical part of an agency's compliance defense.

## 2.0 Core Functional Requirements

| Requirement | Purpose & Justification |
| :--- | :--- |
| **1. Centralized Script Library** | Must house the **master, compliance-approved** versions of all sales scripts (Phone, Text, Objections) from Module 4. Agents must be trained to *only* use scripts from the LMS, ensuring they are not using outdated or non-compliant language. |
| **2. New Agent Onboarding Path** | Must contain the full "30-Day Onboarding" (Module 4) as a structured course. &lt;br&gt; **Action:** An agent's access to leads/dialer is contingent on them completing "Week 1: Scripts, CRM, Roleplay" in the LMS. |
| **3. Compliance Certifications** | Must contain **mandatory annual certification courses** for TCPA, CMS, NAIC, and HIPAA. &lt;br&gt; **Action:** The system must track completion and scores, providing an auditable report for carriers and regulators. Agent access to systems should be contingent on passing these certifications. |
| **4. Call Library (Best Practices)** | The LMS should host a library of "gold standard" call recordings (e.g., "Perfect FE One-Call Close," "Perfect IUL Objection Handling") for agents to review. This connects training directly to real-world application. |
| **5. Tracking & Reporting** | Must provide clear reporting on agent progress, quiz scores, and certification status. |