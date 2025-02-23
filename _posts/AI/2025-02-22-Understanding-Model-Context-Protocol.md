---
title: Understanding Model Context Protocol (MCP)
author_profile: true
author: Sandesh Soni
category: Artificial Intelligence
tags:
- mcp
- mcp-server
read_time: false
comments: true
share: true
related: true
breadcrumbs: true
published: true
folder-url: assets/images/blog-mcp
---

Model Context Protocol (MCP) is a structured approach to managing and organizing context for Large Language Models (LLMs) to ensure more reliable, consistent, and effective interactions.

MCP Host
MCP Server
MCP Client

### Key Components of MCP Server

- tools
Tool list
A tool name, description and the fields.

How it works?
- A User sends the message like "I am looking for flight between Newyork and Mumbai on 25 February".
- Along with the message, we also send the tools list to the LLM.
- The LLM responds with best matching tool and also the parameters.

References
- [Github MCP](https://github.com/modelcontextprotocol)
