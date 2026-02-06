---
permalink: /
title: "About Me"
excerpt: "About me"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

Hello! I'm **Jisen Li**, an undergraduate student majoring in Mathematics and Computer Science at the **University of Illinois Urbana-Champaign (UIUC)**, graduating in May 2026. My research interests focus on **reasoning, retrieval and ranking, and artificial intelligence agents**. Currently, I am a **Research Intern at Together AI**, working on Speculative Decoding/Quantization.

In the **industry**, I have interned at **Nexa AI**, researching on-device models and AI agents; at **Snowflake**, working on embedded search models and hybrid retrieval systems; and at **TikTok**, developing multimodal recommendation models.

In **academic research**, I have worked at **UIUC's U Lab** researching AI agent communication protocols and multi-agent benchmarking; at the **University of Chicago** researching AI deployment; and at **Tsinghua University** researching computer vision for healthcare.

In my free time, I enjoy **fitness, playing billiards**, and playing **Go and Texas Hold'em poker**. Please feel free to contact me—I would be happy to connect with you!

## Research Interests

- **Inference:** Speculative Decoding, KV Cache Quantization, and efficient model serving for production deployment.
- **LLM Fine-tuning:** Instruction tuning, contrastive learning, CoT, and RLHF for model adaptation and alignment.
- **Multimodal:** Vision-text models and cross-modal alignment using frozen LLMs for multimodal understanding.
- **Agentic AI:** Agents with memory, planning, and decision-making for complex tasks and multi-agent collaboration.

## Industry Experience

### ![Together AI](../images/together.png){: width="24px"} Together AI – Research Intern
*Jan 2026 – Present*

**Speculative Decoding ([Aurora](https://aurora-spec-ai.github.io/)):** Developed a unified training-serving system that continuously learns speculators from live inference traces using RL. Supports day-0 deployment, achieving 1.45× speedup on frontier models (MiniMax M2.1 229B, Qwen3-Coder-Next 80B) and 1.25× additional speedup under distribution shift.

### ![Nexa AI](../images/Nexa.png){: width="24px"} Nexa AI – AI Research Engineer Intern
*Oct 2025 – Dec 2025*

**On-Device AI Agent:** Deployed local Qwen3 VL model via Nexa SDK and LangChain, enabling tool use with Browser Use and MCP.

**SDK Development:** Contributed to **nexa-sdk** for efficient NPU-based inference and cross-platform deployment.

### ![Bluelet](../images/bluelet.png){: width="24px"} Bluelet.ai – Search Tech Lead and Founding MLE
*Jun 2025 – Oct 2025*

**Recruiting AI Agent:** Autonomously finds, matches, and engages world-class talent—before anyone else does.

### ![Snowflake](../images/snow.png){: width="24px"} Snowflake – Software Engineer Intern (AI/ML)
*May 2025 – Aug 2025*

**Cortex Search:** Fine-tuned the Arctic embed v2.0 model for semantic retrieval using **contrastive learning**, **consistency filtering**, and **CoT-generated queries**. Constructed hard negatives with BM25, built an **LLM eval framework**, and improved nDCG by 15%.

Additionally, developed a **Gaussian Process Optimization** (GPO) system for auto-tuning hybrid search parameters, optimizing Recall@K and sDCG across retrieval and reranking stages. Final config deployed to **Global Service**.

### ![TikTok](../images/tiktok.png){: width="24px"} TikTok – Machine Learning Engineer Intern
*Aug 2024 – Dec 2024*

**Multimodal Recommendation:** Developed **Rec_Qwen** model based on Qwen2.5-0.5B/7B for multimodal next-item recommendation. Designed a **LLaVA-inspired architecture** with an MLP projector to align user profiles and content embeddings under a frozen LLM backbone. Fine-tuned with **prompt engineering**, improved output structure and loss, and achieved a **28% CTR accuracy gain** in real-world ad recommendation settings.

## Academic Research

### ![Together AI](../images/together.png){: width="24px"} Together.ai
*Sep 2025 – Present*

**KV Cache Quantization:** Built upon the K2V2 quantization strategy, combining sink32 and 25% K-channel precision boost to recover accuracy close to FP16; implemented evaluation pipelines with vLLM and SGLang.

**Outcome:** Core Contributor, MLSys 2026. Supervised by **Dr. Shirley Wu**. [[Paper]](https://arxiv.org/pdf/2511.18643)

### ![UIUC](../images/uiuc.png){: width="24px"} University of Illinois Urbana-Champaign
*Jul 2025 – Present*

**AI Agent Protocol Benchmarking:** Developing a unified benchmark to evaluate AI agent communication protocols across core tasks like Document QA, Collaborative Coding, and MAPF, focusing on task performance, communication cost, and robustness.

**Protocol Adaptation and Meta Protocol:** Contributed to adapting the ANP protocol across diverse scenarios and integrating a Meta Protocol layer that unifies multiple protocols under a shared interface.

**Fail-Storm Recovery and System Monitoring:** Implemented failure recovery experiments in the Shard QA scenario and integrated Prometheus + OTLP for monitoring token-level cost, GPU usage, and recovery metrics.

Supervised by **Prof. Jiaxuan You**. [[Paper]](https://arxiv.org/pdf/2510.17149)

### ![UChicago](../images/uchicago.png){: width="24px"} University of Chicago (Globus Lab)
*Jun 2024 – Aug 2024*

**Automated Deployment for Science Models:** Implemented a pipeline to deploy AI/ML models on the Garden platform, integrating Delta HPC for real-time inference with GPU support.

Supervised by **Dr. Eliu A. Huerta**.

### ![Tsinghua](../images/tsinghua.svg){: width="24px"} Tsinghua University
*Jan 2020 – Apr 2021*

**Non-contact HRV Monitoring:** Developed a non-contact heart rate variability (HRV) monitoring algorithm using computer vision and signal processing. Applied OpenCV to extract cheek regions, enhanced subtle color changes via **Eulerian Video Magnification (EVM)**, and designed noise reduction methods for low-light and motion robustness. Extracted HRV features using remote photoplethysmography (rPPG). Improved accuracy by 12% under motion conditions.

Supervised by **Prof. Yongqiang Lyu**.

## Education

**![UIUC](../images/uiuc.png){: width="24px"} University of Illinois Urbana-Champaign (UIUC)**
B.S. in Mathematics + Computer Science, GPA: 3.97/4.0
*Aug 2023 – May 2026*

**![HUST](../images/hust.png){: width="24px"} Huazhong University of Science and Technology (HUST)**
B.S. in Computer Science (Transferred)
*Sep 2021 – Jan 2023*
