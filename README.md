# Passop: Your Personal Secure Password Vault 🔐

## Overview
Passop is an elegant and modern password manager that offers secure storage for your digital credentials. Built with React and featuring a beautiful UI with smooth gradients and intuitive design, Passop makes managing your online accounts a breeze.

## Project Variants
Passop is available in two versatile flavors:
- **Passop MongoDB:** Provides persistent data management through a **MongoDB backend**, ideal for users who prefer robust cloud storage.
- **Passop LocalStorage:** Stores credentials directly in your **browser's local storage**, perfect for those who value simplicity and offline access.

## Features
- 📝 **Secure Credential Storage:** Store website URLs, usernames, and passwords in one secure location.
- 🔄 **Edit & Update:** Modify saved credentials with ease.
- 🗑️ **Delete Entries:** Remove credentials when no longer needed.
- 📋 **Clipboard Copy:** Copy credentials to the clipboard with a single click and handy notifications.
- 👁️ **Password Visibility Toggle:** View or hide stored passwords conveniently.
- 🎨 **Modern UI:** Enjoy a visually pleasing experience with a clean, intuitive design and smooth gradients.

## Technical Stack
### Frontend:
- **React.js** with functional components and hooks.
- **React Router** for seamless navigation.
- **Tailwind CSS** for modern styling.
- **React-Toastify** for smooth notifications.
- **Lucide-React** for clean and consistent icons.

### Backend (for MongoDB version):
- **Node.js** with **Express.js** to handle API requests.
- **MongoDB** with **Mongoose ORM** for database operations.
- **bcrypt.js** for password encryption and security.
- **dotenv** for environment variable management.
- **CORS** for secure cross-origin requests.

## Installation & Setup
### Clone the Repository:
```sh
git clone https://github.com/yourusername/passop.git
cd passop
```

### Install Dependencies:
```sh
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies (for MongoDB version)
cd ../backend
npm install
```

### Configure Environment Variables:
- For the MongoDB version, create a `.env` file in the backend directory with necessary variables (e.g., database URL, secret keys).

### Run the Application:
```sh
# Start backend server (MongoDB version)
cd backend
npm start

# Start frontend development server
cd ../frontend
npm start
```

### Access the Application:
Open `http://localhost:3000` in your browser.

