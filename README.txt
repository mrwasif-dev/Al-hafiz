AL-HAFIZ ISLAMIC RESEARCH INSTITUTE — WEBSITE PACKAGE
======================================================

WHAT'S INSIDE
-------------
- index.html, about.html, services.html, reviews.html,
  login.html, register.html, account.html, contact.html
- css/style.css            All styling, light & dark mode, animations
- js/main.js               Theme toggle, mobile menu, scroll animations
- js/auth.js                Login/Register/Account logic
- js/reviews.js             Reviews list + submission
- js/chatbot.js             The on-site assistant chatbot
- js/api-config.js          Where you point the site at your live backend
- backend/                  The Node.js + MongoDB server (see below)

HOW TO USE THE WEBSITE ITSELF
-------------------------------
Just open index.html in a browser, or upload the "site" folder
(everything except /backend) to any web host (Hostinger, GitHub
Pages, Netlify, cPanel, etc.) — no build step needed, it's plain
HTML/CSS/JS.

MAKING ACCOUNTS & REVIEWS A REAL, SHARED MongoDB DATABASE
-------------------------------------------------------------
As requested, accounts and reviews are backed by MongoDB — but a
website's front-end code can never connect to MongoDB directly (that
would expose your database to the public), so a small server sits in
between. That server is in the /backend folder.

Full step-by-step setup (creating a free MongoDB database, running
the server, and hosting it live) is in backend/README.txt. In short:
1. Create a free MongoDB Atlas database and get its connection string.
2. Put that connection string into backend/.env (copy from .env.example).
3. Deploy the /backend folder to a free host like Render.com or
   Railway.app (or your own server, if you have one).
4. Open js/api-config.js in this main folder and set API_BASE to your
   deployed backend's URL, e.g.
     const API_BASE = "https://al-hafiz-backend.onrender.com/api";
5. Re-upload js/api-config.js. From then on, every Register, Login,
   and Review is read from and written to your real MongoDB database
   — visible to every visitor, on every device.

Until you complete that setup, the website still works normally —
accounts and reviews are simply saved in each visitor's own browser
as a safe fallback, so nothing is broken while you set the backend up.

AI CHATBOT
-----------
The chatbot answers from a built-in list of your services rather than
a live AI API — it needs no setup and never costs anything to run. If
you'd like it to be a true AI assistant instead (more flexible, but
needs an API key kept on a server, never in front-end code), let me
know and I can add that to the /backend server too.

CONTACT DETAILS USED IN THE SITE
---------------------------------
WhatsApp (primary / floating button): 0306-1819635
WhatsApp (support chat number):        0332-0033563
WhatsApp Channel, TikTok and Facebook links are in the footer and
Contact page.
Founder name shown throughout: Hafiz Mahmood
