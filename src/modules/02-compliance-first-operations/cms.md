---
title: "Pillar: CMS (Medicare & ACA) Compliance"
layout: "insurance-os.njk"
eleventyNavigation:
  key: "CMS (Medicare & ACA)"
  parent: "Compliance-First Operations"
  order: 2
---

# Pillar: CMS (Medicare & ACA) Compliance

## 1.0 Strategic Mandate

For any agency selling ACA or Medicare products, the Centers for Medicare & Medicaid Services (CMS) rules are **non-negotiable**. The ACA/Medicare business is a low-margin, high-volume annuity model. Profitability is achieved through persistency and **absolute avoidance of fines**.

CMS has an existential, zero-tolerance policy. Failure to comply with these rules—specifically the "10-Year Mandates"—is an agency-ending event. This OS is built to make compliance an automated, auditable, and unavoidable part of the tech stack.

## 2.0 The Core Rules: The 10-Year Mandates

### 1. 10-Year Call Recording Mandate (Medicare)

* **The Rule:** You **must** record and store **ALL** "sales, marketing, and enrollment calls" for Medicare Advantage (MA) and Part D (PDP) products.
* **The Scope:** This mandate explicitly includes **all virtual meetings** (Zoom, Teams, FaceTime, etc.).
* **The Storage:** Recordings must be stored in a secure, HIPAA-compliant manner for a minimum of **10 years**.

### 2. 10-Year Consent Mandate (ACA)

* **The Rule:** You **must** obtain, document, and retain all consumer consent records for a minimum of **10 years**.
* **The Documents:** This applies to two key forms:
    1.  **Consent to Contact:** Must be obtained *before* any assistance is provided.
    2.  **Eligibility Attestation:** Must be obtained *before* application submission, confirming the consumer has reviewed and verified their information.

## 3.0 Other Key CMS Mandates

1.  **Medicare Marketing Disclaimer:**
    * **The Rule:** The following disclaimer **must** be stated within the first minute of any Medicare sales call: *“We do not offer every plan available in your area. Currently, we represent [X] organizations which offer [Y] products in your area. Please contact Medicare.gov, 1-800-MEDICARE, or your local State Health Insurance Assistance Program (SHIP) to get information on all your options.”*

2.  **No Unsolicited Contact (Medicare):**
    * **The Rule:** There is a strict prohibition on any unsolicited marketing for Medicare Advantage (MA) or Part D (PDP) plans.
    * **Prohibited Actions:** This includes door-to-door marketing, cold calling, unsolicited text messages, and leaving voicemails.

## 4.0 Operational Mandates (Non-Negotiable)

| Requirement | Standard Operating Procedure (SOP) |
| :--- | :--- |
| **1. The "Medicare Trap"** | **SOP:** Implement a 10-year, HIPAA-compliant recording and storage solution for **ALL** agents (ACA and Medicare) across **ALL** communication platforms (calls, Zoom, Teams, etc.). &lt;br&gt; **Reason:** An agent on an unrecorded ACA call who gets asked, "What happens when I turn 65?" and discusses Medicare has created an instant, major compliance violation. Universal recording is the only safe harbor. |
| **2. Automate Disclaimers** | **SOP:** The mandatory CMS Medicare disclaimer must be built into the top of every single Medicare sales script and, where technically possible, automated as a pre-recorded message in the dialer. |
| **3. Digitize & Store Consent** | **SOP:** All ACA Consent to Contact and Eligibility Attestation forms must be captured digitally (e.g., via e-signature or a recorded script) and automatically, permanently attached to the client record in the CRM. |
| **4. Block Unsolicited MA Calls** | **SOP:** The dialer and lead system must be configur