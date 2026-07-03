/** Mock data of the accounts */

const accounts = {
  "1001": {
    holder_name: "Rajesh Kumar",
    account_type: "Savings",
    currency: "INR",
    balance: 245680.50,
    available_balance: 240680.50,
    masked_number: "4521"
  },
  "2001": {
    holder_name: "Priya Sharma",
    account_type: "Savings",
    currency: "INR",
    balance: 532100.75,
    available_balance: 530000.00,
    masked_number: "9102"
  }
};

/** discovery tools */
const TOOLS = [{
  name: "get_account_balance",
  description: "Retrieve current and available balance for an account",
  inputSchema: {
    type: "object",
    properties: {
      account_number: {
        type: "string",
        description: "The account number (e.g., 1001)"
      }
    },
    required: ["account_number"]
  }
}];

/** Three MCP methods using JSON RPC Messaging framework*/
function handleJsonRpc(body) {
  const { method, id, params } = body;

  if (method === "initialize") {
    return {
      jsonrpc: "2.0", id,
      result: {
        protocolVersion: "2024-11-05",
        capabilities: { tools: { listChanged: false }},
        serverInfo: { name: "smartbank", version: "1.0.0" }
      }
    };
  }

  if (method === "tools/list") {
    return { jsonrpc: "2.0", id, result: { tools: TOOLS } };
  }

  if (method === "tools/call") {
    const acc = accounts[params.arguments.account_number];
    const data = acc
      ? { balance: acc.balance, holder_name: acc.holder_name }
      : { error: "Account not found" };
    return {
      jsonrpc: "2.0", id,
      result: { content: [{ type: "text", text: JSON.stringify(data) }] }
    };
  }

  return { jsonrpc: "2.0", id, result: {} };
}

/** Entry point for Vercel*/
export default function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Mcp-Session-Id,MCP-Protocol-Version");

    if (req.method === "OPTIONS") return res.status(200).end();
    if (req.method === "GET") return res.json({
        status: "ok"
    });
    if (!req.body.id) return res.status(202).end();
    return res.json(handleJsonRpc(req.body));
}

/** Import this into github under /api/core-banking.js */
/** add package.json with {"name":"name of github repo","version":"1.0.0","private":true} */
/** check API status - https://mcpserver-psi.vercel.app/api/core-banking (this should be ok)*/
/* you are ready to import in Artemis */ 
