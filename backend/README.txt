AL-HAFIZ BACKEND — MongoDB API SERVER
=======================================
This is the small server that lets your website's Login/Register
accounts and Reviews be stored in a REAL, SHARED MongoDB database —
visible to every visitor, on every device. The website's HTML/JS
files talk to this server; this server talks to MongoDB.

WHY A SEPARATE SERVER IS NEEDED
--------------------------------
MongoDB cannot be connected to directly from a website's front-end
code — that would expose your database to anyone visiting the site.
This small Node.js server sits safely in between: the website calls
it, and it's the only thing that talks to MongoDB.

STEP 1 — CREATE A FREE MONGODB DATABASE
-----------------------------------------
1. Go to https://www.mongodb.com/cloud/atlas/register and create a
   free account.
2. Create a free "M0" cluster (any name, any nearby region).
3. Under "Database Access", create a database user with a username
   and password (save these).
4. Under "Network Access", click "Add IP Address" > "Allow access
   from anywhere" (0.0.0.0/0) — simplest option for getting started.
5. Click "Connect" on your cluster > "Drivers" > copy the connection
   string. It looks like:
   mongodb+srv://USERNAME:PASSWORD@cluster0.xxxxx.mongodb.net/...
   Replace USERNAME and PASSWORD with the ones from step 3.

STEP 2 — CONFIGURE THIS SERVER
--------------------------------
1. Copy ".env.example" to a new file named ".env" in this same folder.
2. Paste your MongoDB connection string into MONGODB_URI.
3. Set JWT_SECRET to any long random text (e.g. mash your keyboard).
4. Leave PORT as is unless your host tells you otherwise.
5. Once your website is live, set ALLOWED_ORIGIN to its exact URL.

STEP 3 — RUN IT
-----------------
Locally (to test): needs Node.js installed.
  cd backend
  npm install
  npm start
You should see "Connected to MongoDB" and "Server running on port 5000".

To host it live for free, any of these work well:
  - Render.com     (Web Service, connect this backend folder, build
                     command "npm install", start command "npm start")
  - Railway.app     (similar — deploy the backend folder)
  - Any VPS/cPanel host that supports Node.js

After deploying, you'll get a live URL like:
  https://al-hafiz-backend.onrender.com

STEP 4 — CONNECT THE WEBSITE TO THIS SERVER
----------------------------------------------
Open js/api-config.js (in the main website folder, not this one) and
set API_BASE to your live backend URL + "/api", e.g.:
  const API_BASE = "https://al-hafiz-backend.onrender.com/api";
Save and re-upload that file. Login, Register, and Reviews will now
read and write to your real MongoDB database for every visitor.

Until you complete these steps, the website keeps working normally —
accounts and reviews are simply saved in each visitor's own browser
as a safe fallback, so nothing breaks while you set this up.
