import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Nav from "./components/Nav/Nav";

// Pages
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import LoginPage from "./pages/LoginPage";
import ProjectPledgesPage from "./pages/ProjectPledgesPage";

// Styles
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/project/:id" element={<ProjectPage />} />
          <Route path="/pledge/:id" element={<ProjectPledgesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
