# 💡 Idea Board

A minimal idea board app built with **React**, **TypeScript**, and **Vite**, where users can create, edit, delete, and sort ideas. The app features inline editing, character limits, and localStorage-based persistence.

<img width="668" height="374" alt="representation" src="https://github.com/user-attachments/assets/4f2239ab-43c3-4620-afab-e6c82594f1eb" />

---

## 🚀 Features

- Create new ideas via modal
- Inline editing for title and description
- Delete ideas
- Sort ideas by:
  - Creation date
  - Title (A–Z / Z–A)
- Character limit enforcement (140 characters)
- Character countdown display
- localStorage persistence
- Responsive layout (mobile–desktop)
- Snackbar notifications for key actions

---

## 🧱 Tech Stack

- **React 19**
- **TypeScript**
- **Vite**
- **Notistack** (snackbar notifications)
- **uuid** (unique IDs)
- **date-fns** (formatting timestamps)
- **Tailwind CSS** (utility-first styling)

---

## 🧩 Project Structure

The codebase follows the **Feature-Sliced Design (FSD)** architecture. This structure helps with scalability, separation of concerns, and maintainability.

---

## ⚙️ Getting Started

1. **Clone the repo**

git clone https://github.com/LikaNur/idea-board
cd idea-board
Install dependencies

npm install
Run the dev server

npm start
Visit

---

## 🌐 Live Demo

👉 [live demo](https://LikaNur.github.io/idea-board)

---

## 📝 Comments & Assumptions

No backend is used — ideas are persisted in localStorage

Design is kept minimal and accessible

Inline editing auto-focuses title when adding a new idea
