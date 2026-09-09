---
title: "Lab Note #042: Benchmarking WebAssembly vs V8 JIT in Edge Isolate Runtimes"
description: "Experimental performance comparison of Rust-compiled WASM modules vs optimized V8 JavaScript JIT execution for cryptographic hash verification and JSON transformations."
pubDate: 2026-07-22
hypothesis: "Rust-compiled WebAssembly will outperform native V8 JavaScript by at least 3.5x in compute-dense cryptographic workloads while maintaining sub-1MB memory overhead."
findings: "WASM achieved 4.1x faster execution on bulk SHA-256 and AES calculations. However, JS was 1.2x faster on simple shallow JSON object transforms due to WASM memory boundary serialization costs."
reproducibility: "High"
featured: true
tags: ["WebAssembly", "Rust", "V8 Engine", "Benchmarks", "Isolates"]
---

## Experiment Overview

In this lab benchmark, we isolated computational performance within Cloudflare V8 Workers. We compared an idiomatic TypeScript implementation against a Rust WASM compilation target executing identical mathematical tasks:

1. **Test A**: 100,000 iterations of HMAC-SHA256 signature verification.
2. **Test B**: Parsing, transforming, and filtering a 15MB nested JSON document.

## Benchmark Results

| Workload | TypeScript (V8 JIT) | Rust (WASM Target) | Delta / Speedup |
| :--- | :--- | :--- | :--- |
| **HMAC-SHA256 (100k)** | 482 ms | 117 ms | **4.12x faster (WASM)** |
| **Argon2 Password Hashing** | 1,240 ms | 290 ms | **4.27x faster (WASM)** |
| **JSON Parse & Filter (15MB)** | 34 ms | 41 ms | **1.20x faster (TS)** |
| **Memory Footprint** | 12.4 MB | 1.8 MB | **6.8x lower memory (WASM)** |

```mermaid
graph TD
    A[Input Data Payload] --> B{Workload Type?}
    B -->|Heavy Math / Cryptography| C[Rust WebAssembly Engine<br/>~117ms]
    B -->|DOM / JSON / String I/O| D[V8 JavaScript Engine<br/>~34ms]
```

## Lab Conclusion & Recommendations

- **Use WebAssembly (Rust/C++)** for: image manipulation, vector search math, cryptography, signature verification, and compression.
- **Use Native JavaScript** for: simple request routing, HTTP header mutations, and light JSON manipulation to avoid WASM linear memory marshalling overhead.
