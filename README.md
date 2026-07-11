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

## Current Progress

### Step 1 - Connect to an MCP Server

- Launch the official Filesystem MCP Server.
- Connect using the official MCP SDK.
- Discover the tools exposed by the server.

Current output:

```text
✅ Connected!

Available tools:
- read_file
- write_file
- list_directory
- search_files
...
```

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

## Project Structure

```
understanding-mcp/
│
├── Sandbox/          # Test workspace
├── client.js         # MCP client
├── package.json
└── README.md
```

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
node client.js
```

## Resources

- https://modelcontextprotocol.io/
- https://github.com/modelcontextprotocol
- https://github.com/modelcontextprotocol/servers

## License

MIT