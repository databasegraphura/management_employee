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
    <div className="bg-white rounded shadow mt-6 p-4 overflow-x-auto">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <table className="w-full table-auto text-sm text-left">
        <thead className="text-gray-600 font-bold">
          <tr>
            <th className="px-2 py-2">Company Name</th>
            <th className="px-2 py-2">Invoice No.</th>
            <th className="px-2 py-2">Services</th>
            <th className="px-2 py-2">Date</th>
            <th className="px-2 py-2">Dead line</th>
            <th className="px-2 py-2">Activity</th>
            <th className="px-2 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx} className="border-t">
              <td className="px-2 py-2">{row.company}</td>
              <td className="px-2 py-2">{row.invoice}</td>
              <td className="px-2 py-2">{row.service}</td>
              <td className="px-2 py-2">{row.date}</td>
              <td className="px-2 py-2">{row.deadline}</td>
              <td className="px-2 py-2">{row.activity}</td>
              <td className="px-2 py-2">
                <button
                  onClick={() => handleUpdateClick(row.company)}
                  className="bg-blue-500 text-white px-2 py-1 rounded text-xs"
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
            <h2 className="text-xl font-bold text-center mb-6">{selectedCompany}</h2>
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
                  className="flex justify-between items-center px-4 py-2 bg-gray-100 rounded shadow hover:bg-gray-200"
                >
                  <span>{label}</span>
                  <svg
                    className="w-4 h-4"
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
                    ></path>
                  </svg>
                </button>
              ))}
            </div>
            <div className="text-center mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="bg-blue-500 text-white px-4 py-2 rounded"
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
