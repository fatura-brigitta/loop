const fs = require("fs");

const input = JSON.parse(fs.readFileSync("payment_sessions.json", "utf8"));

function toOid(value) {
  if (value === null || value === undefined) return null;

  if (typeof value === "object") {
    if ("$oid" in value) {
      return value.$oid === null ? null : { $oid: value.$oid };
    }
    return null;
  }

  return { $oid: value };
}

function toDate(value) {
  if (value === null || value === undefined) return null;

  if (typeof value === "object" && "$date" in value) {
    return value;
  }

  return { $date: value };
}

const output = input.map(item => ({
  _id: toOid(item._id ?? item.id),
  user_id: toOid(item.user_id),
  screening_id: toOid(item.screening_id),

  chair_ids: Array.isArray(item.chair_ids)
    ? item.chair_ids.map(toOid).filter(Boolean)
    : [],

  status: item.status,

  created_at: toDate(item.created_at),

  ticket_type_id: toOid(item.ticket_type_id),

  selected_ticket_types: item.selected_ticket_types ?? []
}));

fs.writeFileSync("payment_sessions_out.json", JSON.stringify(output, null, 2));

console.log("Kész: payment_sessions_out.json");