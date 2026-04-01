// nav-run.js
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

// Output to terminal
console.log(panel);
