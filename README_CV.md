# CV React (Vite) - Quick Start

This folder contains a minimal Vite + React app that reads `dataMahasiswa.json` from the project root and displays a simple CV layout.

How to run (Windows PowerShell):

```powershell
npm install
npm run dev
```

Open the printed URL (usually `http://localhost:5173`) and verify the CV appears. Use the "Print / Save PDF" button to save as PDF.

Notes:
- The app fetches `/dataMahasiswa.json` from the project root. If your JSON file is in a different path, update the fetch path in `src/App.jsx`.
- The components are simple and tolerant of different JSON shapes (tries common keys like `profile`, `about`, `experience`, `education`, `skills`, `contact`).
