# Echo Bot – AI Chat Widget

Echo Bot is an AI-powered chatbot that can be embedded into any website. It answers questions based on uploaded documents (CSV, DOCX, PDF) and CMS content, providing an interactive way for users to get information.

> ⚠️ **Note**  
> The backend is **not publicly exposed**. To run your own backend, you would need to configure your own AI and database services.

---

## 📑 Table of Contents

- [Echo Bot – AI Chat Widget](#echo-bot--ai-chat-widget)
  - [📑 Table of Contents](#-table-of-contents)
  - [🔗 Live Demo](#-live-demo)
  - [🚀 Features](#-features)
  - [🛠 Tech Stack](#-tech-stack)
    - [Frontend](#frontend)
    - [Backend](#backend)
  - [🧪 Running the Frontend Locally (Optional)](#-running-the-frontend-locally-optional)
  - [🌐 Website Integration](#-website-integration)
    - [1. Use the hosted widget files](#1-use-the-hosted-widget-files)
    - [2. Or download and host them yourself](#2-or-download-and-host-them-yourself)
    - [3. Widget behavior](#3-widget-behavior)
  - [💡 Usage](#-usage)
  - [📄 License](#-license)

---

## 🔗 Live Demo

👉 [**Try EchoBot Now :)**](https://echobot.mohamedbgz.dev)

---

## 🚀 Features

- 💬 AI-powered chat interface
- ⌨️ Typing and thinking indicators
- 📄 Document-based chat (RAG-style workflow)
- 🧩 CMS interaction mode
- 📂 File upload and management
- 📱 Mobile-responsive layout

---

## 🛠 Tech Stack

### Frontend
- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Axios

### Backend
- Node.js
- Express
- REST API
- AI / RAG pipeline
- Environment-based configuration
- Cloud infrastructure

---

## 🧪 Running the Frontend Locally (Optional)

The frontend can be run locally for UI inspection and code review.
```bash
cd frontend
npm install
npm run dev
```

---

## 🌐 Website Integration

Echo Bot can be embedded into any website using the hosted widget script and CSS. You can either use the files hosted on this website or download and customize them to your needs.

### 1. Use the hosted widget files

Add these tags to your HTML:
```html
<script src="https://demo.echobot.mohamedbgz.dev/js/widget.js"></script>
<link rel="stylesheet" href="https://demo.echobot.mohamedbgz.dev/css/widget.css">
```

### 2. Or download and host them yourself

- **Script**: [widget.js](https://demo.echobot.mohamedbgz.dev/js/widget.js)
- **CSS**: [widget.css](https://demo.echobot.mohamedbgz.dev/css/widget.css)

You can customize the widget placement and dimensions through the CSS file as needed.

> **Note**: This only controls the widget's position and size on your page. To customize the chatbot's internal appearance and styling, you need to modify the EchoBot frontend code.

### 3. Widget behavior

- The script injects an `<iframe>` pointing to the Echo Bot frontend
- Users can interact with Echo Bot directly on your website
- Placement and size can be adjusted via CSS

---

## 💡 Usage

1. Include the `<script>` and `<link>` tags in your website (either using the hosted files or your own copies)
2. The chatbot will appear automatically in the default location (bottom-right corner)
3. Users can ask questions based on uploaded documents or CMS content
4. Customize the CSS or script as needed to fit your website layout

---

## 📄 License

MIT License – see [LICENSE](LICENSE) for details.