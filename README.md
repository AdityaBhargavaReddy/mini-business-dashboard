# 🚀 Mini Local Business Dashboard

This is a full-stack project simulating a dashboard for small businesses to view SEO content and Google Business data.

---

## 📁 Project Structure

```
mini-local-business-dashboard/
├── frontend/   # React + Tailwind CSS frontend
└── backend/    # Node.js + Express backend
```

---

## 🖥️ Tech Stack

- **Frontend:** React, Tailwind CSS, Axios
- **Backend:** Node.js, Express
- **API Type:** REST (No database, simulated responses)

---

## 📦 How to Run the Project Locally

### 🔧 Backend (Port: 5000)
```bash
cd backend
npm install
node index.js
```

### 🌐 Frontend (Port: 3000)
```bash
cd frontend
npm install
npm start
```

Make sure both servers are running in separate terminals.

---

## 🔌 API Endpoints

### `POST /business-data`
**Request Body:**
```json
{
  "name": "Cake & Co",
  "location": "Mumbai"
}
```

**Response:**
```json
{
  "rating": 4.3,
  "reviews": 127,
  "headline": "Why Cake & Co is Mumbai's Sweetest Spot in 2025"
}
```

---

### `GET /regenerate-headline?name=...&location=...`
Returns a new AI-style SEO headline from a static list.

---

## 🎯 Features

- Input form to submit business name & location
- Simulated Google rating and reviews
- AI-generated SEO headline
- “Regenerate Headline” button
- Clean responsive UI using Tailwind CSS

---

## 📬 Submission

This project was built as part of a Full Stack Intern Assignment.

**GitHub Repo:** https://github.com/AdityaBhargavaReddy/mini-business-dashboard
**Deployed Link :** https://mini-business-board.netlify.app

---

## 👨‍💻 Author

- **Name:** Aditya Bhargava Reddy 
- **Email:** bhargavareddy2005@gmail.com
