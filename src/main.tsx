import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";


console.log("Supabase ENV check:", {
  projectId: import.meta.env.VITE_SUPABASE_PROJECT_ID,
  key: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
  url: import.meta.env.VITE_SUPABASE_URL,
});

createRoot(document.getElementById("root")!).render(<App />);
