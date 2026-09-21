---
title: "Identity Federation Spray"
description: "Hands-on Entra ID password spray validation with ATT&CK T1110.003 detection objectives and responder runbook checkpoints."
difficulty: "intermediate"
attackIds:
  - "T1110.003"
  - "T1078"
learningObjectives:
  - "Validate cloud identity telemetry for low-and-slow spray activity."
  - "Tune Sigma detections against sign-in logs and lockout artifacts."
  - "Practice incident escalation criteria for federated identity abuse."
duration: "PT90M"
schemaType: "Course"
---

## Scenario summary

This exercise walks defenders through a portable identity password spray scenario using cloud-native sign-in telemetry and a reproducible blue-team response flow.

## Topology focus

- Cloud identity provider with federated authentication.
- Centralized log aggregation for sign-in events.
- Sigma validation pipeline for spray thresholds.

## Runbook checkpoints

1. Confirm repeated authentication failures across multiple accounts.
2. Validate geo, ASN, and user-agent clustering before escalation.
3. Compare detections against ATT&CK T1110.003 success criteria.
