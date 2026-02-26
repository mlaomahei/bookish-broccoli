// Broccoli fetcher v2 — now with actual data
const BASE_URL = "https://api.example.com/v2";

async function getBroccoli(variety = "standard") {
  const res = await fetch(`${BASE_URL}/broccoli?variety=${variety}`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

module.exports = { getBroccoli };
