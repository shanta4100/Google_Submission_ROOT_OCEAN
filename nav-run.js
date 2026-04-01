// nav-run.js
// FINAL unified navigation + ASCII UI runner
// This is the ONLY file you run from Bash.
// Example:
//   node nav-run.js "take me to the beach" SESSION123 dream

const ui = require("./ops/ui/v-voice-nav-ui-module");

// Read command-line arguments
const voice = process.argv[2] || "";
const token = process.argv[3] || "";
const mode = process.argv[4] || "sleep";

// Generate ASCII UI panel
const panel = ui.generateAsciiUI({
  userName: "Arifur",
  faceSessionToken: token,
  lastVoiceText: voice,
  systemMode: mode
});

// Output to terminal
console.log(panel);
node nav-run.js "take me to the beach" SESSION123 awake
node nav-run.js "take me to the stadium" SESSION123 awake
node nav-run.js "show me the status" SESSION123 sleep
node nav-run.js "auto mode" SESSION123 dream

