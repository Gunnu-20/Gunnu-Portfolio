# 🌐 My Portfolio

A modern, responsive portfolio website built with React, TailwindCSS, Node.js, Express, and MongoDB.
This project showcases my skills, projects, and achievements in web development.
It also includes a contact form powered by Nodemailer to send messages directly to my email.

 # 🚀 Features
Responsive UI: Built with TailwindCSS for a clean and modern design.

Projects Showcase: Dynamic section to highlight my work.

About Me: Personal introduction and skills overview.

Contact Form: Users can send me messages via Nodemailer.

Backend API: Node.js + Express server to handle routes and mail sending.

Database: MongoDB for storing project details and contact messages (optional).

# 🛠️ Tech Stack

.Frontend

React

TailwindCSS

.Backend

Node.js

Express

MongoDB (Mongoose)

Nodemailer

# 📂 Project Structure
Code
portfolio/
│── client/            # React + TailwindCSS frontend
│   ├── src/
│   └── public/
│
│── server/            # Node.js + Express backend
│   ├── routes/
│   ├── models/
│   ├── controllers/
│   └── server.js
│
│── .env               # Environment variables
│── package.json
│── README.md

⚙️ Setup Instructions
1. Clone the repository
bash
git clone https://github.com/your-username/portfolio.git
cd portfolio
2. Install dependencies

# For backend
cd server

npm install

# For frontend
cd client

npm install
3. Environment Variables
Create a .env file in the server folder:

Code
PORT=5000

MONGO_URI=your_mongodb_atlas_uri

EMAIL_USER=your_email@example.com

EMAIL_PASS=your_email_password_or_app_password
CLIENT_URL= 

4. Run the project

# Start backend
cd server

npm run dev

# Start frontend
cd client

npm run dev

# 📬 Contact
If you’d like to connect, feel free to reach out:

Email: "rathoregungun200406@gmail.com"

LinkedIn: "https://www.linkedin.com/in/gungun-rathore-2197143a1/"

# Live URl

https://gunnu-portfolio-client.onrender.com/