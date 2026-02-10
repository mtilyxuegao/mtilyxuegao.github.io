---
permalink: /
title: ""
excerpt: "About me"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

Hello! I am **Jisen Li**, an undergraduate student majoring in Mathematics and Computer Science at the **University of Illinois Urbana-Champaign (UIUC)**, graduating in May 2026. My research interests focus on **inference, retrieval and ranking, and AI agents**. I am currently a Research Intern at **Together AI**, working on speculative decoding and model quantization under the supervision of **[Dr. Shirley Wu](https://xwushirley.github.io/)** and **[Prof. Shuaiwen Leon Song](https://www.linkedin.com/in/leon-song-1a663019/)**.

In industry research, I have interned at **Nexa AI**, where I worked on on-device models and AI agents; at **Snowflake**, focusing on embedded search models and hybrid retrieval systems; and at **TikTok**, where I developed multimodal recommendation models.

In academic research, I have worked at **[UIUC U-Lab](https://ulab-uiuc.github.io/)** under the supervision of **[Prof. Jiaxuan You](https://cs.stanford.edu/people/jiaxuan/)**, researching AI agent communication protocols and multi-agent benchmarking. I have also conducted research at the **University of Chicago** under the supervision of **[Dr. Eliu A. Huerta](https://scholar.google.com/citations?user=CZQuCS0AAAAJ&hl=en)**, focusing on AI deployment, and at **Tsinghua University** under the guidance of **[Prof. Yongqiang Lyu](https://www.linkedin.com/in/yongqianglu/)**, focusing on computer vision and digital signal processing.

Outside of research, I enjoy fitness and strategy games such as Go. Please feel free to reach out at [jisenli2@illinois.edu](mailto:jisenli2@illinois.edu)—I would be happy to discuss collaboration opportunities.

## News 🎉

- **[Feb 2026]** **[Aurora](https://aurora-spec-ai.github.io/)** Day Zero support for **Qwen3-Coder-Next-FP8**! [Checkpoint available](https://huggingface.co/togethercomputer/Aurora-Spec-Qwen3-Coder-Next-FP8).
- **[Jan 2026]** Joined Together AI as **Research Intern**!
- **[Jan 2026]** [Kitty paper](https://arxiv.org/pdf/2511.18643) accepted to **MLSys 2026**!
- **[Dec 2025]** Grateful for **OpenAI** offer, **but** chose different path!

## Research Interests

- **Inference:** Speculative Decoding, KV Cache Quantization, and efficient model serving.
- **LLM Fine-tuning:** Instruction tuning, contrastive learning, CoT, and RLHF for alignment.
- **Multimodal:** Vision-text models and cross-modal alignment using frozen LLMs.
- **Agentic AI:** Agents with memory, planning, and decision-making for collaboration.

## Industry Experience

### ![Together AI](../images/together.png){: width="24px"} Together AI – Research Intern <span style="float: right; font-size: 0.9em; font-weight: normal;">*Jan 2026 – Present*</span>

**Speculative Decoding ([Aurora](https://aurora-spec-ai.github.io/)):** Developed a unified training-serving system that continuously learns speculators from live inference traces, achieving 1.45× speedup on frontier models and 1.25× additional speedup under distribution shift. [Paper](https://arxiv.org/abs/2602.06932)

### ![Nexa AI](../images/Nexa.png){: width="24px"} Nexa AI – AI Research Engineer Intern <span style="float: right; font-size: 0.9em; font-weight: normal;">*Oct 2025 – Dec 2025*</span>

**On-Device AI Agent:** Deployed local Qwen3 VL model via [Nexa SDK](https://github.com/NexaAI/nexa-sdk) for on-device agent with tool use, and contributed to **[nexa-sdk](https://github.com/NexaAI/nexa-sdk)** for efficient NPU-based inference.

### ![Snowflake](../images/snow.png){: width="24px"} Snowflake – Software Engineer Intern (AI/ML) <span style="float: right; font-size: 0.9em; font-weight: normal;">*May 2025 – Aug 2025*</span>

**Cortex Search:** Fine-tuned Arctic embed v2.0 for semantic retrieval using contrastive learning and CoT-generated queries, improving nDCG by 15%, and developed a Gaussian Process Optimization system for auto-tuning hybrid search parameters deployed to Global Service.

### ![TikTok](../images/tiktok.png){: width="24px"} TikTok – Machine Learning Engineer Intern <span style="float: right; font-size: 0.9em; font-weight: normal;">*Aug 2024 – Dec 2024*</span>

**Multimodal Recommendation:** Developed **Rec-Qwen** model based on Qwen2.5-0.5B/7B with a LLaVA-inspired architecture to align user profiles and content embeddings under a frozen LLM backbone, achieving a 28% CTR accuracy gain in item recommendation.

## Academic Research

### ![Together AI](../images/together.png){: width="24px"} Together AI <span style="float: right; font-size: 0.9em; font-weight: normal;">*Sep 2025 – Present*</span>

**KV Cache Quantization (Kitty):** Developed Kitty, a mixed-precision KV caching system. Introduced Dynamic Channel-wise Precision Boost, achieving 8× memory reduction with near-zero accuracy loss and 2.1×–4.1× throughput improvement.

**Outcome:** Core Contributor, MLSys 2026. Supervised by **[Dr. Shirley Wu](https://xwushirley.github.io/)**. [[Paper]](https://arxiv.org/pdf/2511.18643) [[Code]](https://github.com/Summer-Summer/Kitty)

### ![UIUC](../images/uiuc.png){: width="24px"} University of Illinois Urbana-Champaign <span style="float: right; font-size: 0.9em; font-weight: normal;">*Jul 2025 – Present*</span>

**AI Agent Protocol Benchmarking:** Developed a unified benchmark to evaluate agent communication protocols across Document QA, Collaborative Coding, and MAPF. Contributed to ANP protocol adaptation and Meta Protocol integration.

**Outcome:** Co-First Author, ICML 2026 Under Review. Supervised by **[Prof. Jiaxuan You](https://cs.stanford.edu/people/jiaxuan/)** [[Paper]](https://arxiv.org/pdf/2510.17149)

### ![UChicago](../images/uchicago.png){: width="24px"} University of Chicago (Globus Lab) <span style="float: right; font-size: 0.9em; font-weight: normal;">*Jun 2024 – Aug 2024*</span>

**Automated Deployment for Science Models:** Implemented a pipeline to deploy AI/ML models on the Garden platform, integrating Delta HPC for real-time inference with GPU support.

Supervised by **[Dr. Eliu A. Huerta](https://scholar.google.com/citations?user=CZQuCS0AAAAJ&hl=en)**.

### ![Tsinghua](../images/tsinghua.svg){: width="24px"} Tsinghua University <span style="float: right; font-size: 0.9em; font-weight: normal;">*Jan 2020 – Apr 2021*</span>

**Non-contact HRV Monitoring:** Developed a non-contact HRV monitoring algorithm using computer vision and Eulerian Video Magnification, improving accuracy by 12%.

Supervised by **[Prof. Yongqiang Lyu](https://www.linkedin.com/in/yongqianglu/)**.

## Education

**![UIUC](../images/uiuc.png){: width="24px"} University of Illinois Urbana-Champaign (UIUC)** <span style="float: right; font-size: 0.9em; font-weight: normal;">*Aug 2023 – May 2026*</span><br>
B.S. in Mathematics + Computer Science, GPA: 3.98/4.0

**🌱 Gap Year** <span style="float: right; font-size: 0.9em; font-weight: normal;">*Jan 2023 – Aug 2023*</span>

**![HUST](../images/hust.png){: width="24px"} Huazhong University of Science and Technology (HUST)** <span style="float: right; font-size: 0.9em; font-weight: normal;">*Sep 2021 – Jan 2023*</span><br>
B.S. in Computer Science (Transferred)
