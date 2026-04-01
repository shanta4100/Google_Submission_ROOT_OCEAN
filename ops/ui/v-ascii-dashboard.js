/**
 * GLOBAL AI BLACK BOX — ASCII DASHBOARD
 * Safe, read‑only terminal dashboard for ROOT OCEAN
 */

const core = require("../../core/v-core-engine");
const coe = require("../mesh/v-continuous-operation-engine");
const agent = require("../mesh/v-sleeping-agent");
const ocean = require("../mesh/v-global-economy-master-ocean");

// Utility: horizontal line
function line() {
  return "------------------------------------------------------------";
}

// Utility: center text in 60 chars
function center(text) {
  const width = 60;
  const pad = Math.floor((width - text.length) / 2);
  return " ".repeat(Math.max(0, pad)) + text;
}

function renderOnce() {
  console.clear();

  const now = new Date().toISOString();

  // CORE INFO
  const coreInfo = core.tick({ mode: "info" });

  // COE HEALTH (sleep mode)
  const coeSleep = coe.tick({ mode: "sleep" });

  // AUTO MODE (best preset)
  const auto = core.tick({ mode: "auto" });

  // OCEAN O1 WELLBEING
  const oceanO1 = ocean.tick({ domain: "ocean", oceanPresetId: "O1" });

  let wb = null;
  if (oceanO1.output?.result?.wellbeing) {
    wb = oceanO1.output.result.wellbeing;
  } else if (oceanO1.output?.result?.scenario?.wellbeing) {
    wb = oceanO1.output.result.scenario.wellbeing;
  }

  // SLEEPING AGENT
  const agentSleep = agent.stopAndSleep();

  // RENDER
  console.log(center("GLOBAL AI BLACK BOX — ASCII DASHBOARD"));
  console.log(center(now));
  console.log(line());

  // CORE
  console.log("[CORE]");
  console.log(" Project :", coreInfo.output.config.projectName);
  console.log(" Version :", coreInfo.output.config.version);
  console.log(line());

  // COE
  console.log("[COE — Continuous Operation Engine]");
  console.log(" Status :", coeSleep.output.health.status);
  console.log(" Note   :", coeSleep.output.health.note);
  console.log(line());

  // AUTO MODE
  console.log("[AUTO MODE]");
  console.log(" Best Preset :", auto.output.bestPreset);
  console.log(" Score       :", auto.output.bestPresetScore);
  console.log(line());

  // OCEAN WELLBEING
  if (wb) {
    console.log("[OCEAN O1 — WELLBEING]");
    console.log(" Climate Risk :", wb.climateRisk);
    console.log(" Water Stress :", wb.waterStress);
    console.log(" Health Index :", wb.healthIndex);
    console.log(" Infrastructure:", wb.infrastructure);
    console.log(" Economy      :", wb.economy);
    console.log(line());
  }

  // AGENT
  console.log("[SLEEPING AGENT]");
  console.log(" Mode :", agentSleep.output.mode);
  console.log(" Note :", agentSleep.output.note);
  console.log(line());

  console.log("SAFE MODE: Read‑only dashboard. No operations executed.");
}

// Run immediately + refresh every 5 seconds
renderOnce();
setInterval(renderOnce, 5000);
