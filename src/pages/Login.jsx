import React, { useState } from "react";
import ForgotPasswordModal from "../components/ForgotPasswordModal";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [department, setDepartment] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URI}/api/auth/login`,
        {
          email,
          password,
        //   department,
        //   role,
        }
      );
      // You can store token or user info here if needed
      if (res.data && res.data.name) {
        localStorage.setItem("employeeName", res.data.name);
      }
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-sm">
        {/* Header */}
        <div className="bg-blue-600 rounded-t-lg p-4 text-center">
          <img
            src="/logo.png"
            alt="Graphura Logo"
            className="mx-auto mb-2 w-32"
          />
          <h2 className="text-white font-semibold text-lg">
            Graphura India Private Limited
          </h2>
        </div>

        {/* Form */}
        <form className="p-6 space-y-4" onSubmit={handleLogin}>
          <select
            className="w-full border border-gray-300 rounded-md p-2"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            required
          >
            <option value="">Department</option>
            <option value="HR">HR</option>
            <option value="IT">IT</option>
            {/* Add more departments as needed */}
          </select>

          <select
            className="w-full border border-gray-300 rounded-md p-2"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="">Role</option>
            <option value="Employee">Employee</option>
            <option value="Manager">Manager</option>
            {/* Add more roles as needed */}
          </select>

          <input
            type="email"
            placeholder="Email_id"
            className="w-full border border-gray-300 rounded-md p-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-md p-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            ↣ Login
          </button>

          <div className="text-center mt-2">
            <button
              type="button"
              onClick={() => setShowForgotModal(true)}
              className="text-blue-600 hover:underline text-sm font-medium"
            >
              Forgot Password?
            </button>
          </div>
        </form>
      </div>

      {showForgotModal && (
        <ForgotPasswordModal onClose={() => setShowForgotModal(false)} />
      )}
    </div>
  );
};

export default Login;