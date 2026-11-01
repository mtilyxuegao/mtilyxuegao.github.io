---
permalink: /
title: ""
excerpt: "About me"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

Hello! I am **Jisen Li**, an **AI Researcher at [Together AI](https://www.together.ai/)**. I recently graduated with a B.S. in Mathematics and Computer Science from the **University of Illinois Urbana-Champaign (UIUC)**. My research interests focus on **reinforcement learning (RL), inference, and AI agents**. At **Together AI**, I work on **RL algorithms and platforms** in collaboration with **[Ivan Provilkov](https://www.linkedin.com/in/ivan-provilkov/)** and **[Max Ryabinin](https://mryab.github.io/)**, and previously worked on speculative decoding and quantization with **[Dr. Shirley Wu](https://xwushirley.github.io/)** and **[Dr. Ben Athiwaratkun](https://benathi.github.io/)**.

In industry experience, I have interned at **Nexa AI**, where I worked on on-device models and AI agents; at **Snowflake**, focusing on embedding models and hybrid retrieval systems; and at **TikTok**, where I developed multimodal recommendation models.

In academic research, I have worked at **[UIUC U-Lab](https://ulab-uiuc.github.io/)** under the supervision of **[Prof. Jiaxuan You](https://jiaxuan.web.illinois.edu/)**, researching AI agent communication protocols and multi-agent benchmarking. I have also conducted research at the **University of Chicago** under the supervision of **[Dr. Eliu A. Huerta](https://scholar.google.com/citations?user=CZQuCS0AAAAJ&hl=en)**, focusing on AI deployment, and at **Tsinghua University** under the guidance of **[Prof. Yongqiang Lyu](https://www.linkedin.com/in/yongqianglu/)**, focusing on computer vision and digital signal processing.

Outside of research, I enjoy fitness and strategy games such as Go, and I'm always up for a game of billiards. Whether it's a Go board or a pool table, I love games that reward careful planning and precise execution.

## Research Interests

- **Post-Training:** Reinforcement learning (RL) algorithms, agentic RL with environment rewards, and scalable RL training platforms.
- **Inference:** Speculative decoding, KV cache quantization, and efficient model serving.
- **Agentic AI:** Agents with memory, planning, and decision-making for collaboration.

## News 🎉

<div class="news-feed" markdown="1">

- **[Oct 2026]** Contributed to the launch of **[Together Post-Training](https://www.together.ai/blog/together-post-training)** 🚀: RL and SFT with your own training loop on Together AI!
- **[Oct 2026]** Released **[ORL](https://introspective-diffusion.github.io/orl-dlm/)** for Diffusion LLMs! [[Paper]](https://arxiv.org/abs/2610.20687)
- **[Sep 2026]** Released **QATFactory** for deployment-aligned quantization-aware training of LLMs! [[Paper]](https://arxiv.org/abs/2609.39223)
- **[Sep 2026]** **[OSCAR](https://oscar-quantize.github.io/)** paper accepted to **NeurIPS 2026** 🎉! [[Paper]](https://arxiv.org/abs/2605.17757)
- **[Sep 2026]** **OS-Omni** accepted to **NeurIPS 2026 Evaluations & Datasets Track**! [[Paper]](https://openreview.net/forum?id=UlijzWpwGW)
- **[Jul 2026]** Joined **[Together AI](https://www.together.ai/)** full-time as an **AI Researcher**!
- **[Jul 2026]** Released **PaperPilot**: Multi-Turn Agentic Scientific Literature Search via Workflow Induction! [[Paper]](https://arxiv.org/abs/2607.00597)
- **[May 2026]** Graduated from **UIUC** 🎓, *Magna Cum Laude*!
- **[Apr 2026]** **[Aurora](https://aurora-spec-ai.github.io/)** and **[Agent Protocol](https://arxiv.org/pdf/2510.17149)** papers accepted to **ICML 2026** 🎉!
- **[Feb 2026]** **[Aurora](https://aurora-spec-ai.github.io/)** Day Zero support for **Qwen3-Coder-Next-FP8**! [[Checkpoint]](https://huggingface.co/togethercomputer/Aurora-Spec-Qwen3-Coder-Next-FP8)
- **[Jan 2026]** Joined Together AI as **Research Intern**!
- **[Jan 2026]** **[Kitty](https://arxiv.org/pdf/2511.18643)** paper accepted to **MLSys 2026**!

</div>

<style>
.news-feed, .pub-list {
  overflow-y: auto;
  padding-right: 0.6em;
  margin-bottom: 1em;
  -webkit-overflow-scrolling: touch;
}
.news-feed { max-height: 12em; }
.pub-list { max-height: 19em; }
.news-feed::-webkit-scrollbar, .pub-list::-webkit-scrollbar { width: 6px; }
.news-feed::-webkit-scrollbar-thumb, .pub-list::-webkit-scrollbar-thumb { background: rgba(128,128,128,0.45); border-radius: 3px; }
.news-feed::-webkit-scrollbar-track, .pub-list::-webkit-scrollbar-track { background: transparent; }
.pub-list ul { margin-top: 0; }
.pub-list li { margin-bottom: 0.8em; }
.pub-venue {
  display: inline-block;
  font-size: 0.75em;
  font-weight: 600;
  padding: 0.05em 0.5em;
  margin-right: 0.3em;
  border-radius: 4px;
  background: rgba(128,128,128,0.15);
}
</style>

## Selected Publications

<sup>*</sup> Equal contribution, <sup>†</sup> Core contributor. Full list on [Google Scholar](https://scholar.google.com/citations?user=ILdf8hYAAAAJ&hl=en).

<div class="pub-list" markdown="1">

- <span class="pub-venue">NeurIPS 2026</span> **OSCAR: Offline Spectral Covariance-Aware Rotation for 2-bit KV Cache Quantization**<br>
  Zhongzhu Zhou<sup>*</sup>, Donglin Zhuang<sup>*</sup>, **Jisen Li**, et al.<br>
  [[Paper]](https://arxiv.org/abs/2605.17757) [[Code]](https://github.com/FutureMLS-Lab/OSCAR) [[Project]](https://oscar-quantize.github.io/)
- <span class="pub-venue">NeurIPS 2026 E&D Track</span> **OS-Omni: A Cross-Platform Benchmark for Generalist Computer-Using Agents**<br>
  Hui Shen, Yunta Hsieh, Jianing Ma, …, **Jisen Li**, et al.<br>
  [[Paper]](https://openreview.net/forum?id=UlijzWpwGW)
- <span class="pub-venue">ICML 2026</span> **ProtocolBench: Which LLM MultiAgent Protocol to Choose?**<br>
  Hongyi Du<sup>*</sup>, Jiaqi Su<sup>*</sup>, **Jisen Li**<sup>*</sup>, et al.<br>
  [[Paper]](https://arxiv.org/abs/2510.17149) [[Code]](https://github.com/ulab-uiuc/AgentProtocols)
- <span class="pub-venue">ICML 2026</span> **When RL Meets Adaptive Speculative Training: A Unified Training–Serving System** (Aurora)<br>
  Junxiong Wang<sup>*†</sup>, Fengxiang Bie<sup>*†</sup>, **Jisen Li**<sup>†</sup>, et al.<br>
  [[Paper]](https://arxiv.org/abs/2602.06932) [[Code]](https://github.com/togethercomputer/aurora) [[Project]](https://aurora-spec-ai.github.io/)
- <span class="pub-venue">MLSys 2026 Oral</span> **Kitty: Accurate and Efficient 2-bit KV Cache Quantization with Dynamic Channel-wise Precision Boost**<br>
  Haojun Xia<sup>†</sup>, Xiaoxia Wu<sup>†</sup>, **Jisen Li**<sup>†</sup>, et al.<br>
  [[Paper]](https://arxiv.org/abs/2511.18643) [[Code]](https://github.com/Summer-Summer/Kitty)
- <span class="pub-venue">Preprint</span> **On-Policy Residual Learning for Diffusion Language Models** (ORL)<br>
  Yifan Yu<sup>*</sup>, Yuqing Jian<sup>*</sup>, **Jisen Li**<sup>*</sup>, et al.<br>
  [[Paper]](https://arxiv.org/abs/2610.20687) [[Code]](https://github.com/Introspective-Diffusion/ORL) [[Project]](https://introspective-diffusion.github.io/orl-dlm/)
- <span class="pub-venue">Preprint</span> **QATFactory: A Versatile, Deployment-Aligned Framework for Quantization-aware Training and Distillation of LLMs**<br>
  Weili Xu<sup>*</sup>, **Jisen Li**<sup>*</sup>, Yuqing Jian<sup>*</sup>, et al.<br>
  [[Paper]](https://arxiv.org/abs/2609.39223)
- <span class="pub-venue">Preprint</span> **Multi-Turn Agentic Scientific Literature Search via Workflow Induction** (PaperPilot)<br>
  **Jisen Li**<sup>*</sup>, Bingxuan Li<sup>*</sup>, Nanyi Jiang<sup>*</sup>, et al.<br>
  [[Paper]](https://arxiv.org/abs/2607.00597) [[Code]](https://github.com/mtilyxuegao/PaperPilot)
- <span class="pub-venue">Preprint</span> **SAW-INT4: System-Aware 4-Bit KV-Cache Quantization for Real-World LLM Serving**<br>
  Jinda Jia<sup>*</sup>, **Jisen Li**<sup>*</sup>, et al.<br>
  [[Paper]](https://arxiv.org/abs/2604.19157) [[Code]](https://github.com/togethercomputer/saw-int4)

</div>

## Industry Experience

### ![Together AI](../images/together.svg){: width="24px"} Together AI – AI Researcher <span style="float: right; font-size: 0.9em; font-weight: normal;">*Jul 2026 – Present*</span>

- **RL Post-Training Platform ([Together Post-Training](https://www.together.ai/blog/together-post-training)):** Contributed to Together's post-training service, which lets users write their own SFT/RL training loops while the platform handles trainer–generator orchestration, asynchronous RL, and multi-LoRA serving.
- **Diffusion LLM Post-Training ([ORL](https://introspective-diffusion.github.io/orl-dlm/)):** On-policy residual learning that trains diffusion LLMs on their own denoising trajectories, achieving ~6.9× end-to-end throughput.
- **Quantization-Aware Training (QATFactory):** Quantization-aware distillation and RL framework for LLMs that exports deployment-ready NVFP4, MXFP4, and Q4_K models.

### ![Together AI](../images/together.svg){: width="24px"} Together AI – Research Intern <span style="float: right; font-size: 0.9em; font-weight: normal;">*Jan 2026 – May 2026*</span>

- **Speculative Decoding ([Aurora](https://aurora-spec-ai.github.io/)):** Built a training-serving system that continuously learns speculators from live inference traces, achieving 1.45× speedup on frontier models.
- **KV-Cache Quantization (SAW-INT4):** Token-wise INT4 KV-cache quantization with block-diagonal Hadamard rotation, near-lossless at zero serving overhead.
- **KV-Cache Quantization ([OSCAR](https://oscar-quantize.github.io/)):** Offline covariance-aware rotation for 2-bit KV-cache quantization, with ~8× memory reduction and up to 7× throughput.

### ![Nexa AI](../images/Nexa.png){: width="24px"} Nexa AI <span style="font-size: 0.8em; font-weight: normal;">(acquired by Qualcomm)</span> – AI Research Engineer Intern <span style="float: right; font-size: 0.9em; font-weight: normal;">*Oct 2025 – Dec 2025*</span>

- **On-Device AI Agent:** Built an on-device tool-use agent with Qwen3-VL and contributed to **[nexa-sdk](https://github.com/NexaAI/nexa-sdk)** for efficient NPU inference.

### ![Snowflake](../images/snow.png){: width="24px"} Snowflake – Software Engineer Intern (AI/ML) <span style="float: right; font-size: 0.9em; font-weight: normal;">*May 2025 – Aug 2025*</span>

- **Cortex Search:** Fine-tuned Arctic Embed v2.0 for retrieval (+15% nDCG) and built Gaussian-process auto-tuning for hybrid search, deployed to production.

### ![TikTok](../images/tiktok.png){: width="24px"} TikTok – Machine Learning Engineer Intern <span style="float: right; font-size: 0.9em; font-weight: normal;">*Aug 2024 – Dec 2024*</span>

- **Multimodal Recommendation:** Developed **Rec-Qwen**, a LLaVA-style recommender aligning user and content embeddings to a frozen Qwen2.5 backbone, with a 28% CTR accuracy gain.

## Academic Research

### ![Together AI](../images/together.svg){: width="24px"} Together AI <span style="float: right; font-size: 0.9em; font-weight: normal;">*Sep 2025 – Dec 2025*</span>

- **KV Cache Quantization (Kitty):** Mixed-precision 2-bit KV caching with dynamic channel-wise precision boost, achieving 8× memory reduction at near-zero accuracy loss. Supervised by **[Dr. Shirley Wu](https://xwushirley.github.io/)**.

### ![UIUC](../images/uiuc.png){: width="24px"} University of Illinois Urbana-Champaign <span style="float: right; font-size: 0.9em; font-weight: normal;">*Jul 2025 – Present*</span>

- **Scientific Literature Search Agent (PaperPilot):** Multi-turn search agent that induces executable DAG workflows over paper-search tools, improving Hit@5 from 58.0 to 77.0. Supervised by **[Prof. Bingxin Zhao](https://www.bingxinzhao.com/)**.
- **AI Agent Protocol Benchmarking (ProtocolBench):** Built a unified benchmark for multi-agent communication protocols across document QA, collaborative coding, and multi-agent path finding. Supervised by **[Prof. Jiaxuan You](https://jiaxuan.web.illinois.edu/)**.

### Earlier Research <span style="float: right; font-size: 0.9em; font-weight: normal;">*2020 – 2024*</span>

- **University of Chicago (Globus Lab):** AI model deployment on HPC. Supervised by **[Dr. Eliu A. Huerta](https://scholar.google.com/citations?user=CZQuCS0AAAAJ&hl=en)**.
- **Tsinghua University:** Non-contact HRV monitoring with computer vision. Supervised by **[Prof. Yongqiang Lyu](https://www.linkedin.com/in/yongqianglu/)**.

## Education

**![UIUC](../images/uiuc.png){: width="24px"} University of Illinois Urbana-Champaign (UIUC)** <span style="float: right; font-size: 0.9em; font-weight: normal;">*Aug 2023 – May 2026*</span><br>
B.S. in Mathematics + Computer Science, GPA: 3.98/4.0

**🌱 Gap Year** <span style="float: right; font-size: 0.9em; font-weight: normal;">*Jan 2023 – Aug 2023*</span>

**![HUST](../images/hust.png){: width="24px"} Huazhong University of Science and Technology (HUST)** <span style="float: right; font-size: 0.9em; font-weight: normal;">*Sep 2021 – Jan 2023*</span><br>
Undergraduate Studies (Transferred)

## Academic Service

- Reviewer, **ICLR 2027**
- Program Committee, **ACL-SELVA 2026**
