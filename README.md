# 📬 Feedback Collection System (Full Stack Project)

A full-stack web application to collect user feedback through a public form, and manage it via a secure admin dashboard. Built with the **MERN** stack (MongoDB, Express, React, Node.js), deployed on **Render** and **Netlify**.

---

## 🚀 Live Demo

- 🔗 **Frontend (Netlify):** [Visit Live Site](https://feedbackformag.netlify.app)
- 🔗 **Backend (Render API):** [View API](https://feedback-backend-pour.onrender.com/api/feedback)

---

## 🛠️ Tech Stack

| Layer      | Technology               |
|------------|---------------------------|
| Frontend   | React.js, Axios, CSS      |
| Backend    | Node.js, Express.js       |
| Database   | MongoDB (MongoDB Atlas)   |
| Deployment | Netlify (Frontend), Render (Backend) |

---

## 📂 Folder Structure

```
feedback-collection-full/
├── backend/               # Node.js + Express backend
│   ├── models/            # Mongoose schema
│   ├── routes/            # Feedback routes
│   └── server.js          # Entry point
├── frontend/              # React frontend
│   ├── src/               # Components + App
│   └── public/            # _redirects for Netlify
└── README.md              # This file
```

---

## ✨ Features

- 🌐 Public feedback form
- 📩 POST feedback to MongoDB
- 🧠 Admin login (email/password)
- 📋 View all feedback in admin dashboard
- 🗑️ Delete feedback entries
- 🔒 Protected routes using React Router
- ✅ SPA routing fixed with `_redirects`
- 📱 Fully responsive & mobile-friendly UI
- 🎨 Clean, aesthetic design

---

## 🧑‍💻 How to Run Locally

### 🔧 Backend

```bash
cd backend
npm install
# Add .env with your MongoDB URI
node server.js
```

> Create `.env` file in backend root:

```bash
MONGO_URI=your_mongodb_connection_string
```

### 💻 Frontend

```bash
cd frontend
npm install
npm start
```

---

## 🧾 Credentials for Admin Login

```
Email: admin@example.com
Password: examplepassword
```

*(You can change these in the LoginPage.js file)*

---

## 🖼️ Screenshots (Optional)

> *(Add screenshots here by dragging into README preview or linking from /screenshots folder if you add one)*

---

## 📃 License

This project is for learning, portfolio, and internship submission purposes.

---

## 🙋‍♂️ Author

**Ankit Gupta**  
[GitHub](https://github.com/AnkitGupta-dev)
