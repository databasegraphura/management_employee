import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import MyProjects from "./pages/MyProjects";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/my-projects" element={<MyProjects />} />
        {/* Add more routes here later */}
      </Routes>
    </Router>
  );
}

export default App;
