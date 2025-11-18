---
title: "Component: Quoting Tools"
layout: "insurance-os.njk"
eleventyNavigation:
  key: "Quoting Tools"
  parent: "Technology Stack Optimization"
  order: 4
---

# Component: Quoting Tools

## 1.0 Strategic Mandate

Quoting tools are the agent-facing application for finding the right product at the right price. In a "Compliance-First" model, the mandate is **accuracy and suitability**. The tool must support the agent in making a **defensible, best-interest recommendation**.

These tools should be integrated with the CRM where possible to reduce manual data entry and log the quotes that were presented to the client.

## 2.0 Core Functional Requirements

| Requirement | Purpose & Justification |
| :--- | :--- |
| **1. Multi-Carrier Quoting** | The tool must provide a single interface to quote comparable products across all of the agency's core carriers. This is essential for efficiency and for finding the best price. |
| **2. Health Underwriting Engine** | For FE/MP, the tool must have a "Health Quoter" or "Underwriting Engine." &lt;br&gt; **Action:** The agent inputs the client's medications and health conditions, and the tool identifies which carriers will likely **approve** the client and at what rate class. This prevents declined applications and supports a suitability-first sale. |
| **3. IUL Illustration Tool** | Must provide access to carrier-approved IUL illustration software. &lt;br&gt; **Compliance Mandate:** All illustrations shown to a client **must** be compliant, run at carrier-approved rates, and be signed by the client. A copy of the *exact* illustration shown **must** be saved to the client's record in the CRM as part of the NAIC "Best Interest" documentation. |
| **4. ACA Marketplace Integration** | For ACA, the tool must be an approved "Enhanced Direct Enrollment" (EDE) platform or integrate directly with Healthcare.gov. This allows agents to quote, manage applications, and (critically) **capture and store the 10-Year Consent and Attestation forms** required by CMS. |
| **5. CRM Logging** | Quotes and illustrations should be saved or logged as an activity on the client's CRM record. This provides a clear audit trail of what products and prices were discussed. |