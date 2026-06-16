# 💰 Costs Manager

> A web application for project management and service cost tracking.

---

## 📋 About

**Costs Manager** is a React application that lets you create and manage projects with a defined budget, add services to each project, and track in real time how much of the budget has been used.

Perfect for freelancers, teams, or anyone who needs to organize expenses by project in a simple and visual way.

---

## ✨ Features

- ✅ **Create projects** with name, budget and category
- ✅ **Edit and delete** existing projects
- ✅ **Add services** to each project with name, cost and description
- ✅ **Budget tracking** — monitor value used vs. total available
- ✅ **Color-coded categories** — Infrastructure, Development, Design and Planning
- ✅ **Visual feedback** — success messages after every action
- ✅ **Loading state** during API requests
- ✅ **Responsive layout** — 4 cards per row on desktop, adapts to smaller screens

---

## 🛠️ Tech Stack

| Technology | Description |
|---|---|
| [React 18](https://reactjs.org/) | Main UI library |
| [React Router DOM v6](https://reactrouter.com/) | Client-side routing |
| [CSS Modules](https://github.com/css-modules/css-modules) | Scoped component styling |
| [JSON Server](https://github.com/typicode/json-server) | Fake REST API for development |
| [React Icons](https://react-icons.github.io/react-icons/) | Edit and delete icons |
| [UUID](https://www.npmjs.com/package/uuid) | Unique ID generation for services |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/         # Navbar, Footer, Container, Loading, Message, LinkButton
│   ├── pages/          # Home, Projects, Project, NewProject
│   ├── project/        # ProjectCard, ProjectForm
│   └── service/        # ServiceCard, ServiceForm
├── img/                # Logo and images
├── App.js
└── index.css           # Global CSS variables (design tokens)
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/costs-manager.git

# 2. Navigate to the project folder
cd costs-manager/costs

# 3. Install dependencies
npm install

# 4. In one terminal, start the backend (JSON Server on port 5000)
npm run backend

# 5. In another terminal, start React (port 3000)
npm start
```

Open in browser: **http://localhost:3000**

---

## 🎨 Design

The project uses a **design token** system with global CSS variables for visual consistency:

- Clean color palette with `#f7f8fc` background and white surfaces
- Typography with **Inter** (body) and **Space Grotesk** (headings)
- Rounded borders and soft shadows on cards
- Category colors: pink (Infrastructure), green (Development), blue (Design), orange (Planning)

---

## 📌 Available Scripts

```bash
npm start        # Start React app in development mode
npm run backend  # Start JSON Server (fake API) on port 5000
npm run build    # Build for production
npm test         # Run tests
```

---

## 🔧 Fixes & Improvements

- Fixed CSS conflict between `width: 24%` on the card and `display: grid` on the container
- Responsive grid with **4 columns** on desktop, **2** on tablet and **1** on mobile
- Removed duplicate `.cards_grid` declaration in CSS

---

## 📄 License

This project is under the MIT license. See the [LICENSE](LICENSE) file for details.

---

<p align="center">Made with ❤️ and React</p>
