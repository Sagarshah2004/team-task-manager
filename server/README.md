# Team Task Manager 🚀

A Full Stack Team Task Manager web application built using the MERN stack that allows users to create projects, manage tasks, track progress, and collaborate with role-based authentication (Admin/Member).

---

# 🌐 Live Demo

## Frontend (Vercel)

https://team-task-manager-five-weld.vercel.app

---

## Backend (Railway)

Add your Railway backend URL here

Example:

```bash
https://your-backend.up.railway.app
```

---

# 📌 Features

## 🔐 Authentication

* User Signup/Login
* JWT Authentication
* Password Hashing using bcryptjs
* Protected Routes

---

## 👥 Role-Based Access Control

### Admin

* Create Projects
* Create Tasks
* Manage Dashboard

### Member

* View Projects
* View Tasks
* Track Progress

---

## 📁 Project Management

* Create New Projects
* Add Description
* Set Deadlines
* View All Projects

---

## ✅ Task Management

* Create Tasks
* Set Priority Levels
* Update Task Status
* Due Date Tracking

---

## 📊 Dashboard Analytics

* Total Tasks
* Completed Tasks
* Pending Tasks
* Recent Tasks Overview

---

## 🎨 Modern UI

* Responsive Design
* Dark Theme Dashboard
* Tailwind CSS Styling

---

# 🛠️ Tech Stack

## Frontend

* React.js
* Vite
* Tailwind CSS
* React Router DOM
* Axios
* React Hot Toast

---

## Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT Authentication
* bcryptjs

---

## Deployment

* Railway (Backend)
* Vercel (Frontend)

---

# 📂 Project Structure

```bash
team-task-manager/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── services/
│   │   └── App.jsx
│
├── server/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/Sagarshah2004/team-task-manager.git
```

---

## 2️⃣ Navigate to Project

```bash
cd team-task-manager
```

---

# 🔹 Frontend Setup

## Install Dependencies

```bash
cd client
npm install
```

---

## Run Frontend

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# 🔹 Backend Setup

## Install Dependencies

```bash
cd server
npm install
```

---

## Create .env File

```env
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=mysecretkey
```

---

## Run Backend

```bash
npm run dev
```

Backend runs on:

```bash
http://localhost:5000
```

---

# 🔐 Environment Variables

| Variable   | Description                  |
| ---------- | ---------------------------- |
| PORT       | Backend Port                 |
| MONGO_URI  | MongoDB Atlas Connection URL |
| JWT_SECRET | JWT Secret Key               |

---

# 📡 API Endpoints

## Authentication

| Method | Endpoint         | Description   |
| ------ | ---------------- | ------------- |
| POST   | /api/auth/signup | Register User |
| POST   | /api/auth/login  | Login User    |

---

## Projects

| Method | Endpoint      | Description      |
| ------ | ------------- | ---------------- |
| GET    | /api/projects | Get All Projects |
| POST   | /api/projects | Create Project   |

---

## Tasks

| Method | Endpoint       | Description   |
| ------ | -------------- | ------------- |
| GET    | /api/tasks     | Get All Tasks |
| POST   | /api/tasks     | Create Task   |
| PUT    | /api/tasks/:id | Update Task   |

---

# 📸 Screenshots

## Login Page

Add screenshot here

---

## Dashboard

Add screenshot here

---

## Projects Page

Add screenshot here

---

## Tasks Page

Add screenshot here

---

# 🚀 Deployment

## Backend Deployment

* Railway

## Frontend Deployment

* Vercel

---

# 🎥 Demo Video

Add your demo video link here.

Example:

```bash
https://drive.google.com/your-demo-video-link
```

---

# 🔮 Future Improvements

* Edit/Delete Tasks
* Drag & Drop Kanban Board
* Email Notifications
* Activity Logs
* Team Collaboration Features

---

# 👨‍💻 Author

## Sagar Shah

GitHub:
https://github.com/Sagarshah2004

---

# ⭐ If you like this project, give it a star!
