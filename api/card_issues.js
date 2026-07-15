/** Mock data of banking card related issues */

const cardIssues = {
  "CARD-001": {
    issue_id: "CARD-001",
    category: "Card Activation",
    issue_title: "New card not activated",
    customer_symptoms: [
      "Customer recently received a new debit/credit card",
      "Card is declined on every transaction attempt",
      "Activation confirmation SMS or email not received"
    ],
    likely_causes: [
      "Activation request is still pending",
      "Customer identity verification is incomplete",
      "Incorrect card number mapped to the account",
      "Backend provisioning delay"
    ],
    recommended_steps: [
      "Verify customer identity and account status",
      "Confirm the card number and expiry on file",
      "Check whether activation is pending, failed, or completed",
      "Guide customer through app/IVR activation if not yet triggered",
      "Raise a provisioning ticket if activation failed"
    ],
    severity: "High",
    customer_impact: "Customer cannot use the new card for any transaction",
    escalation_required: true,
    escalation_condition: "Escalate if activation is pending beyond the standard SLA or card details do not match the account."
  },
  "CARD-002": {
    issue_id: "CARD-002",
    category: "Card Status",
    issue_title: "Card blocked or suspended",
    customer_symptoms: [
      "Card is declined at POS, ATM, or online",
      "App shows card status as blocked or suspended",
      "Customer did not request a block"
    ],
    likely_causes: [
      "Customer or someone on the account requested a block",
      "Card was auto-blocked due to suspected fraud",
      "Account suspended for non-payment or compliance hold",
      "Multiple failed PIN attempts triggered a lock"
    ],
    recommended_steps: [
      "Verify customer identity",
      "Check the reason code for the block on the account system",
      "Explain the block reason to the customer",
      "Unblock the card if the customer confirms and reason permits",
      "Escalate to fraud/compliance team if block was fraud- or compliance-related"
    ],
    severity: "High",
    customer_impact: "Complete loss of card usage until resolved",
    escalation_required: true,
    escalation_condition: "Escalate if the block reason is fraud, compliance, or unclear from account notes."
  },
  "CARD-003": {
    issue_id: "CARD-003",
    category: "Transaction Decline",
    issue_title: "Card declined at point of sale",
    customer_symptoms: [
      "Card is declined at a merchant terminal",
      "Customer receives 'insufficient funds' or 'do not honor' message",
      "Transaction fails despite sufficient balance"
    ],
    likely_causes: [
      "Insufficient balance or credit limit exceeded",
      "Daily transaction limit reached",
      "Card marked inactive or expired",
      "Merchant category blocked on the card",
      "Network or issuer-side temporary decline"
    ],
    recommended_steps: [
      "Check available balance or credit limit",
      "Check daily spend limit and merchant category restrictions",
      "Confirm card status and expiry date",
      "Ask customer to retry after a few minutes",
      "Raise a switch/network ticket if repeated declines are unexplained"
    ],
    severity: "Medium",
    customer_impact: "Customer cannot complete purchases",
    escalation_required: true,
    escalation_condition: "Escalate if balance, limits, and card status are all normal but decline persists."
  },
  "CARD-004": {
    issue_id: "CARD-004",
    category: "PIN Issues",
    issue_title: "Card PIN forgotten or locked",
    customer_symptoms: [
      "Customer cannot recall the card PIN",
      "Card is locked after multiple incorrect PIN attempts",
      "ATM retains the card after wrong PIN entries"
    ],
    likely_causes: [
      "Customer forgot the PIN",
      "Incorrect PIN entered multiple times",
      "PIN lock security feature triggered"
    ],
    recommended_steps: [
      "Verify the customer's identity",
      "Guide customer through PIN reset via app, IVR, or ATM",
      "Advise customer not to guess the PIN repeatedly",
      "Unlock the card once a valid PIN reset is confirmed",
      "Arrange card replacement if the ATM retained the card"
    ],
    severity: "Medium",
    customer_impact: "Card access is blocked until PIN is reset",
    escalation_required: false,
    escalation_condition: "Escalate only if PIN reset fails repeatedly or account records are inconsistent."
  },
  "CARD-005": {
    issue_id: "CARD-005",
    category: "Lost or Stolen",
    issue_title: "Card reported lost or stolen",
    customer_symptoms: [
      "Customer cannot locate the card",
      "Customer suspects the card was stolen",
      "Customer notices unfamiliar transactions"
    ],
    likely_causes: [
      "Card was misplaced by the customer",
      "Card was stolen",
      "Unauthorized use following loss"
    ],
    recommended_steps: [
      "Immediately verify customer identity",
      "Block the card without delay",
      "Review recent transactions for unauthorized activity",
      "Initiate a replacement card request",
      "Guide customer on disputing any unauthorized charges"
    ],
    severity: "Critical",
    customer_impact: "Risk of financial loss from unauthorized use",
    escalation_required: true,
    escalation_condition: "Always escalate to fraud team if unauthorized transactions are found after loss."
  },
  "CARD-006": {
    issue_id: "CARD-006",
    category: "Card Delivery",
    issue_title: "Card not received by customer",
    customer_symptoms: [
      "Customer ordered a new or replacement card",
      "Expected delivery date has passed",
      "Tracking shows delivered but customer has not received it"
    ],
    likely_causes: [
      "Courier delay",
      "Incorrect delivery address on file",
      "Card delivered to another occupant or lost in transit",
      "Card returned to issuer due to failed delivery"
    ],
    recommended_steps: [
      "Confirm the delivery address on the account",
      "Check courier tracking status",
      "Ask if anyone else at the address may have received it",
      "Block the original card if delivery cannot be confirmed as safe",
      "Raise a re-dispatch request with updated address if required"
    ],
    severity: "Medium",
    customer_impact: "Customer cannot use the ordered card and risks it being intercepted",
    escalation_required: true,
    escalation_condition: "Escalate if the card is confirmed delivered but the customer never received it."
  },
  "CARD-007": {
    issue_id: "CARD-007",
    category: "Card Validity",
    issue_title: "Card expired",
    customer_symptoms: [
      "Card is declined with an 'expired card' message",
      "Customer has not received a renewed card",
      "Recurring payments on the card start failing"
    ],
    likely_causes: [
      "Card has passed its expiry date",
      "Renewal card was not dispatched",
      "Renewal card is pending activation"
    ],
    recommended_steps: [
      "Confirm the card's expiry date on record",
      "Check whether a renewal card has been dispatched",
      "Guide customer to activate the renewal card if received",
      "Raise a renewal card issuance request if none is in progress",
      "Advise customer to update expiry on recurring payment merchants"
    ],
    severity: "Medium",
    customer_impact: "Customer cannot transact until a valid card is issued and activated",
    escalation_required: false,
    escalation_condition: "Escalate if renewal was expected but not dispatched within SLA."
  },
  "CARD-008": {
    issue_id: "CARD-008",
    category: "Billing Dispute",
    issue_title: "Duplicate or incorrect charge on card",
    customer_symptoms: [
      "Same transaction appears twice in statement",
      "Charged amount differs from the amount agreed at purchase",
      "Customer disputes a specific merchant charge"
    ],
    likely_causes: [
      "Merchant processing error",
      "Network-level duplicate authorization",
      "Currency conversion or surcharge misapplied",
      "Pending authorization not reversed correctly"
    ],
    recommended_steps: [
      "Pull the transaction details and compare with customer's claim",
      "Check for a matching reversal or pending-to-settled mismatch",
      "Log a formal dispute/chargeback request if discrepancy confirmed",
      "Inform customer of the dispute reference and expected timeline",
      "Provide provisional credit if policy allows while dispute is investigated"
    ],
    severity: "Medium",
    customer_impact: "Customer is incorrectly charged pending resolution",
    escalation_required: true,
    escalation_condition: "Escalate to the disputes/chargeback team for formal investigation."
  },
  "CARD-009": {
    issue_id: "CARD-009",
    category: "Fraud and Security",
    issue_title: "Unauthorized transaction on card",
    customer_symptoms: [
      "Customer sees a transaction they did not make",
      "Customer still has physical possession of the card",
      "Alert received for a transaction customer denies"
    ],
    likely_causes: [
      "Card details compromised online or via skimming",
      "Card cloning",
      "Account takeover",
      "Family member or authorized user made the transaction unknowingly reported"
    ],
    recommended_steps: [
      "Immediately verify customer identity using enhanced checks",
      "Block the card to prevent further unauthorized use",
      "Review recent transaction history in detail with the customer",
      "Initiate a fraud investigation and provisional dispute credit if eligible",
      "Issue a replacement card with new number"
    ],
    severity: "Critical",
    customer_impact: "Direct financial loss and risk of further fraud",
    escalation_required: true,
    escalation_condition: "Always escalate suspected unauthorized transactions to the fraud team immediately."
  },
  "CARD-010": {
    issue_id: "CARD-010",
    category: "Card Replacement",
    issue_title: "Card replacement request",
    customer_symptoms: [
      "Card is damaged, demagnetized, or not reading at terminals",
      "Customer wants a card number reissued after a compromise",
      "Chip or magnetic stripe is not functioning"
    ],
    likely_causes: [
      "Physical wear and tear",
      "Chip damage",
      "Previous fraud or loss event requiring reissue",
      "Customer-requested preventive replacement"
    ],
    recommended_steps: [
      "Verify customer identity and current card status",
      "Confirm the reason for replacement",
      "Initiate the replacement card request",
      "Inform customer of expected delivery timeline",
      "Advise on safe disposal of the old card once the new one is activated"
    ],
    severity: "Medium",
    customer_impact: "Temporary inconvenience until the new card arrives and is activated",
    escalation_required: false,
    escalation_condition: "Escalate only if the replacement request fails to process in the account system."
  },
  "CARD-011": {
    issue_id: "CARD-011",
    category: "International Usage",
    issue_title: "Card not working for international transactions",
    customer_symptoms: [
      "Card declined while travelling abroad",
      "Online purchase from an international merchant fails",
      "Card worked domestically but not overseas"
    ],
    likely_causes: [
      "International usage is disabled on the card",
      "Foreign transaction limit not set or too low",
      "Card network not supported at merchant location",
      "Suspected fraud trigger on unusual location activity"
    ],
    recommended_steps: [
      "Check whether international usage is enabled on the card",
      "Confirm foreign transaction and ATM withdrawal limits",
      "Enable international usage if customer confirms travel plans",
      "Check for any fraud-related hold on overseas activity",
      "Advise customer to inform the bank ahead of future travel"
    ],
    severity: "Medium",
    customer_impact: "Customer cannot transact while travelling",
    escalation_required: false,
    escalation_condition: "Escalate if international usage is enabled and limits are sufficient but transactions still fail."
  },
  "CARD-012": {
    issue_id: "CARD-012",
    category: "Online Transactions",
    issue_title: "Online transaction failure",
    customer_symptoms: [
      "Card is declined during online checkout",
      "OTP for online transaction is not received",
      "Payment gateway shows a generic failure message"
    ],
    likely_causes: [
      "Online/e-commerce transactions disabled on the card",
      "OTP delivery delay or failure",
      "Incorrect CVV or expiry entered",
      "Merchant or payment gateway issue"
    ],
    recommended_steps: [
      "Confirm online transactions are enabled on the card",
      "Check OTP delivery status and registered mobile number",
      "Verify the customer entered correct card details",
      "Ask customer to retry after a few minutes",
      "Raise a gateway-level ticket if failures are merchant-specific and widespread"
    ],
    severity: "Medium",
    customer_impact: "Customer cannot complete online purchases",
    escalation_required: true,
    escalation_condition: "Escalate if card settings and OTP delivery are normal but failures persist."
  },
  "CARD-013": {
    issue_id: "CARD-013",
    category: "Contactless Payments",
    issue_title: "Contactless or tap-to-pay not working",
    customer_symptoms: [
      "Tap payment is not accepted at terminal",
      "Customer is repeatedly asked to insert the chip instead",
      "Contactless previously worked but has now stopped"
    ],
    likely_causes: [
      "Contactless limit exceeded, requiring PIN entry",
      "Contactless feature disabled on the card",
      "Card's contactless antenna damaged",
      "Terminal-side contactless malfunction"
    ],
    recommended_steps: [
      "Check whether the contactless limit has been reached",
      "Confirm contactless payments are enabled on the card",
      "Ask customer to try a different terminal",
      "Recommend chip-and-PIN as a temporary workaround",
      "Recommend card replacement if antenna damage is suspected"
    ],
    severity: "Low",
    customer_impact: "Customer must use an alternate payment method temporarily",
    escalation_required: false,
    escalation_condition: "Escalate only if replacement card also fails contactless consistently."
  },
  "CARD-014": {
    issue_id: "CARD-014",
    category: "Account Linking",
    issue_title: "Card linked to incorrect account",
    customer_symptoms: [
      "Card transactions reflect on the wrong account statement",
      "Customer sees someone else's card linked to their account",
      "Balance shown does not match the card being used"
    ],
    likely_causes: [
      "Data entry error during card issuance",
      "Account merge or migration error",
      "Card mapping not updated after account change"
    ],
    recommended_steps: [
      "Verify customer identity and account details",
      "Cross-check the card number against account mapping records",
      "Correct the card-to-account link in the core system",
      "Confirm with customer that the fix reflects correctly",
      "Raise a backend data-correction ticket if mapping cannot be fixed directly"
    ],
    severity: "High",
    customer_impact: "Customer may see incorrect balances or unauthorized access risk",
    escalation_required: true,
    escalation_condition: "Escalate immediately as this may involve a data integrity or security issue."
  },
  "CARD-015": {
    issue_id: "CARD-015",
    category: "Credit Limit",
    issue_title: "Credit limit lower than expected or transaction blocked",
    customer_symptoms: [
      "Transaction declined despite believing sufficient limit is available",
      "Customer disputes the credit limit shown in the app",
      "Recent limit reduction not communicated to customer"
    ],
    likely_causes: [
      "Credit limit was reduced due to risk review",
      "Pending authorizations reducing available limit",
      "Customer misreading available vs total limit",
      "Limit increase request still pending approval"
    ],
    recommended_steps: [
      "Explain the difference between total and available credit limit",
      "Check for pending authorizations holding up the limit",
      "Review any recent limit change and the reason on file",
      "Guide customer through a limit review or increase request if eligible",
      "Escalate to credit/risk team if the reduction reason is unclear"
    ],
    severity: "Medium",
    customer_impact: "Customer cannot make purchases up to the amount they expected",
    escalation_required: true,
    escalation_condition: "Escalate if the limit change reason is not visible or the customer disputes the review outcome."
  },
  "CARD-016": {
    issue_id: "CARD-016",
    category: "EMI Conversion",
    issue_title: "EMI conversion request failed",
    customer_symptoms: [
      "Customer tried converting a purchase to EMI but request failed",
      "EMI does not reflect in the statement after conversion",
      "Interest or tenure shown differs from what was selected"
    ],
    likely_causes: [
      "Transaction not eligible for EMI conversion",
      "EMI conversion window has lapsed",
      "System processing delay",
      "Incorrect tenure or plan selected"
    ],
    recommended_steps: [
      "Confirm transaction eligibility and conversion window",
      "Check the EMI request status in the account system",
      "Reprocess the conversion if it failed due to a system error",
      "Clarify applicable interest rate and tenure with the customer",
      "Raise a backend ticket if conversion is stuck in processing"
    ],
    severity: "Low",
    customer_impact: "Customer is billed as a full charge instead of EMI",
    escalation_required: false,
    escalation_condition: "Escalate if the conversion remains stuck beyond the standard processing SLA."
  },
  "CARD-017": {
    issue_id: "CARD-017",
    category: "Virtual Card",
    issue_title: "Virtual card generation or usage issue",
    customer_symptoms: [
      "Virtual card fails to generate in the app",
      "Virtual card details are not visible",
      "Virtual card is declined for online use"
    ],
    likely_causes: [
      "App or backend error during virtual card generation",
      "Virtual card feature not enabled for the account",
      "Virtual card linked to an inactive primary card",
      "Spending limit set too low on the virtual card"
    ],
    recommended_steps: [
      "Confirm virtual card feature eligibility on the account",
      "Check status of the linked primary card",
      "Ask customer to regenerate the virtual card via the app",
      "Verify the spending limit set on the virtual card",
      "Raise a backend ticket if generation consistently fails"
    ],
    severity: "Low",
    customer_impact: "Customer cannot use a virtual card for online transactions",
    escalation_required: false,
    escalation_condition: "Escalate if virtual card generation fails repeatedly despite eligibility."
  },
  "CARD-018": {
    issue_id: "CARD-018",
    category: "Card Renewal",
    issue_title: "Renewed card not dispatched",
    customer_symptoms: [
      "Current card is nearing or past expiry",
      "Customer has not received a renewal notification",
      "App shows no renewal card in progress"
    ],
    likely_causes: [
      "Auto-renewal process delay",
      "Address verification pending",
      "Customer opted out of auto-renewal previously",
      "Renewal blocked due to account status"
    ],
    recommended_steps: [
      "Check auto-renewal status and eligibility",
      "Confirm delivery address is current",
      "Check for any account holds preventing renewal",
      "Manually trigger renewal card issuance if eligible",
      "Inform customer of expected delivery timeline"
    ],
    severity: "Medium",
    customer_impact: "Customer risks having no valid card at expiry",
    escalation_required: true,
    escalation_condition: "Escalate if renewal is eligible but not triggered within SLA before expiry."
  },
  "CARD-019": {
    issue_id: "CARD-019",
    category: "Rewards and Cashback",
    issue_title: "Reward points or cashback not credited",
    customer_symptoms: [
      "Expected reward points do not reflect after a transaction",
      "Cashback offer applied at purchase but not credited later",
      "Points balance appears lower than expected"
    ],
    likely_causes: [
      "Reward crediting cycle has not yet processed",
      "Transaction category excluded from the reward program",
      "Offer terms and conditions were not fully met",
      "System error in reward calculation"
    ],
    recommended_steps: [
      "Confirm the reward crediting cycle timeline",
      "Check transaction category against program eligibility",
      "Verify the offer's terms and conditions were met",
      "Recalculate and manually credit if a system error is confirmed",
      "Raise a rewards-platform ticket if the discrepancy is unresolved"
    ],
    severity: "Low",
    customer_impact: "Customer does not receive the expected reward value",
    escalation_required: false,
    escalation_condition: "Escalate if points remain uncredited after the standard crediting cycle has passed."
  },
  "CARD-020": {
    issue_id: "CARD-020",
    category: "Card Closure",
    issue_title: "Card closure request",
    customer_symptoms: [
      "Customer wants to permanently close the card",
      "Customer wants to confirm no dues remain before closure",
      "Closure request submitted but card still shows active"
    ],
    likely_causes: [
      "Outstanding balance preventing closure",
      "Closure request pending manual processing",
      "Auto-payments or subscriptions still linked to the card",
      "Reward points pending redemption before closure"
    ],
    recommended_steps: [
      "Confirm no outstanding balance remains on the card",
      "Check for linked auto-payments or subscriptions",
      "Advise customer to redeem or forfeit pending reward points",
      "Process the closure request once all conditions are met",
      "Confirm closure completion with the customer in writing"
    ],
    severity: "Low",
    customer_impact: "Card remains active and billable until closure is completed",
    escalation_required: false,
    escalation_condition: "Escalate if closure has been requested but remains unprocessed beyond SLA."
  }
};

/** Mock data of customer raised card issues */
const customerCardIssues = [
  {
    custid: "CUST2001",
    card_issue_id: "CARD-003",
    description: "Card declined at a grocery store despite sufficient balance.",
    status: "active"
  },
  {
    custid: "CUST2002",
    card_issue_id: "CARD-009",
    description: "Customer noticed an unfamiliar transaction while still holding the card.",
    status: "active"
  },
  {
    custid: "CUST2005",
    card_issue_id: "CARD-011",
    description: "Card not working for payments while travelling abroad.",
    status: "active"
  },
  {
    custid: "CUST2009",
    card_issue_id: "CARD-007",
    description: "Card declined with an expired card message; renewal not received.",
    status: "resolved"
  },
  {
    custid: "CUST2010",
    card_issue_id: "CARD-012",
    description: "Online checkout fails and OTP is not received.",
    status: "active"
  }
];

/** discovery tools */
const TOOLS = [
  {
    name: "get_card_issue_details",
    description: "Retrieve details for a banking card issue by issue id",
    inputSchema: {
      type: "object",
      properties: {
        card_issue_id: {
          type: "string",
          description: "The card issue id (e.g., CARD-001)"
        }
      },
      required: ["card_issue_id"]
    }
  },
  {
    name: "get_card_issue_by_title",
    description: "Retrieve details for a banking card issue by issue title",
    inputSchema: {
      type: "object",
      properties: {
        issue_title: {
          type: "string",
          description: "The card issue title (e.g., New card not activated)"
        }
      },
      required: ["issue_title"]
    }
  },
  {
    name: "list_card_issues",
    description: "List all available banking card issues with summary details",
    inputSchema: {
      type: "object",
      properties: {}
    }
  },
  {
    name: "get_customer_card_issues",
    description: "Retrieve customer raised card issues by customer id",
    inputSchema: {
      type: "object",
      properties: {
        custid: {
          type: "string",
          description: "The customer id (e.g., CUST2001)"
        }
      },
      required: ["custid"]
    }
  },
  {
    name: "add_customer_card_issue",
    description: "Add a new customer raised card issue",
    inputSchema: {
      type: "object",
      properties: {
        custid: {
          type: "string",
          description: "The customer id (e.g., CUST2001)"
        },
        card_issue_id: {
          type: "string",
          description: "The card issue id from the issue catalog (e.g., CARD-003)"
        },
        description: {
          type: "string",
          description: "The customer symptom or complaint description"
        },
        status: {
          type: "string",
          enum: ["active", "resolved"],
          description: "Current issue status"
        }
      },
      required: ["custid", "card_issue_id", "description", "status"]
    }
  },
  {
    name: "update_customer_card_issue_status",
    description: "Update the status of a customer raised card issue",
    inputSchema: {
      type: "object",
      properties: {
        custid: {
          type: "string",
          description: "The customer id (e.g., CUST2001)"
        },
        card_issue_id: {
          type: "string",
          description: "The card issue id to update (e.g., CARD-003)"
        },
        status: {
          type: "string",
          enum: ["active", "resolved"],
          description: "Updated issue status"
        }
      },
      required: ["custid", "card_issue_id", "status"]
    }
  }
];

function listCardIssues() {
  return Object.values(cardIssues).map((issue) => ({
    issue_id: issue.issue_id,
    category: issue.category,
    issue_title: issue.issue_title,
    severity: issue.severity,
    escalation_required: issue.escalation_required
  }));
}

function findCardIssueByTitle(issueTitle) {
  const normalizedTitle = String(issueTitle || "").trim().toLowerCase();
  return Object.values(cardIssues).find(
    (issue) => issue.issue_title.toLowerCase() === normalizedTitle
  );
}

function normalizeCustomerIssueArgs(args) {
  return {
    custid: String(args.custid || "").trim().toUpperCase(),
    card_issue_id: String(args.card_issue_id || "").trim().toUpperCase(),
    description: String(args.description || "").trim(),
    status: String(args.status || "").trim().toLowerCase()
  };
}

function isValidStatus(status) {
  return ["active", "resolved"].includes(status);
}

function getCustomerCardIssues(custid) {
  const normalizedCustid = String(custid || "").trim().toUpperCase();
  return customerCardIssues.filter((issue) => issue.custid === normalizedCustid);
}

function addCustomerCardIssue(args) {
  const newIssue = normalizeCustomerIssueArgs(args);

  if (!newIssue.custid || !newIssue.card_issue_id || !newIssue.description || !newIssue.status) {
    return { error: "custid, card_issue_id, description, and status are required" };
  }
  if (!cardIssues[newIssue.card_issue_id]) {
    return { error: "Card issue id not found in catalog" };
  }
  if (!isValidStatus(newIssue.status)) {
    return { error: "Status must be active or resolved" };
  }

  customerCardIssues.push(newIssue);
  return { message: "Customer card issue added", issue: newIssue };
}

function updateCustomerCardIssueStatus(args) {
  const updatedIssue = normalizeCustomerIssueArgs(args);

  if (!updatedIssue.custid || !updatedIssue.card_issue_id || !updatedIssue.status) {
    return { error: "custid, card_issue_id, and status are required" };
  }
  if (!isValidStatus(updatedIssue.status)) {
    return { error: "Status must be active or resolved" };
  }

  const existingIssue = customerCardIssues.find(
    (issue) => issue.custid === updatedIssue.custid && issue.card_issue_id === updatedIssue.card_issue_id
  );

  if (!existingIssue) {
    return { error: "Customer card issue not found" };
  }

  existingIssue.status = updatedIssue.status;
  return { message: "Customer card issue status updated", issue: existingIssue };
}

/** Three MCP methods using JSON RPC Messaging framework */
function handleJsonRpc(body) {
  const { method, id, params } = body;

  if (method === "initialize") {
    return {
      jsonrpc: "2.0", id,
      result: {
        protocolVersion: "2024-11-05",
        capabilities: { tools: { listChanged: false }},
        serverInfo: { name: "banking-card-issues", version: "1.0.0" }
      }
    };
  }

  if (method === "tools/list") {
    return { jsonrpc: "2.0", id, result: { tools: TOOLS } };
  }

  if (method === "tools/call") {
    const toolName = params.name;
    const args = params.arguments || {};
    let data;

    if (toolName === "list_card_issues") {
      data = listCardIssues();
    } else if (toolName === "get_card_issue_details") {
      data = cardIssues[args.card_issue_id] || { error: "Card issue not found" };
    } else if (toolName === "get_card_issue_by_title") {
      data = findCardIssueByTitle(args.issue_title) || { error: "Card issue not found" };
    } else if (toolName === "get_customer_card_issues") {
      data = getCustomerCardIssues(args.custid);
    } else if (toolName === "add_customer_card_issue") {
      data = addCustomerCardIssue(args);
    } else if (toolName === "update_customer_card_issue_status") {
      data = updateCustomerCardIssueStatus(args);
    } else {
      data = { error: "Tool not found" };
    }

    return {
      jsonrpc: "2.0", id,
      result: { content: [{ type: "text", text: JSON.stringify(data) }] }
    };
  }

  return { jsonrpc: "2.0", id, result: {} };
}

/** Entry point for Vercel */
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
