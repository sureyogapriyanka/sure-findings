import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import * as storage from './lib/storage.js';

// Initialize storage
storage.initializeStorage();

createRoot(document.getElementById("root")).render(<App />);