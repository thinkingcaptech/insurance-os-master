---
title: "KPI Architecture & Performance Analytics Framework for Independent L&H Agencies"
module: "KPI Architecture"
tags: ["research","kpi","analytics","agency","performance","dashboard"]
status: draft
lastUpdated: "2025-11-18"
permalink: "/research/10-kpi-architecture/"
summary: "A complete KPI architecture and analytics framework tailored for independent Life & Health insurance agencies — definitions, formulas, dashboards, scorecards, and implementation guidance."
---

## Part 1 — Executive Summary

The central challenge for independent insurance agencies is not a lack of data, but a surplus of "vanity metrics" that obscure the few signals that matter. This KPI architecture transforms the agency from reactive (reporting what happened) to proactive (predicting and preventing outcomes).

The following 10 KPIs are the "vital few" that provide a 360° view of agency health across growth, profitability, and risk. They form the core Executive Dashboard and should be the canonical metrics used for decision-making.

- LTV/CAC Ratio (Master Metric)
- 13-Month Persistency Rate (Quality)
- Net New Annualized Premium (AP) (Growth)
- Agent 90-Day Survival Rate (Scalability)
- Lead-to-Application Conversion Rate (Efficiency)
- Speed-to-Lead (Predictive)
- EBITDA (Profitability)
- Override Income (Leverage)
- Compliance Incident Rate (Risk)
- Cash Flow (Advances vs. Chargeback Reserve) (Liquidity)

Targets and RAG thresholds (example): LTV/CAC > 4:1 = Green, 3–3.9 = Yellow, <3 = Red; Persistency > 90% = Green, 85–89.9% = Yellow, <85% = Red.

## Part 2 — Complete KPI Catalog (Data Dictionary)

This catalog records each metric's strategic purpose and classification (Leading / Lagging / Hybrid). Implement as canonical fields on the analytics layer and in CRM custom objects.

2.1 Lead Generation & Marketing Metrics

Leading indicators:
- Marketing Spend by Channel — purpose: budget allocation vs. channel performance.
- Lead Volume by Source — count of leads by type.
- Cost Per Lead (CPL) — formula: marketing spend / # leads by channel.
- Speed-to-Lead — (timestamp first contact) - (timestamp lead receipt).
- Contact Rate — (# leads contacted) / (# leads dialed).

Lagging indicators:
- Lead-to-Application Rate — (# applications submitted) / (# leads from source).
- Customer Acquisition Cost (CAC) — (Total marketing + sales spend) / (# new policies issued).
- Marketing ROI and Lead Source Profitability (LTV/CAC by source).

2.2 Sales & Conversion Metrics

Leading indicators:
- Daily/Weekly Activity Levels: Dials, Contacts, Talk Time, Appointments Set/Held.
- Sales funnel conversion rates (dial→contact→appt set→appt held→app submitted).

Lagging indicators:
- Annualized Premium (AP) Written
- Policies Issued (Net New AP)
- Close Rate (Application→Issue)
- Average Case Size, FYC Earned

2.3 Recruiting & Agency Growth

Leading indicators:
- Recruiting funnel (prospects→interviews→offers→starts)
- Onboarding completion rate
- New agent activity (first 30/60/90 days)

Lagging indicators:
- Agent 30/60/90-day survival rates
- 12-month retention
- Agent productivity (AP per agent) and Recruiting Cost Per Hire (CPH)

2.4 Compliance & Risk Metrics

Leading indicators:
- Consent documentation rate (TCPA/CMS)
- Call recording compliance rate
- Training completion rate

Lagging indicators:
- Compliance incidents (TCPA, CMS, DOI complaints)
- Policy chargeback rate
- E&O claims

2.5 Customer Retention & Persistency

Leading indicators:
- Policy servicing touchpoints (annual review coverage)
- Client satisfaction (NPS/CSAT)

Lagging indicators:
- 13-month persistency (by AP or count)
- Policy lapse rate
- Lifetime Value (LTV)

2.6 Financial & Operational Metrics

Leading indicators:
- Cash flow projections (expected advances - expected chargebacks/expenses)
- Working capital, expense ratios by category
- Technology utilization rate (agent adoption)

Lagging indicators:
- Revenue (GCI), EBITDA & margin, Revenue per Agent

## Part 3 — Dashboard Templates (Mission Control)

Design five core dashboards. Each dashboard has recommended update frequency, primary KPIs, and visualizations (scorecards, trend lines, funnels, heatmaps).

3.1 Executive Dashboard (Owner view) — update: daily for activity, monthly for financials
- Net New Issued AP (MTD): Scorecard & gauge
- LTV/CAC (T12): Gauge (RAG thresholds)
- 13-Month Persistency (T12): Gauge
- Agent 90-Day Survival Rate (T12): Gauge
- EBITDA (YTD): trend + scorecard
- Compliance Incidents (YTD): scorecard (0 = green)

3.2 Agent Performance Dashboard (Agent view) — real-time/daily
- Personal funnel, Speed-to-Lead (today avg), Net Issued AP (MTD), My Activity

3.3 Recruiting Dashboard — weekly
- Recruiting funnel, onboarding velocity, new agent cohort activity and survival

3.4 Compliance Dashboard — real-time/daily
- Call recording compliance, TCPA/CMS consent rate, policy chargeback heatmap, compliance training status

3.5 Financial Dashboard — monthly
- P&L summary, cash flow waterfall, GCI vs EBITDA, expense ratio breakdown, break-even analysis

## Part 4 — Scorecard Frameworks & Management

4.1 Balanced Scorecard (BSC) for Agency Health — perspectives (Financial, Customer, Internal Process, Learning & Growth) with KPI targets. Use to guide quarterly strategy and OKRs.

4.2 Weighted Agent Performance Scorecard — weekly 1:1 scorecard combining Activity, Conversion, Quality (persistency), Compliance, and Training into a weighted total score. RAG thresholds: >90% green, 80–89.9% yellow, <80% red.

4.3 Recruiting scorecards and quick RAG checks for the recruiting manager

## Part 5 — Benchmarking (2023–2025)

Include a minimal set of industry benchmarks necessary to set RAG thresholds and targets (CPL ranges, persistency benchmarks, production targets, EBITDA benchmarks). Source these to the agency's documentation and update annually.

## Part 6 — Formula Library & Calculation Guide

Include canonical formulas for every analytics metric so calculations are reproducible between systems. Example formulas:

- CAC = (Total Marketing Spend + Total Sales Spend) / (Total New Policies Issued)
- LTV (agency-specific) — split FYC vs renewals; compute Average Policy Lifespan = 1 / (1 - Annual Persistency Rate)
- 13-Month Persistency (by AP) = AP of policies issued 13 months prior still in force / AP of policies issued 13 months prior
- Agent 90-Day Survival = # agents hired 90–365 days ago still active / # agents hired 90–365 days ago
- Chargeback Rate = total commissions charged back / total commissions advanced

Document these formulas in code-friendly pseudocode and in the data warehouse layer (db views or computed columns).

## Part 7 — Implementation Guide (Data Model & Integration)

High-level technical blueprint:

7.1 Core objects: Policy (central), Application, Commission_Statement. Policy must link to Contact, Agent, Carrier, and include fields: Policy_ID, Status, Product_Line, AP, FYC_% , Renewal_% , Issue_Date, Lapse_Date, 13_Month_Anniversary.

7.2 Required integrations:
- Lead vendors (API) for real-time ingest and source attribution
- Carrier portals (RPA or API) to ingest commission statements and policy status
- Accounting (QuickBooks) for expenses
- Dialer/telephony for dials, talk time, and call recordings (link recording URL to Contact)

7.3 Automation & reporting workflows (examples):
- Speed-to-Lead alert (start 5-minute timer, ping agent/manager if not contacted)
- CMS compliance alert (if Medicare call and recording URL null)
- Retention/persistency reminders (create task 30 days before 13-month anniversary)

7.4 Data quality controls: enforce validation rules (application→issued requires AP > 0 and Issue_Date) and TCPA consent required to log calls.

## Part 8 — Performance Management Playbook

Operationalize the OS with daily huddles, weekly 1-on-1s, monthly business reviews, and quarterly strategic planning. Use the Weighted Agent Scorecard for coaching triggers and automated tasks for managers.

Example coaching triggers:
- New agent activity risk (dials < 80% of benchmark for 3 consecutive days) → automated manager task
- Persistency drop below 85% → audit and call reviews

Incentive design recommendations: persistency bonus, retention-aligned bonus, validation bonus for new agents (validation = 10 policies + 90 days + training completed).

## Part 9 — Conclusion & Recommendations

Key recommendations:
- Automate lagging data via carrier integrations (carrier portals / RPA) — highest priority.
- Codify the 90-day plan and make Agent 90-Day Survival a primary executive KPI.
- Build compliance-first features: mandatory call recording, 10-year storage, and a dedicated Compliance Dashboard.
- Align incentives with persistency and quality, not just FYC volume.

## Next steps (developer-friendly)

1. Add canonical field definitions to your CRM mapping document and data warehouse schema.
2. Create a `_data/kpi_catalog.json` that includes the KPI names, formulas, canonical field names, and RAG thresholds for use by Nunjucks templates.
3. Implement Nunjucks includes to render KPI tables and dashboard widgets programmatically.
4. Prioritize carrier portal ingestion (RPA or API) in the engineering roadmap — without this, LTV/CAC and persistency will be unreliable.

---

If you'd like, I can now:

- create `_data/kpi_catalog.json` with the canonical fields and formulas, and/or
- add a Nunjucks include under `_includes` to render the KPI catalog as an HTML table for the site, and/or
- stage and commit this file and push it to the repo (I can handle fetch/pull if the remote has diverged).
---
title: ""
module: ""
tags: []
status: draft
lastUpdated: "2025-11-17"
---

