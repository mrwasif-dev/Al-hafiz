/* =====================================================================
   API CONFIG — point this at your deployed backend (see /backend
   folder for the server + MongoDB setup instructions).

   Until you deploy the backend and set this, the website automatically
   falls back to saving accounts/reviews in each visitor's own browser,
   so everything still works while you set it up.
   ===================================================================== */

const API_BASE = "REPLACE_ME"; // e.g. "https://al-hafiz-backend.onrender.com/api"

window.API_BASE = API_BASE;
window.apiReady = function(){
  return window.API_BASE && window.API_BASE !== "REPLACE_ME";
};
