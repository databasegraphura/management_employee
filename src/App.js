import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import MyProjects from "./pages/MyProjects";
import Help from "./pages/Help";
import PayOut from "./pages/PayOut";
import CompletedProjects from "./pages/CompletedProjects";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/my-projects" element={<MyProjects />} />
        <Route path="/completed-projects" element={<CompletedProjects />} />
        <Route path="/payout" element={<PayOut/>} />
        <Route path="/help" element={<Help />} />
        {/* Add more routes here later */}
      </Routes>
    </Router>
  );
}

export default App;
