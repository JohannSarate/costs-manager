# 📁 Costs Manager

> Aplicação web para criação e gestão de projetos e serviços, com interface intuitiva e persistência de dados via json-server.

![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JSON Server](https://img.shields.io/badge/json--server-000?style=flat&logo=json&logoColor=white)

---

## ✨ Funcionalidades

- ✅ Criar novos projetos com nome, orçamento e categoria
- ✅ Listar todos os projetos existentes
- ✅ Editar projetos — nome, orçamento e detalhes
- ✅ Adicionar e remover serviços dentro de cada projeto
- ✅ Eliminar projetos
- ✅ Controlo de orçamento em tempo real (orçamento usado vs. disponível)
- ✅ Backend simulado com json-server

---

## 🛠️ Tecnologias

| Tecnologia | Uso |
|---|---|
| React | Interface e gestão de estado |
| React Router DOM | Navegação entre páginas |
| JavaScript (ES6+) | Lógica da aplicação |
| CSS3 | Estilos e layout responsivo |
| json-server | API REST simulada / mock database |

---

## 🚀 Como Correr Localmente

### Pré-requisitos
- Node.js instalado
- npm ou yarn

### Instalação

```bash
# 1. Clonar o repositório
git clone https://github.com/JohannSarate/Project.git

# 2. Entrar na pasta
cd Project

# 3. Instalar dependências
npm install
```

### Iniciar a aplicação

Precisas de dois terminais em simultâneo:

```bash
# Terminal 1 — Backend (json-server)
npm run backend

# Terminal 2 — Frontend (React)
npm start
```

A aplicação estará disponível em `http://localhost:3000` e o backend em `http://localhost:5000`.

---

## 📂 Estrutura do Projeto

```
Project/
├── public/
├── src/
│   ├── components/       # Componentes reutilizáveis (Navbar, Button, Input...)
│   ├── pages/            # Páginas (Home, NewProject, ProjectDetails...)
│   ├── App.js
│   └── index.js
├── costs/
│   └── db.json           # Base de dados simulada (json-server)
├── package.json
└── README.md
```

---

## 📌 Roadmap

- [ ] Autenticação de utilizadores
- [ ] Filtros e pesquisa de projetos
- [ ] Gráficos de orçamento
- [ ] Substituir json-server por backend real (Node.js + Express)
- [ ] Deploy na Vercel / Railway

---

## 📄 Licença

Este projeto é de uso livre para fins de estudo e aprendizagem.

---

<div align="center">
  Feito por <a href="https://github.com/JohannSarate">Johann Sarate</a>
</div>
