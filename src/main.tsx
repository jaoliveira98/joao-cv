import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./index.css";
import CodeSnippets from "./pages/CodeSnippets";
import Home from "./pages/Home";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Home />} />
          <Route path="code-snippets" element={<CodeSnippets />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
