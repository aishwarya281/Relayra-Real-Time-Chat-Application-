# 🚀 Relayra – Real-Time Chat Application

Relayra is a full-stack **real-time chat application** built using the MERN stack. It enables users to communicate instantly with a seamless and modern chat experience powered by WebSockets.

---

## 🌟 Features

- 🔐 User Authentication (JWT-based login & signup)
- 💬 Real-Time Messaging using Socket.IO
- 🟢 Online/Offline User Status
- 📩 One-to-One Chat with message history
- ⚡ Fast and Responsive UI (Tailwind CSS)
- 🧠 Global State Management using Zustand

---

## 🏗️ Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Zustand

### Backend
- Node.js
- Express.js

### Database
- MongoDB

### Real-Time Communication
- Socket.IO

### Authentication
- JSON Web Tokens (JWT)






---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/aishwarya281/Relayra-Real-Time-Chat-Application.git
cd Relayra-Real-Time-Chat-Application
```
### 2. Install dependencies

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd frontend
npm install
```

---

### 3. Environment Variables

Create a `.env` file in the backend folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
NODE_ENV = development
```

---

### 4. Run the Application

#### Start Backend

```bash
cd backend
npm run dev
```

#### Start Frontend

```bash
cd frontend
npm run dev
```



## 🔄 Application Flow

1. User signs up or logs in
2. JWT token is generated and stored securely
3. Socket connection is established between client and server
4. Messages are stored in MongoDB
5. Messages are transmitted instantly using Socket.IO
6. Receiver gets real-time updates without refreshing

---

## 🚀 Future Enhancements

* ⌨️ Typing indicator
* ✔️ Seen / Delivered message status
* 📎 Image & file sharing
* 👥 Group chat functionality
* 🔔 Push notifications

---

## 💡 Key Highlights

* Built a **real-time communication system** using WebSockets
* Implemented **secure authentication** using JWT
* Designed a **scalable backend architecture** with Express & MongoDB
* Optimized UI for performance and responsiveness
* Used **Zustand for efficient global state management**

---

## 👨‍💻 Author

**Aishwarya Nishad**
🔗 GitHub: https://github.com/aishwarya281

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub — it helps a lot!

---

