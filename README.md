---
# 📘 User Management Application (React + Axios + Centralized Store)

A fully functional **User Management CRUD Application** built using **React**, **React Router**, **Axios**, and a **centralized global store**.
This project interacts with a mock backend powered by **JSONPlaceholder** (or any API URL provided using environment variables).
---

## 🚀 Features

### ✅ User CRUD Operations

- **Fetch Users** – Display all users in a responsive UI.
- **Create User** – Submit new user data via POST request.
- **Update User** – Edit user details using PATCH request.
- **Delete User** – Remove a user using DELETE request.
- **View Single User** – Fetch user details by ID.

### 🌐 API Integration (Axios)

- Base URL configured through `.env`
- Endpoints handled through a centralized API file
- Proper error handling using try/catch

### 🧭 Navigation (React Router)

- Home Page
- Create User
- Update User
- User Details
- 404: Not Found Page
- Navbar for smooth navigation

### 🧱 Centralized Store

- Global state management to avoid prop drilling
- Single source of truth for users list
- Optional context or custom store implementation

### 📱 Responsive UI

- Works smoothly on **mobile**, **tablet**, and **desktop**.

### ⏳ Loading States

- Loading spinner for API calls (Bonus Feature)

---

# 📂 Project Structure

```
src/
│── assets/                # Images, icons, static assets
│
│── components/
│     ├── Create/          # Form to add new user
│     ├── Update/          # Form to update existing user
│     ├── User/            # Single user details page
│     ├── Home/            # Display all users
│     ├── Navbar/          # Navigation bar
│     └── NotFound/        # 404 route
│
│── store/                 # Centralized global data store (Context / Custom store)
│
│── utils/                   # Axios API functions (CRUD calls)
│     └── api.js
│
│── App.jsx                # Main routing hub
│── main.jsx               # Entry point
│── index.css              # Global styles
│── .env                   # API Base URL
```

---

# 🌐 API Endpoints (Axios)

Your API communication is handled through a reusable Axios instance:

```js
import axios from "axios";

export const baseUrl = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});
```

### **Fetch All Users**

```js
fetchUsers = async () => baseUrl.get("/users");
```

### **Create User**

```js
createUser = async (userData) => baseUrl.post("/users", userData);
```

### **Get User by ID**

```js
getUserById = async (id) => baseUrl.get(`/users/${id}`);
```

### **Update User**

```js
updateUser = async (id, data) => baseUrl.patch(`/users/${id}`, data);
```

### **Delete User**

```js
deleteUser = async (id) => baseUrl.delete(`/users/${id}`);
```

All API operations include error handling using `try/catch`.

---

# 🧭 Routing Structure

| Route         | Component | Description        |
| ------------- | --------- | ------------------ |
| `/`           | Home      | List all users     |
| `/create`     | Create    | Add a new user     |
| `/update/:id` | Update    | Edit user details  |
| `/user/:id`   | User      | View a single user |
| `*`           | NotFound  | 404 fallback       |

---

# ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/pitabash1999/synergy.git
cd user-management
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Create `.env` File

```
VITE_API_BASE_URL="https://jsonplaceholder.typicode.com"
```

### 4️⃣ Start Development Server

```bash
npm run dev
```

### 5️⃣ Visit App

```
http://localhost:5173
```

---

# 🎯 Key Highlights

- Clean and modular project structure
- Uses Axios instance with `.env` support
- Centralized store for managing users
- Routing + API integration + error handling
- Fully responsive
- Beginner-friendly + production-style coding

---

# 🤝 Contributing

Feel free to open issues or submit pull requests.

---

# 📄 License

This project is open-source and free to use for learning.

---
