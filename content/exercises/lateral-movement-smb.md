---
title: "SMB Lateral Movement Trace"
description: "Windows lateral movement exercise covering ATT&CK T1021.002 telemetry, Sigma validation, and containment decision points."
difficulty: "advanced"
attackIds:
  - "T1021.002"
  - "T1570"
learningObjectives:
  - "Correlate SMB session creation with remote service execution evidence."
  - "Validate host and network telemetry coverage for lateral movement."
  - "Rehearse fast containment actions without destroying forensic artifacts."
duration: "PT2H"
schemaType: "Course"
---

## Scenario summary

Operators emulate controlled SMB-based lateral movement across a segmented Windows lab while defenders confirm telemetry, detections, and containment playbooks.

## Topology focus

- Multi-host Windows enclave with domain services.
- Centralized endpoint and network telemetry collection.
- Portable lab design for cloud or on-prem sandboxing.

## Runbook checkpoints

1. Trace initial remote file copy behavior.
2. Validate detection logic against service creation and remote logon artifacts.
3. Document containment options with minimum investigative disruption.
