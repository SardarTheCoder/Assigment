# Task Manager App

A simple and dynamic Task Manager app built with **React.js**,  and **Tailwind classes** It allows users to add, update, and manage their tasks efficiently.

---

##  Features

###  Add New Task

- Users can input:
 
- On input feild submission, the task is **dynamically added** to the task list.

###  Mark Task as Complete/Incomplete

- Each task has a **checkbox**.
- Toggling the checkbox will:
  - Update the task’s **status** between complete and incomplete using checkboxes.
  - Visually differentiate completed tasks.

---

##  Branching Workflow

To maintain clean and organized code, we follow a **child branch strategy**:

- For **every new task/feature**, a **child branch** is created.
- Work is pushed to the **child-branch**.
- Once complete, it is **merged into the `main` branch** through a pull request.

---
## Tech Stack
Frontend:
React.js – React framework for building fast and optimized web applications.

Tailwind CSS – Utility-first CSS framework for fast and responsive UI design.

State Management:
React Hooks – useState for managing component state .

Development Tools:
ESLint – Linting tool to enforce consistent code style.

Prettier – Code formatter to keep your code clean and readable.

Git & GitHub – Version control and collaborative development. 

---

##  Run the Project Locally
npm install 
npm run dev

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
