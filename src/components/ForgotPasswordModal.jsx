import React, { useState } from "react";

const ForgotPasswordModal = ({ onClose }) => {
  const [email, setEmail] = useState("");

  const handleReset = (e) => {
    e.preventDefault();
    alert(`Reset link sent to ${email}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg relative">
        {/* Close Icon */}
        <button
          className="absolute top-2 right-3 text-xl text-gray-500 hover:text-black"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Modal Header */}
        <h2 className="text-lg font-semibold mb-2 flex items-center gap-2">
          <span>🔑</span> Forgot Password
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          Enter your email address and we’ll send you a password reset link.
        </p>

        {/* Email Input */}
        <form onSubmit={handleReset} className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition flex items-center justify-center gap-2"
          >
             Send Reset Link
          </button>

          <button
            type="button"
            onClick={onClose}
            className="w-full bg-gray-700 text-white py-2 rounded-md hover:bg-gray-800 transition flex items-center justify-center gap-2"
          >
            ← Back to Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordModal;
