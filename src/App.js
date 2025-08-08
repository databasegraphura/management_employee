import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import MyProjects from "./pages/MyProjects";
import Help from "./pages/Help";
import PayOut from "./pages/PayOut";
import CompletedProjects from "./pages/CompletedProjects";
import Login from "./pages/Login";

// ProtectedRoute component
function ProtectedRoute({ children }) {
  const employeeName = localStorage.getItem("employeeName");
  return employeeName ? children : <Navigate to="/" replace />;
}

// PublicRoute component for login
function PublicRoute({ children }) {
  const employeeName = localStorage.getItem("employeeName");
  return !employeeName ? children : <Navigate to="/dashboard" replace />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/my-projects"
          element={
            <ProtectedRoute>
              <MyProjects />
            </ProtectedRoute>
          }
        />
        <Route
          path="/completed-projects"
          element={
            <ProtectedRoute>
              <CompletedProjects />
            </ProtectedRoute>
          }
        />
        <Route
          path="/payout"
          element={
            <ProtectedRoute>
              <PayOut />
            </ProtectedRoute>
          }
        />
        <Route
          path="/help"
          element={
            <ProtectedRoute>
              <Help />
            </ProtectedRoute>
          }
        />
        {/* Add more routes here later */}
      </Routes>
    </Router>
  );
}

export default App;