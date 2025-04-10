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
/////////////Add pakage .json file 


{
  "name": "vite-project",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@eslint/js": "^9.21.0",
    "@types/react": "^19.0.10",
    "@types/react-dom": "^19.0.4",
    "@vitejs/plugin-react": "^4.3.4",
    "eslint": "^9.21.0",
    "eslint-plugin-react-hooks": "^5.1.0",
    "eslint-plugin-react-refresh": "^0.4.19",
    "globals": "^15.15.0",
    "vite": "^6.2.0"
  }
}


If not, install the plugin and add it:




npm install @vitejs/plugin-react



      or


   npm install @vitejs/plugin-react --save-dev




npm install react react-dom


npm install



npm run dev
if project not run remove import that are not in use fron App.js


### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git


