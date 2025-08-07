import { useState } from "react";

export default function ProjectTable({ title }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState("");

  const rows = Array.from({ length: 6 }, (_, i) => ({
    company: `Company ${i + 1}`,
    invoice: "Bold text column",
    service: "Bold text column",
    date: "Bold text column",
    deadline: "Bold text column",
    activity: "Bold text column",
  }));

  const handleUpdateClick = (company) => {
    setSelectedCompany(company);
    setShowModal(true);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg mt-6 p-6">
      {/* Outer card with stronger shadow */}
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="bg-white rounded-xl shadow-md overflow-x-auto p-4">
        {/* Inner white box (table wrapper) */}
        <table className="w-full table-auto text-sm text-left">
          <thead className="text-gray-800 font-bold bg-white">
            <tr>
              <th className="px-4 py-3">Company Name</th>
              <th className="px-4 py-3">Invoice No.</th>
              <th className="px-4 py-3">Services</th>
              <th className="px-4 py-3">Activity</th>
              <th className="px-4 py-3">Dead line</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={idx} className="border-t text-gray-700 font-medium">
                <td className="px-4 py-3">{row.company}</td>
                <td className="px-4 py-3">{row.invoice}</td>
                <td className="px-4 py-3">{row.service}</td>
                <td className="px-4 py-3">{row.activity}</td>
                <td className="px-4 py-3">{row.deadline}</td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => handleUpdateClick(row.company)}
                    className="bg-blue-500 text-white px-4 py-1 rounded text-sm font-semibold hover:bg-blue-600 transition"
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-2xl">
            <h2 className="text-2xl font-bold text-center mb-6">{selectedCompany}</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Download Logo",
                "Download Brochure",
                "Download Client Images",
                "Download Company Details",
                "Client References",
                "Download Content",
                "Download Client Videos",
                "Other Details",
              ].map((label, index) => (
                <button
                  key={index}
                  className="flex justify-between items-center px-4 py-3 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200 transition"
                >
                  <span className="font-medium text-gray-700">{label}</span>
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                    />
                  </svg>
                </button>
              ))}
            </div>
            <div className="text-center mt-8">
              <button
                onClick={() => setShowModal(false)}
                className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
