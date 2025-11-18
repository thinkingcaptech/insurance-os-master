---
title: "CRM / AMS"
module: "03 Technology Stack Optimization"
layout: insurance-os
tags: ["module-section"]
status: "draft"
lastUpdated: "2025-11-17"
permalink: "/insurance-os/technology/crm/"
---

# CRM / AMS

## Summary
- Core hub decision: general-purpose CRM (Salesforce/HubSpot) vs insurance-specific AMS (AgencyBloc/NextAgency/Better Agency/iLife/Shape).
- Hybrid recommended: back-office AMS + front-office tools via integrations.

## Key Benchmarks
- Salesforce: $25–$350+/user plus heavy implementation; massive ecosystem.
- HubSpot: free tier to ~$1,600+/mo Pro (5 users) for automation.
- AgencyBloc $65–$75/user; NextAgency $75/user + $120/agency; Better Agency $299–$549/agency; iLife $199/user.

## Compliance Notes
- Native consent, DNC, recording integrations required; ensure call/record retention where needed.
- Commission tracking often weak in general CRMs; AMS have native; consider add-ons or standalone for complex hierarchies.
- Data security, vendor BAAs/DPAs for PHI/PII.

## Scripts/Processes
- Requirements doc: policy mgmt, commissions, consent/DNC, integrations (dialer, quoting, e-sign), mobile needs.
- Implementation plan: data cleanse, minimal viable workflows first, pilot group, avoid over-customizing.
- Integration map: define source of truth for leads/consent; Zapier/API connections documented.

## Action Plan
- Select hub aligned to org (sales-first → HubSpot; admin/commissions → AMS; enterprise → Salesforce).
- Configure consent/DNC logging and call recording links; set up pipelines and reporting dashboards.
- Phase integrations: e-app/quoting, dialer, marketing automation, e-sign; train and audit usage.
