---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
* **B.S. in Mathematics + Computer Science**, University of Illinois Urbana-Champaign (UIUC), 2023-2026
  * GPA: 3.98/4.0
* **B.S. in Computer Science**, Huazhong University of Science and Technology (HUST), 2021-2023
  * Transferred to UIUC

Research Experience
======
* **Together.ai** (Sep 2025 – Present)
  * **KV Cache Quantization:** Built upon the K2V2 quantization strategy, combining sink32 and 25% K-channel precision boost to recover accuracy close to FP16; implemented evaluation pipelines with vLLM and SGLang.
  * **Outcome:** Core Contributor, MLSys 2026. Supervised by Dr. Shirley Wu.
  * [Paper](https://arxiv.org/pdf/2511.18643)

* **University of Illinois Urbana-Champaign** (Jul 2025 – Present)
  * **AI Agent Protocol Benchmarking:** Developing a unified benchmark to evaluate AI agent communication protocols across core tasks like Document QA, Collaborative Coding, and MAPF, focusing on task performance, communication cost, and robustness.
  * **Protocol Adaptation and Meta Protocol:** Contributed to adapting the ANP protocol across diverse scenarios and integrating a Meta Protocol layer that unifies multiple protocols under a shared interface.
  * **Fail-Storm Recovery and System Monitoring:** Implemented failure recovery experiments in the Shard QA scenario and integrated Prometheus + OTLP for monitoring token-level cost, GPU usage, and recovery metrics.
  * Supervised by Prof. Jiaxuan You.
  * [Paper](https://arxiv.org/pdf/2510.17149)

* **University of Chicago (Globus Lab)** (Jun 2024 – Aug 2024)
  * **Automated Deployment for Science Models:** Implemented a pipeline to deploy AI/ML models on the Garden platform, integrating Delta HPC for real-time inference with GPU support.
  * Supervised by Dr. Eliu A. Huerta.

* **Tsinghua University** (Jan 2020 – Apr 2021)
  * **Non-contact HRV Monitoring:** Developed a non-contact heart rate variability (HRV) monitoring algorithm using computer vision and signal processing. Applied OpenCV to extract cheek regions, enhanced subtle color changes via Eulerian Video Magnification (EVM), and designed noise reduction methods for low-light and motion robustness. Extracted HRV features using remote photoplethysmography (rPPG). Improved accuracy by 12% under motion conditions.
  * Supervised by Prof. Yongqiang Lyu.

Industry Experience
======
* **Together AI – Research Intern** (Jan 2026 – Present)
  * **Speculative Decoding ([Aurora](https://aurora-spec-ai.github.io/)):** Developed a unified training-serving system that continuously learns speculators from live inference traces using RL. Supports day-0 deployment, achieving 1.45× speedup on frontier models (MiniMax M2.1 229B, Qwen3-Coder-Next 80B) and 1.25× additional speedup under distribution shift. [[Paper]](https://arxiv.org/abs/2602.06932)

* **Nexa AI – AI Research Engineer Intern** (Oct 2025 – Dec 2025)
  * **On-Device AI Agent:** Deployed local Qwen3 VL model via [Nexa SDK](https://github.com/NexaAI/nexa-sdk) and LangChain, enabling tool use with Browser Use and MCP.
  * **SDK Development:** Contributed to nexa-sdk for efficient NPU-based inference and cross-platform deployment.

* **Snowflake – Software Engineer Intern (AI/ML)** (May 2025 – Aug 2025)
  * **Cortex Search:** Fine-tuned the Arctic embed v2.0 model for semantic retrieval using contrastive learning, consistency filtering, and CoT-generated queries. Constructed hard negatives with BM25, built an LLM eval framework, and improved nDCG by 15%.
  * Additionally, developed a Gaussian Process Optimization (GPO) system for auto-tuning hybrid search parameters, optimizing Recall@K and sDCG across retrieval and reranking stages. Final config deployed to Global Service.

* **TikTok – Machine Learning Engineer Intern** (Aug 2024 – Dec 2024)
  * **Multimodal Recommendation:** Developed Rec_Qwen model based on Qwen2.5-0.5B/7B for multimodal next-item recommendation. Designed a LLaVA-inspired architecture with an MLP projector to align user profiles and content embeddings under a frozen LLM backbone. Fine-tuned with prompt engineering, improved output structure and loss, and achieved a 28% CTR accuracy gain in real-world ad recommendation settings.

Skills
======
* **Programming Languages:** Python, C/C++, Java, SQL, JavaScript/TypeScript
* **Machine Learning & AI:**
  * Deep Learning Frameworks: PyTorch, TensorFlow, JAX
  * LLM Tools: vLLM, SGLang, LangChain, Hugging Face Transformers
  * Model Training: RLHF, DPO, PPO, LoRA, QLoRA
  * Computer Vision: OpenCV, CLIP, LLaVA
* **Systems & Infrastructure:**
  * Cloud Platforms: AWS, Azure, GCP
  * Containerization: Docker, Kubernetes
  * Monitoring: Prometheus, Grafana, OTLP
  * Version Control: Git, GitHub
* **Specializations:**
  * Model Optimization: Quantization, Speculative Decoding, KV Cache
  * Retrieval Systems: BM25, Dense Retrieval, Hybrid Search, Reranking
  * Agent Systems: Multi-agent collaboration, Protocol design
  * Data Science: NumPy, Pandas, scikit-learn

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
