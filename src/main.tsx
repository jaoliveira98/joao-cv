import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home.tsx";
import Styles from "./pages/Styles.tsx";
import { EditorProvider } from "./context/EditorContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <EditorProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<Home />} />
            <Route path="styles.css" element={<Styles />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </EditorProvider>
  </StrictMode>
);
