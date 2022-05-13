import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Nav from "./components/Nav/Nav";

// Pages
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import ProjectFormPage from "./pages/ProjectFormPage";
import LoginPage from "./pages/LoginPage";
import ProjectPledgesPage from "./pages/ProjectPledgesPage";
import PunsPage from "./pages/PunsPage";

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
          <Route path="/project/create" element={<ProjectFormPage />} />
          <Route path="/pledges/:id" element={<ProjectPledgesPage />} />
          <Route path="/puns/" element={<PunsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// From thinkific/class session
// function App() {
//   return (
//     <Router>
//       <div>
//         <Nav />
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/project/:id" element={<ProjectPage />} />
//           <Route path="/pledges/:id" element={<ProjectPledgesPage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
