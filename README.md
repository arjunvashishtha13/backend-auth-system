# Backend Authentication System

A Node.js backend authentication system built with Express, MySQL, JWT, and bcrypt.

## Features
- User Signup with hashed passwords
- User Login with JWT authentication
- Protected routes using middleware
- Environment variable based configuration
- Clean MVC-style structure

## Tech Stack
- Node.js
- Express.js
- MySQL
- bcrypt
- JSON Web Token (JWT)
- dotenv

## Folder Structure
src/
├── app.js
├── routes/
│ └── authRoutes.js
├── models/
│ └── userModel.js
├── middleware/
│ └── authMiddleware.js
└── config/
└── db.js

## Environment Variables
Create a `.env` file in root:
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=backend_auth
JWT_SECRET=your_secret
JWT_EXPIRES_IN=1h
PORT=3000


## Installation & Run
```bash
npm install
node index.js
---

##  API Endpoints

Signup
**POST** `/api/auth/signup`

Request Body:
```json
{
  "name": "User",
  "email": "user@gmail.com",
  "password": "123456"
}
Response:
{
  "message": "User registered successfully"
}

Login
POST /api/auth/login

Request Body:
{
  "email": "user@gmail.com",
  "password": "123456"
}


Response:
{
  "token": "JWT_TOKEN"
}

 Profile (Protected Route)
GET /api/auth/profile

Headers:
Authorization: Bearer <JWT_TOKEN>


Response:
{
  "message": "Profile accessed",
  "user": {
    "id": 1,
    "email": "user@gmail.com"
  }
}

SECURITY
Passwords are securely hashed using bcrypt
JWT is used for stateless authentication.
Sensitive data is stored using environment variables

AUTHOR
ARJUN VASHISHTHA
