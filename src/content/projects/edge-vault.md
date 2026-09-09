---
title: "EdgeVault Key Management"
description: "Zero-knowledge cryptographic key storage system utilizing hardware security modules and distributed threshold secret sharing across edge regions."
techStack: ["Go", "Cloudflare D1", "AES-256-GCM", "Docker", "gRPC"]
githubUrl: "https://github.com/example/edge-vault"
liveUrl: "https://edgevault.demo.app"
featured: true
metric: "Zero-Knowledge Secrets"
order: 2
---

## Project Overview

EdgeVault delivers secure, audited key-value secrets storage without ever exposing private encryption keys to the hosting infrastructure.

### Key Innovations
- **Shamir's Secret Sharing**: Splits master decryption keys across 5 geographic nodes; any 3 nodes are required to reconstruct a session token.
- **Instant Revocation**: Global cache invalidation propagated in under 150 milliseconds.
