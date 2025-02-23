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

MCP is an open protocol that standardizes how applications provide context to LLMs. Think of MCP like a USB-C port for AI applications. Just as USB-C
Thats what the documentation says.

Model Context Protocol (MCP) is a structured approach to managing and organizing context for Large Language Models (LLMs) to ensure more reliable, consistent, and effective interactions.

- MCP Host
- MCP Server
- MCP Client

### Key Components of MCP Server

- A> Tools
- B> Resources


Tools - Discovery and Invocation.
Tool list
A tool name, description and the fields.

MCP Tool # 1
```
@mcp.tool
def find_available_flights(arrival, departure, date)
return {}
```

MCP Tool # 2
```
@mcp.tool
def find_hotel_room(city, start_date, end_date, beds)
return {}
```

MCP Tool # 3
```
@mcp.tool
def list_restaurants(city, cuisine)
return {}
```

How it works?
- A User sends the message like "I am looking for flight between Newyork and Mumbai on 25 February".
- Along with the message, we also send the tools list to the LLM. (all 3 tools in our case)
- The LLM responds with best matching tool and also the parameters. In this case (tool: find_available_flights, arrival: "Mumbai", departure: "New York", date: "25 February 2025")

References
- [Github MCP](https://github.com/modelcontextprotocol)
- [MCP Documentation](https://modelcontextprotocol.io/introduction)