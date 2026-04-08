# Task Manager API

A scalable backend API for managing tasks, built using Node.js, Express, and MongoDB. This project includes authentication, protected routes, filtering.

---

## Features

* User Signup & Login (JWT Authentication)
* Protected Routes using Authentication Middleware
* Create, Read, Update, Delete (CRUD) Tasks
* Filter tasks by status (pending/completed)
* User-specific tasks (each user accesses only their own data)
* Clean and structured backend architecture

---

## Tech Stack

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT (Authentication)

---

## 🌐 Live API

Base URL:

```
https://your-app.onrender.com
```

---

## API Endpoints

### Auth Routes

* POST /api/auth/signup → Register user
* POST /api/auth/login → Login user

---

### 📌 Task Routes (Protected)

All routes require authentication (Bearer Token)

* POST /api/tasks → Create a new task
* GET /api/tasks → Get all tasks (with optional status filter)
* PUT /api/tasks/:id → Update a task
* DELETE /api/tasks/:id → Delete a task

---

## Query Parameters

* Filter tasks by status:

```
/api/tasks?status=pending
```

---

## Authentication

All task routes are protected using JWT.

Example header:

```
Authorization: Bearer <your_token>
```

---

## Environment Variables

Create a `.env` file and add:

```
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret
```

---

## Testing

You can test the API using:

* Postman

---

##  Deployment

Deployed on Render with live API endpoints

