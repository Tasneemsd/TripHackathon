# 🧭 Trip Planner – MERN Hackathon Project 🥉

A real-time **Trip Planner** web application built in 24 hours using the **MERN stack (MongoDB, Express, React + Vite, Node.js)**. This smart travel assistant allows users to **book flights, hotels, guides, and pay securely via PayPal** — all in one seamless platform.

🏆 **3rd Prize Winner** in a 24-hour Hackathon.

---

## 🌍 Features
- ✈️ Flight Booking (Real-time)
- 🏨 Hotel Booking with availability check
- 🧑‍✈️ Guide Booking for local tours
- 💳 Integrated PayPal Payment Gateway
- 🔐 Authentication & Authorization
- 📦 Reusable React Components
- 🌐 Responsive Design (Mobile + Web)
- ⚡ Fast loading with Vite + React

---

## 🛠️ Tech Stack

### 💻 Frontend
- **React** (with **Vite** for blazing fast builds)
- React Router
- TailwindCSS / Bootstrap / Custom CSS (edit as per your project)
- Axios

### 🧠 Backend
- **Node.js** + **Express.js**
- **MongoDB** (Mongoose ODM)
- RESTful APIs
- JWT-based Authentication

### 💰 Payments
- **PayPal API** Integration for secure payments

---


## 🔐 Authentication
- User Signup / Login
- Token-based route protection
- Session management using JWT

---

## 🧳 Folder Structure

<details> <summary>📁 Folder Structure (Click to expand)</summary>
text
Copy
Edit
trip-planner/
├── client/                     # React + Vite frontend
│   ├── public/
│   ├── src/
│   │   ├── assets/             # Images and static assets
│   │   ├── components/         # Reusable UI components
│   │   ├── pages/              # Main pages like Home, Flights, Hotels
│   │   ├── services/           # Axios API calls
│   │   ├── App.jsx             # Root component
│   │   └── main.jsx            # Entry point
│   ├── index.html
│   └── vite.config.js

├── server/                     # Node.js + Express backend
│   ├── controllers/            # Request handlers
│   ├── models/                 # MongoDB schemas
│   ├── routes/                 # API routes
│   ├── utils/                  # Helper functions (e.g. PayPal config)
│   ├── middleware/             # Auth, error handlers
│   └── server.js               # Express app entry point

├── .env                        # Environment variables (Mongo URI, PayPal keys)
├── package.json
└── README.md
</details>
## setup backend
cd server
npm install
npm run dev

## setup frontend
cd ../client
npm install
npm run dev


🧑‍💻 Developed By
This project was built collaboratively in a 24-hour Hackathon with my team.
My Role: I played Team leader role. I actively contributed to the frontend development, creating dynamic React components, integrating PayPal payments, designing pages, and ensuring responsive UI.

🏆 Achievements
🥉 3rd Prize Winner – Hackathon 2025

Built and deployed within 24 hours

Fully functional MERN app with real-time features



