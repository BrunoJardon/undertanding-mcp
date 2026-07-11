import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

const transport = new StdioClientTransport({
  command: "npx",
  args: [
    "-y",
    "@modelcontextprotocol/server-filesystem",
    "./sandbox"
  ]
});

const client = new Client({
  name: "mcp-client",
  version: "0.0.1"
});

await client.connect(transport);

console.log("Connected");

const result = await client.callTool({ name: "read_text_file", arguments: { path: "./README.md", tail: 1 } });

console.log("cat: ", result);