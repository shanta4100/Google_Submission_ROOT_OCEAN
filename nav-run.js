// nav-run.js
// Bash-friendly runner for voice navigation + ASCII UI

const ui = require("./ops/ui/v-voice-nav-ui-module");

const voice = process.argv[2] || "";
const token = process.argv[3] || "";
const mode = process.argv[4] || "sleep";

const panel = ui.generateAsciiUI({
  userName: process.env.USER_NAME || "Arifur",
// FINAL unified navigation + ASCII UI runner (secure version)

const ui = require("./ops/ui/v-voice-nav-ui-module");

// Read command-line arguments
const voice = process.argv[2] || "";
const mode = process.argv[3] || "sleep";

// Read session token from environment variable
const token = process.env.FACE_SESSION_TOKEN || "";

// Generate ASCII UI panel
const panel = ui.generateAsciiUI({
  userName: "Arifur",
  faceSessionToken: token,
  lastVoiceText: voice,
  systemMode: mode
});

console.log(panel);
// Output to terminal
console.log(panel);
FACE_SESSION_TOKEN=bab485346ef427c9f2ce81b48e203ee55b767736 \
node nav-run.js "take me to the beach" awake
