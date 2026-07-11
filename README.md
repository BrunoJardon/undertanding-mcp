# Understanding MCP

A small educational project to understand how the **Model Context Protocol (MCP)** works under the hood.

The goal is to learn how an AI agent communicates with external tools such as the filesystem, Git, or databases without relying on IDE extensions.

This project intentionally starts from the basics and gradually builds a complete local AI agent.

## Goals

- Learn the MCP protocol.
- Understand how MCP clients and servers communicate.
- Learn how LLMs interact with external tools.
- Connect a local LLM (LM Studio) with MCP.
- Build a simple coding agent from scratch.

## Planned Steps

- [x] Connect to the Filesystem MCP Server
- [ ] Call MCP tools manually
- [ ] Read project files
- [ ] Write files
- [ ] Search the workspace
- [ ] Connect LM Studio
- [ ] Enable Tool Calling
- [ ] Build a simple autonomous agent
- [ ] Add memory
- [ ] Experiment with LoRA for Tool Use

## Requirements

- Node.js 22+
- npm
- `@modelcontextprotocol/sdk`

Install dependencies:

```bash
npm install
```

Run:

```bash
npm dev
```

## License

MIT