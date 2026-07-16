# 🎵 Spotify Backend

This is the backend service for the Spotify Clone project. It provides REST APIs to manage application data and handles communication between the frontend and the database.

## ✨ Features

- RESTful APIs
- User Authentication
- Music & Playlist Management
- Database Integration
- Error Handling
- Secure API Structure

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- dotenv

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/ishayasin769/spotify.git
```

### Navigate to the backend folder

```bash
cd backend
```

### Install dependencies

```bash
npm install
```

### Create a `.env` file

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### Start the development server

```bash
npm run dev
```

The backend server will run on:

```
http://localhost:5000
```

## 📁 Folder Structure

```
backend/
│── controllers/
│── models/
│── routes/
│── middleware/
│── config/
│── utils/
│── server.js
│── package.json
```

## 📌 API Modules

- Authentication
- users
- music
- album

## 🔮 Future Improvements

- Spotify API Integration
- File Upload Support
- Role-Based Authorization
- API Documentation
- Unit Testing

## 👩‍💻 Author

**Isha Yasin**

GitHub: https://github.com/ishayasin769
