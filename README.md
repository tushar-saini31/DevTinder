# DevVibe 🚀
### A Production-Grade Developer Networking Platform

DevVibe is a full-stack social networking platform built exclusively for developers — connect, chat in real-time, get smart notifications, and unlock premium features through a seamless subscription experience.


## 📌 Features

- 🔐 **Secure Authentication** — JWT-based login and signup with protected routes
- 💬 **Real-Time Messaging** — WebSocket-powered chat with sub-2 second message delivery
- 🔔 **Smart Notifications** — Automated transactional emails via AWS SES
- 💳 **Premium Subscriptions** — Razorpay payment gateway integration for premium plans
- 👤 **Developer Profiles** — Connect and interact with other developers
- ☁️ **Scalable Infrastructure** — Backend deployed on AWS EC2

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React.js, CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB |
| Authentication | JWT (JSON Web Tokens) |
| Real-Time | WebSockets |
| Email Service | AWS SES |
| Payments | Razorpay |
| Deployment | AWS EC2 (backend), Vercel (frontend) |

---

## 📁 Project Structure

```
DevVibe/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Route-level pages
│   │   ├── context/        # State management (Context API)
│   │   └── utils/          # Helper functions
├── server/                 # Node.js + Express backend
│   ├── controllers/        # Route controllers
│   ├── models/             # MongoDB Mongoose models
│   ├── routes/             # API route definitions
│   ├── middleware/         # Auth middleware, error handlers
│   └── utils/              # Email, socket helpers
├── .env.example            # Environment variable template
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js v18+
- MongoDB (local or Atlas)
- AWS account (for SES)
- Razorpay account

### 1. Clone the repository

```bash
git clone https://github.com/tushar-saini31/DevVibe.git
cd DevVibe
```

### 2. Install dependencies

```bash
# Backend
cd server
npm install

# Frontend
cd ../client
npm install
```

### 3. Set up environment variables

Create a `.env` file in the `server/` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=7d

# AWS SES
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_REGION=your_aws_region
SES_SENDER_EMAIL=your_verified_sender_email

# Razorpay
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret

# Client URL
CLIENT_URL=http://localhost:3000
```

### 4. Run the application

```bash
# Start backend (from /server)
npm run dev

# Start frontend (from /client)
npm start
```

App will be running at `http://localhost:3000`

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login and get JWT token |
| GET | `/api/users/:id` | Get user profile |
| GET | `/api/connections` | Get all connections |
| POST | `/api/connections/send` | Send connection request |
| GET | `/api/messages/:userId` | Get chat messages |
| POST | `/api/messages/send` | Send a message |
| POST | `/api/payment/subscribe` | Create Razorpay subscription |
| POST | `/api/payment/verify` | Verify payment |

---

## 🌐 Deployment

### Backend — AWS EC2

1. Launch an EC2 instance (Ubuntu 22.04 recommended)
2. Install Node.js and PM2
3. Clone the repo and set up `.env`
4. Start the server using PM2:

```bash
pm2 start server.js --name devvibe-backend
pm2 save
```

### Frontend — Vercel

1. Connect your GitHub repo to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy with one click

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Tushar Saini**
- Portfolio: [tushar-saini.dev](https://potfolio-tushar01.vercel.app/)
- LinkedIn: [linkedin.com/in/tushar-saini-684b45246](https://www.linkedin.com/in/tushar-saini-684b45246/)
- GitHub: [@tushar-saini31](https://github.com/tushar-saini31)

---

> ⭐ If you found this project helpful, please give it a star!
