# 📚 StudyStack Backend API

A RESTful backend API for **StudyStack**, an online course management platform built using **Node.js**, **Express.js**, **MongoDB**, **JWT Authentication**, and **Multer**.

## 🚀 Features

- User Registration & Login
- JWT Authentication
- Role-Based Authorization (Student / Instructor)
- Password Hashing with bcryptjs
- CRUD Operations for Courses
- Course Image Upload using Multer
- MongoDB with Mongoose
- Express Middleware
- Logger Middleware
- Global Error Handling
- MVC Project Structure

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- Multer
- dotenv

---

## 📂 Project Structure

```
StudyStack/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── authController.js
│   └── courseController.js
│
├── middleware/
│   ├── auth.js
│   ├── upload.js
│   ├── logger.js
│   └── errorHandler.js
│
├── models/
│   ├── User.js
│   └── Course.js
│
├── routes/
│   ├── authRoutes.js
│   └── courseRoutes.js
│
├── uploads/
│
├── .env
├── app.js
├── server.js
├── package.json
└── README.md
```

---

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/Sriwastav07/StudyStack-Backend.git
```

Go to the project directory

```bash
cd Backend
```

Install dependencies

```bash
npm install
```

Create a `.env` file in the project root.

Example:

```env
DATABASE=your_mongodb_atlas_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

Start the server

```bash
npm start
```

or for development

```bash
npm run dev
```

---

## 📌 API Endpoints

### Authentication

### Register User

```
POST /api/auth/register
```

Request Body

```json
{
  "name": "Anisha",
  "email": "anisha@gmail.com",
  "password": "Password@123",
  "role": "student"
}
```

---

### Login

```
POST /api/auth/login
```

Request Body

```json
{
  "email": "anisha@gmail.com",
  "password": "Password@123"
}
```

---

### Courses

### Get All Courses

```
GET /api/courses
```

---

### Get Course by ID

```
GET /api/courses/:id
```

---

### Create Course

```
POST /api/courses
```

Headers

```
Authorization: Bearer <JWT_TOKEN>
```

Body (form-data)

| Key | Type |
|------|------|
| title | Text |
| price | Text |
| instructor | Text |
| image | File |

---

### Update Course

```
PUT /api/courses/:id
```

Requires JWT Token.

---

### Delete Course

```
DELETE /api/courses/:id
```

Requires JWT Token.

---

## 🔐 Authentication

Protected routes require a JWT token.

Example header:

```
Authorization: Bearer YOUR_JWT_TOKEN
```

Only users with the **Instructor** role can create, update, or delete courses.

---

## 🖼️ Image Upload

Course images are uploaded using **Multer** and stored in the `uploads/` directory.

Uploaded images are accessible at:

```
http://localhost:5000/uploads/<filename>
```

---

## 📦 Dependencies

- express
- mongoose
- dotenv
- bcryptjs
- jsonwebtoken
- multer
- cors
- nodemon

---

## 🧪 Testing

The API was tested using **Postman**.

---

## 🚀 Deployment

The backend can be deployed on platforms like:

- Render
- Railway
- Cyclic

Remember to configure the required environment variables on your hosting platform.

---

## 👨‍💻 Author

**Anisha Sriwastav**

GitHub: https://github.com/Sriwastav07

---

## 📄 License

This project is for learning and educational purposes.