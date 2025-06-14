# 💻 Live Code Editor

A fully functional browser-based code editor that allows users to write, execute, save, and download HTML, CSS, and JavaScript code in real time. The application includes user authentication, local storage support, and integration with a PHP backend for saving and loading code from a server.

## 🚀 Features

- 🔐 **User Authentication**: Sign up and log in using local storage.
- 🧠 **Code Editor**: Built using [CodeMirror](https://codemirror.net/) with syntax highlighting and theme support.
- 📦 **Local Storage Support**: Save and load code locally in the browser.
- 💾 **Download/Upload Code**: Export your code as `.html`, `.css`, and `.js` files or load from local files.
- 🗃️ **Database Save/Load**: Save and retrieve code to/from a backend using PHP scripts.
- 🎨 **Responsive UI**: Clean, modern, and responsive interface using HTML/CSS.

## 📁 Project Structure

📦 live-code-editor/
├── index.html            # Main editor interface
├── login.html            # Login page
├── signup.html           # Signup page
├── style.css             # Styling for all pages
├── script.js             # Client-side logic
├── save.php              # PHP backend to save code
├── load.php              # PHP backend to load code
