# 📚 MERN Stack Book List Project

Overview

This is a full-stack MERN (MongoDB, Express, React, Node.js) project that allows users to manage a book list. Users can create, read, update, and delete books using a simple and intuitive interface.

Frontend deployed at : https://bookstore-azure-phi.vercel.app/

Backend deployed at : https://bookstore-hoac.onrender.com

## 🚀 Features
- CRUD operations for books (Create, Read, Update, Delete)
- MongoDB Atlas for database storage
- Express.js for handling API requests
- CORS support for frontend integration
- Error handling and validation

## 📂 Folder Structure
```
backend/
│-- node_modules/       # Dependencies installed via npm
│-- config/             # Configuration files (DB connection, environment variables)
│-- controllers/        # Business logic for handling requests
│-- models/             # Mongoose schemas and models
│-- routes/             # Express routes for API endpoints
│-- middleware/         # Custom middleware (error handling, authentication, etc.)
│-- .env                # Environment variables (not committed to Git)
│-- package.json        # Node.js dependencies and scripts
│-- server.js           # Main server file
```

## 🛠 Setup and Installation
### **1. Clone the Repository**
```sh
git clone https://github.com/yourusername/bookstore.git
cd bookstore-backend
```
### **2. Install Dependencies**
```sh
npm install
```
### **3. Setup Environment Variables**
Create a `.env` file in the root directory and add:
```sh
PORT=5555
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/bookstore?retryWrites=true&w=majority
```
### **4. Start the Server**
```sh
npm run dev
```
The backend will run on `http://localhost:5555` by default.

## 🔗 API Endpoints
| Method | Endpoint             | Description                 |
|--------|----------------------|-----------------------------|
| GET    | /books               | Get all books              |
| GET    | /books/:id           | Get a book by ID           |
| POST   | /books               | Add a new book             |
| PUT    | /books/:id           | Update book details        |
| DELETE | /books/:id           | Delete a book              |

## 📌 Technologies Used
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB Atlas** - Cloud database
- **Mongoose** - ODM for MongoDB
- **dotenv** - Environment variable management
- **Cors** - Cross-Origin Resource Sharing

## 🛠 Future Enhancements
- Implement authentication (JWT)
- Add user roles (Admin, User)
- Improve error handling & logging

## 📜 License
This project is licensed under the **MIT License**.

---
Feel free to contribute! 🚀

