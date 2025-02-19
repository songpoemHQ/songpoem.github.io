---
title:  Different types of Safety Mechanisms used in AI, Explained.
date:   2025-02-19 21:13:30 +0530
author_profile: true
author: Sandesh Soni
category: artificial-intelligence
tags:
- safety
- artificial-intelligence
read_time: false
comments: true
share: true
related: true
breadcrumbs: true
published: true
folder-url: assets/images/blog-safety-mechanisms-in-ai
---

Different types of Safety Mechanisms used in AI.


### GuardRails
Guardrails in AI are like those walls, but they're invisible! They're special rules and instructions that keep the AI safe and helpful.

Just like how walls stop you from falling, guardrails stop AI from:
- Saying mean or untrue things
- Giving out private information
- Doing things that could be harmful


![Guard Rails]({{site.baseurl}}/{{page.folder-url}}/guardrails.png)					


### RLHF (Reinforcement Learning from Human Feedback)
Training AI to align with human values by rewarding desired behavior and penalizing undesired ones.

![RLHF reward]({{site.baseurl}}/{{page.folder-url}}/RLHF-positive.png)					
![RLHF penalty]({{site.baseurl}}/{{page.folder-url}}/RLHF-negative.png)					


### Red Teaming
Testing AI systems by trying to make them break the rules or behave badly.

You play a role of a villian and attempt to do wrong things.
This way you try to break the security.

![Red Teaming]({{site.baseurl}}/{{page.folder-url}}/red-teaming.png)

### Other ways
- Implementing kill switches and emergency shutdown protocols
- Implementing Asimov's Three Laws in modern AI
- Blockchain-based AI safety verification

### Frameworks and Libraries
##### NeMo Guardrails (NVIDIA):
This is like a toolkit for building those safety rules. Imagine it as a set of building blocks that help developers easily add those "guardrails" to AI. It's especially good for AI that talks and writes, like chatbots.

#### Guardrails AI:
This is another open-source tool that's really good at checking and fixing the things AI creates. Think of it as a quality control expert for AI!

#### Microsoft's Responsible AI Toolbox:
This toolbox helps developers make sure the AI is fair and doesn't show any biases. It's like a fairness checker for AI.
